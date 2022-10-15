#!/usr/bin/env node

import yaml from 'js-yaml'
import fs from 'fs'

const DATA_FILE = './data/data.yaml'
const DATA_OUTPUT = './src/lib/data.json'

function gen() {
  // load data
  const data = yaml.load(fs.readFileSync(DATA_FILE))

  // add generation time
  data.time = new Date

  // write to json
  fs.writeFileSync(DATA_OUTPUT, JSON.stringify(data, null, 2))
  console.log(`Writed: ${DATA_OUTPUT}`)
}

gen()
