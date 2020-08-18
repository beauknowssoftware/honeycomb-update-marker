const core = require('@actions/core')
const fetch = require('node-fetch')

async function run() {
  const xHoneycombTeam = core.getInput('X-Honeycomb-Team')
  const dataset = core.getInput('dataset')
  const markerId = core.getInput('markerId')
  const end = core.getInput('end')
  const type = core.getInput('type')
  const message = core.getInput('message')
  const url = core.getInput('url')

  let marker = {}
  if ( url ) {
    marker.url = url
  }
  if ( type ) {
    marker.type = type
  }
  if ( message ) {
    marker.message = message
  }
  if ( end ) {
    marker.end_date = Math.floor(Date.now()/1000)
  }

  await fetch(`https://api.honeycomb.io/1/markers/${dataset}/${markerId}`, {
    method: 'PUT',
    body: JSON.stringify(marker),
    headers: { 'X-Honeycomb-Team': xHoneycombTeam },
  })
}

run().catch(function (err) {
  core.setFailed(err.message)
})
