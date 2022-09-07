/*
    user table
*/
DROP TABLE IF EXISTS _user;
CREATE TABLE IF NOT EXISTS _user (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `account` VARCHAR(255) UNIQUE NOT NULL COMMENT 'account',
  `password` VARCHAR(255) NOT NULL COMMENT 'password',
  `username` VARCHAR(255) NOT NULL COMMENT 'username',
  `is_admin` INT DEFAULT 0 COMMENT 'is admin',
  `is_developer` INT DEFAULT 0 COMMENT 'is developer',
  `sign_in_at` DATETIME DEFAULT NULL COMMENT 'sign in time',
  `sign_out_at` DATETIME DEFAULT NULL COMMENT 'sign out time',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="user";

/*
  query table
*/
DROP TABLE IF EXISTS _query;
CREATE TABLE IF NOT EXISTS _query (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `type` VARCHAR(30) NOT NULL COMMENT 'type',
  `exec_query` TEXT NOT NULL COMMENT 'execute query',
  `success_cnt` INT NOT NULL COMMENT 'success count',
  `fail_cnt` INT NOT NULL COMMENT 'fail count',
  `user_id` INT NOT NULL COMMENT 'user id',
  `ip_address` VARCHAR(255) NOT NULL COMMENT 'ip address',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="query";