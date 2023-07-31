/*
    admin table
*/
DROP TABLE IF EXISTS _admin;
CREATE TABLE IF NOT EXISTS _admin (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `account` VARCHAR(255) UNIQUE NOT NULL COMMENT 'account',
  `password` VARCHAR(255) NOT NULL COMMENT 'password',
  `intro` VARCHAR(255) COMMENT 'intro',
  `username` VARCHAR(255) NOT NULL COMMENT 'username',
  `role` VARCHAR(10) DEFAULT 'U' COMMENT 'role (A: 관리자, SA: 시스템관리자)',
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
  `value` TEXT NOT NULL COMMENT 'value',
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
  `table_pk` INT COMMENT 'table pk',
  `type` VARCHAR(255) COMMENT 'type',
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

/*
    history action table
*/
DROP TABLE IF EXISTS _history_action;
CREATE TABLE IF NOT EXISTS _history_action (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `admin_id` INT NOT NULL COMMENT 'admin id', -- 관리자 아이디
  `api_name` VARCHAR(255) COMMENT 'to username', -- API명
  `params` TEXT COMMENT 'to username', -- 파라미터
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="history action";