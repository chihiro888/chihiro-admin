/*
    admin table
*/
DROP TABLE IF EXISTS _admin;
CREATE TABLE IF NOT EXISTS _admin (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `account` VARCHAR(255) UNIQUE NOT NULL COMMENT 'account',
  `password` VARCHAR(255) NOT NULL COMMENT 'password',
  `username` VARCHAR(255) NOT NULL COMMENT 'username',
  `is_system_admin` INT DEFAULT 0 COMMENT 'is system admin',
  `is_admin` INT DEFAULT 0 COMMENT 'is admin',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="admin";

/*
    login history table
*/
DROP TABLE IF EXISTS _login_history;
CREATE TABLE IF NOT EXISTS _login_history (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `user_id` VARCHAR(255) UNIQUE NOT NULL COMMENT 'account',
  `type` INT COMMENT 'login = 1, logout = 0',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time', -- not used
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time' -- not used
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="login history";
