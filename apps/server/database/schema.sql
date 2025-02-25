CREATE DATABASE IF NOT EXISTS bet_db;
USE bet_db;

CREATE TABLE IF NOT EXISTS bets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId VARCHAR(50) NOT NULL,
    outcomes JSON NOT NULL,
    wagerAmount DECIMAL(10,2) NOT NULL,
    currency ENUM('Coin', 'Cash') NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
