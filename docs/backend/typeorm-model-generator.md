# typeorm-model-generator

## how to install?

```bash
yarn global add typeorm-model-generator
```

## how to use?

```bash
typeorm-model-generator -h localhost -d develop -p 3306 -u docker -x 'docker' -e mysql -o .
```

## filename convert

```bash
# Convert AaaaBbbbCcc.ts => aaaa-bbbb-ccc.ts
bash convert-file-name.bash {dir_path}
```

## reference

- https://github.com/Kononnable/typeorm-model-generator
