DROP TABLE IF EXISTS _session;
CREATE TABLE IF NOT EXISTS _session (
  `id` VARCHAR(255) PRIMARY KEY COMMENT 'session id',
  `json` TEXT COMMENT 'session data',
  `expired_at` BIGINT COMMENT 'expired time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='session';