const core = require('@actions/core')
const fetch = require('node-fetch')

async function run() {
  // required
  const xHoneycombTeam = core.getInput('X-Honeycomb-Team')
  const dataset = core.getInput('dataset')
  const markerId = core.getInput('markerId')
  if ( !xHoneycombTeam ) {
    throw new Error("missing X-Honeycomb-Team input")
  }
  if ( !dataset ) {
    throw new Error("missing dataset input")
  }
  if ( !markerId ) {
    throw new Error("missing markerId input")
  }

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
