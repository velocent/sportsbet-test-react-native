# PropX Take-Home Assessment

## Overview

This project was developed as a proof of skills, not for production use. The goal was to showcase clean architecture, maintainability, and backend integration rather than production-level robustness. The implementation covers a multi-currency betting flow based on the provided Figma design.

## Tech Stack

- Frontend: React Native (Expo), Relay

- Backend: Node.js, Express, GraphQL API

- Database: MySQL

- Infrastructure: Terraform (deploys backend to Docker)

## Database Choice & Assumptions

MySQL was chosen for its structured data handling, transactional integrity, and scalability. Assumptions made:

Bets follow a fixed structure (user ID, outcomes, wager amount, currency, timestamp).

Users should be able to retrieve their bets efficiently.

### Schema Definition
```sql
CREATE TABLE IF NOT EXISTS bets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(50) NOT NULL,
    outcomes VARCHAR(50) NOT NULL,
    wagerAmount DECIMAL(10,2) NOT NULL,
    currency ENUM('Coin', 'Cash') NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Running the Project

### Prerequisites

- Node.js & npm (Frontend dependencies)

- Docker & Terraform (Backend deployment)

### Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/velocent/sportsbet-test-react-native.git
```

#### 2. Deploy Backend with Terraform

```bash
cd infra
terraform init
terraform apply
```

#### 3. Run Frontend Manually

```bash
cd apps/mobile
cp .env.example .env
npm i
npm start
```

### Future Enhancements

- Add authentication & authorization.

- Improve error handling and logging.

- Optimize GraphQL queries for better performance.

This project was built to demonstrate technical skills, not as a production-ready solution. Let me know if you have any questions!