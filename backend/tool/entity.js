var fs = require('fs')
var path = require('path')
var rimraf = require('rimraf')

const main = () => {
  const srcDir = path.join('.', 'entities')
  const desDir = path.join('.', 'src', 'entities')

  const camelToSnakeCase = (a) => {
    return a.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
  }

  const convertFirstChar = (a) => {
    return a.charAt(0).toLowerCase() + a.slice(1)
  }

  const convertExt = (a) => {
    return a.replace('.ts', '.entity.ts')
  }

  try {
    fs.readdirSync(srcDir).forEach((file) => {
      const fileName = convertExt(camelToSnakeCase(convertFirstChar(file)))
      const src = path.join(srcDir, file)
      const des = path.join(desDir, fileName)

      fs.copyFile(src, des, (err) => {
        // logging
        console.log(`${src}`)
        console.log(`-> ${des}`)

        if (err) throw err
        console.log('[INFO] create file successful')

        fs.unlinkSync(src)
      })
    })

    rimraf(srcDir, function () {
      console.log('[INFO] remove source directory')
      fs.unlinkSync('./ormconfig.json')
      console.log('[INFO] remove ormconfig.json')
    })
  } catch (e) {
    console.log(
      `[WARN] In the backend directory, run the command below to create the entities directory.
--------------------------------------------------------------------------------------------
<usage>
typeorm-model-generator -h <host> -d <database> -p <port> -u <user> -x '<password>' -e mysql -o .

<sample>
typeorm-model-generator -h localhost -d develop -p 3306 -u docker -x 'docker' -e mysql -o .
--------------------------------------------------------------------------------------------`
    )
  }
}

main()
