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
  `sign_in_at` DATETIME DEFAULT NULL COMMENT 'sign in time',
  `sign_out_at` DATETIME DEFAULT NULL COMMENT 'sign out time',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="user";