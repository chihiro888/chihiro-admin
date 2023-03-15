/*
    user table
*/
DROP TABLE IF EXISTS _user;
CREATE TABLE IF NOT EXISTS _user (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `account` VARCHAR(255) UNIQUE NOT NULL COMMENT 'account',
  `password` VARCHAR(255) NOT NULL COMMENT 'password',
  `intro` VARCHAR(255) COMMENT 'intro',
  `username` VARCHAR(255) NOT NULL COMMENT 'username',
  `role` VARCHAR(10) DEFAULT 'U' COMMENT 'role (U: 사용자, A: 관리자, SA: 시스템관리자)',
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
    page table
*/
DROP TABLE IF EXISTS _page;
CREATE TABLE IF NOT EXISTS _page (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `url` VARCHAR(255) NOT NULL COMMENT 'url',
  `title` VARCHAR(255) NOT NULL COMMENT 'title',
  `sub_title` TEXT NOT NULL COMMENT 'sub title',
  `use_list_api` BOOLEAN DEFAULT 1 COMMENT 'use list api',
  `list_api` VARCHAR(255) COMMENT 'list api',
  `use_create_api` BOOLEAN DEFAULT 0 COMMENT 'use create api',
  `create_api` VARCHAR(255) COMMENT 'create api',
  `use_detail_api` BOOLEAN DEFAULT 0 COMMENT 'use detail api',
  `detail_api` VARCHAR(255) COMMENT 'detail api',
  `use_delete_api` BOOLEAN DEFAULT 0 COMMENT 'use delete api',
  `delete_api` VARCHAR(255) COMMENT 'delete api',
  `table_header` TEXT COMMENT 'table header (JSON)',
  `table_content` TEXT COMMENT 'table content (JSON)',
  `add_form` TEXT COMMENT 'add form (JSON)',
  `detail_form` TEXT COMMENT 'detail form (JSON)',
  `search_form` TEXT COMMENT 'search form (JSON)',
  `action_list` TEXT COMMENT 'action list (JSON)',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="page";


/*
    menu table
*/
DROP TABLE IF EXISTS _menu;
CREATE TABLE IF NOT EXISTS _menu (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `type`  VARCHAR(255) COMMENT 'type ex) menu, line',
  `title` VARCHAR(255) NOT NULL COMMENT 'title',
  `icon` VARCHAR(255) COMMENT 'icon',
  `route` VARCHAR(255) COMMENT 'route',
  `path` VARCHAR(255) COMMENT 'path',
  `page_id` INT COMMENT 'page id',
  `created_at` DATETIME DEFAULT now() COMMENT 'create time',
  `updated_at` DATETIME DEFAULT NULL COMMENT 'update time',
  `deleted_at` DATETIME DEFAULT NULL COMMENT 'delete time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="_menu";

/*
    menu order table
*/
DROP TABLE IF EXISTS _menu_order;
CREATE TABLE IF NOT EXISTS _menu_order (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT COMMENT 'id',
  `menu_id`  INT COMMENT 'menu id',
  `menu_order` INT COMMENT 'order',
  `permission` VARCHAR(255) NOT NULL COMMENT 'permission'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT="_menu_order";