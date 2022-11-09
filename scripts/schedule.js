
import fs from 'fs'

const SCHEDULE_URL = 'https://cfp.ethbrno.cz/ethbrno2/schedule/export/schedule.json'
const OUTPUT = './src/lib/events.json'

function duration (str) {
  const spl = str.split(':')
  return (Number(spl[0]) * 60) + Number(spl[1])
}

async function run () {

  const resp = await fetch(SCHEDULE_URL)
  const data = await resp.json()

  const rooms = []
  const out = []
  for (const day of data.schedule.conference.days) {
    for (const roomKey of Object.keys(day.rooms)) {
      for (const item of day.rooms[roomKey]) {
        const dur = 
        out.push({
          id: item.id,
          name: item.title,
          description: item.abstract,
          speakers: item.persons.map(p => {
            return {
              id: p.id,
              name: p.public_name
            }
          }),
          datetime: item.date,
          duration: duration(item.duration),
          stage: roomKey,
          eventType: item.type,
          track: item.track
        })
      }
    }
  }

  console.log(`Writing output: ${OUTPUT}`)
  fs.writeFileSync(OUTPUT, JSON.stringify(out, null, 2))
}

run()

