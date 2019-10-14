const WebhooksApi = require('@octokit/webhooks')
const webhooks = new WebhooksApi({
  secret: 'arnob'
})

webhooks.on('*', ({id, name, payload}) => {
  console.log(name, 'event received')
})

require('http').createServer(webhooks.middleware).listen(3000)