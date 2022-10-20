import yaml from 'js-yaml'
import fs from 'fs'

const DATA_FILE = './data/data.yaml'
const DATA_OUTPUT = './src/lib/data.json'
const DATA_STATIC_OUTPUT = './static/data.json'
const PKG_FILE = './package.json'
const VERSION_PATTERN = /^v\d{4}-\d{2}-\d{2}$/

function gen() {
  // load data
  const data = yaml.load(fs.readFileSync(DATA_FILE))
  const pkg = JSON.parse(fs.readFileSync(PKG_FILE))

  if (!pkg.version.match(VERSION_PATTERN)) {
    console.error(`Version not match pattern [${VERSION_PATTERN}]: ${pkg.version}`)
    process.exit(1)
  }

  // add generation time
  data.time = new Date
  data.version = pkg.version

  // write to json
  fs.writeFileSync(DATA_OUTPUT, JSON.stringify(data, null, 2))
  console.log(`Writed: ${DATA_OUTPUT}`)

  // write to json (static)
  fs.writeFileSync(DATA_STATIC_OUTPUT, JSON.stringify(data, null, 2))
  console.log(`Writed: ${DATA_STATIC_OUTPUT}`)
}

gen()
