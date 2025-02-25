terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {}

# Create Docker Network
resource "docker_network" "app_network" {
  name = "sportsbet_app_network"
}

# Deploy MySQL Container
resource "docker_container" "mysql" {
  name  = "mysql-container"
  image = "mysql:8.2"

  env = [
    "MYSQL_ROOT_PASSWORD=root",
    "MYSQL_DATABASE=bet_db",
  ]

  ports {
    internal = 3306
    external = 3306
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  volumes {
    host_path = "${path.cwd}/../apps/server/database/schema.sql"
    container_path = "/docker-entrypoint-initdb.d/init.sql"
  }
}

resource "docker_image" "sportsbet_server" {
  name = "sportsbet-server:latest"

  build {
    context    = "../apps/server"
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "sbb" {
  name  = "sportsbet-container"
  image = docker_image.sportsbet_server.name

  env = [
    "DB_HOST=mysql-container",
    "DB_USER=root",
    "DB_PASSWORD=root",
    "DB_NAME=bet_db",
    "DB_PORT=3306",
    "PORT=5000"
  ]

  ports {
    internal = 5000
    external = 5000
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  depends_on = [docker_container.mysql]
}

# output "mysql_connection" {
#   value = "mysql://root:root@${docker_container.mysql.name}:3306/bet_db"
# }

output "graphql_url" {
  value = "http://127.0.0.1:5000/graphql"
}
