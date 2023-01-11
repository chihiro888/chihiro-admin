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
  `user_id` INT NOT NULL COMMENT 'user id',
  `type` INT COMMENT 'login = 1, logout = 0',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time', -- not used
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time' -- not used
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="login history";

/*
    global table
*/
DROP TABLE IF EXISTS _global;
CREATE TABLE IF NOT EXISTS _global (
  `key` VARCHAR(255) PRIMARY KEY NOT NULL COMMENT 'key',
  `value` VARCHAR(255) NOT NULL COMMENT 'value',
  `memo` VARCHAR(255) COMMENT 'memo',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time' -- pysical delete
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="global";

/*
    file table
*/
DROP TABLE IF EXISTS _file;
CREATE TABLE IF NOT EXISTS _file (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `table_name` VARCHAR(255) COMMENT 'table name',
  `table_pk` VARCHAR(255) COMMENT 'table pk',
  `raw_name` VARCHAR(255) NOT NULL COMMENT 'raw name',
  `enc_name` VARCHAR(255) NOT NULL COMMENT 'enc name',
  `extension` VARCHAR(255) NOT NULL COMMENT 'extension',
  `size` INT NOT NULL COMMENT 'size',
  `h_size` VARCHAR(255) NOT NULL COMMENT 'human size',
  `abs_path` VARCHAR(255) NOT NULL COMMENT 'abs path',
  `note` VARCHAR(255) COMMENT 'note',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="file";
