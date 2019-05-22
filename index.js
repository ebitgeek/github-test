const request = require('request-promise')

async function requestGetGoogle({ proxy, followAllRedirects, resolveWithFullResponse, jar}) {
  let resonpse = await request.get('https://www.google.com', { proxy, followAllRedirects, jar, resolveWithFullResponse, rejectUnauthorized: false })
  return resonpse;
}

async function main() {
  let jar = request.jar()
  let proxy = 'http://127.0.0.1:8080'
  let followAllRedirects = true
  let resolveWithFullResponse = true

  jar.setCookie(request.cookie('test=test'), 'https://www.google.com')
  let response = await requestGetGoogle({ proxy, followAllRedirects, resolveWithFullResponse, jar })
  console.log(response)
}

main()
