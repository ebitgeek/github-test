const request = require('request-promise')
const axios = require('axios')

async function main () {
  let jar = request.jar()
  let response = await request.get('https://google.com', { proxy: 'socks5://127.0.0.1:1080', followAllRedirects: true, resolveWithFullResponse: true, jar: jar })
  console.log(response)
  // let response = await axios.default.get('http://baidu.com')
  // console.log(response)
}

main()
