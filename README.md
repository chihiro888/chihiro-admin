# Mysql Query Saver

## Initial Setting

### install nodeenv for mac

```bash
brew install nodeenv
```

### create nodeenv

```bash
nodeenv --node=16.16.0 nenv
```

### setup nodeenv

```bash
. nenv/bin/activate
```

### install yarn

```bash
npm install -g yarn
```

## database

```bash
cd infra
docker-compose up
```

## backend

```bash
cd backend
yarn install

# if local
yarn start:local

# if development
yarn start:dev

# if production
yarn start:prod
```

## frontend

```bash
cd frontend
yarn install
yarn start
```
