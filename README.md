# Chihiro Develop Kit

- You can easily create an administrator dashboard by providing a large number of samples.
- Requires node.js 16.16.0 version.
- Use docker when building a database in a local environment.

## get started

- Proceed in the order of "database -> backend -> frontend"

### database

```bash
cd infra
```

```bash
docker-compose up
```

| key           | value     |
| ------------- | --------- |
| host          | localhost |
| port          | 3306      |
| database      | develop   |
| root user     | root      |
| root password | root      |
| user          | docker    |
| password      | docker    |

:warning: issue : mysql 8 password protocol

- Run the queries below sequentially.
- caching_sha2_password -> mysql_native_password

```sql
select host, user, plugin, authentication_string from mysql.user;

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
ALTER USER 'docker'@'%' IDENTIFIED WITH mysql_native_password BY 'docker';
```

### backend

```bash
cd backend
```

```bash
yarn install
```

```bash
yarn load:yaml
```

- Run the commands below according to the situation.

```bash
# if local in MAC
yarn start:local

# if development in MAC
yarn start:dev

# if production in MAC
yarn start:prod
```

```bash
# if local in Windows
yarn start:local_win

# if development in Windows
yarn start:dev_win

# if production in Windows
yarn start:prod_win
```

http://localhost:9000/api

### frontend

```bash
cd frontend
```

```bash
yarn install
```

```bash
yarn start
```

http://localhost:3000/

## Demo

### backend

<img src="/docs/image/backend_init.png" width="350"/>

### frontend

<img src="/docs/image/frontend_init.png" width="350"/>

## Document

English

- in ready

Korean

- https://github.com/chihiro888/chihiro-develop-kit/tree/develop/docs/ko

Japanese

- in ready

## License

<img src="/docs/image/License.png" width="300"/>

https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469
