const fetch = require('node-fetch')

module.exports = {
  info: 'Рандомный робот',
  usage: '[name]',
  run: async (msg, bot) => {
    let name = msg.args.join(' ')
    if(!name) {
      name += Math.random()
    }
    let res = await fetch('https://robohash.org/' + encodeURI(name) + '.png')
    res = await res.buffer()
    msg.reply({ files: [ { attachment: res, name: 'robot.png' } ] })
  }
}
