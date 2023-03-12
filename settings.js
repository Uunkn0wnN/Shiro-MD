//ubah nomor owner dan wm di sini 

const fs = require('fs')
const chalk = require('chalk')
global.owner = ['628983755600']
global.ownernomer = "628983755600"
global.premium = ['628983755600']
global.packname = 'Sticker By'
global.author = 'Shiro 💠'
global.sessionName = 'session'
global.jumlha = '999999'
global.jumhal = '99999999999'
global.jumlah = '9999999'
global.prefa = ['','!','.','#','Shiro.']
global.sp = ''
global.mess = {
    success: 'success ✅',
    admin: 'Perintah ini hanya bisa digunakan oleh Admin Grup',
    botAdmin: 'Bot Harus menjadi admin',
    premime: 'Perintah ini khusus member premium\nMinat jadi premium? hubungi owner ketik .owner',
    owner: 'Perintah ini hanya dapat digunakan oleh owner bot',
    group: 'Perintah ini hanya bisa digunakan di grup',
    private: 'Perintah ini hanya bisa digunakan di private message',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_Wait a minute, data is being processed!_',
    error: 'Error!',
    errapi: 'Maaf terjadi kesalahan terhadap api',
    errmor: 'maaf terjadi Kesalahan terhafap Sistem',
    endLimit: 'maaf Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12:00',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/image/tio.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/BOTCAHX'
global.webmy = 'https://api.botcahx.biz.id'
global.ghme = 'https://github.com/BOTCAHX'
global.botname = 'Shiro 💠'
global.omlen = 'Made by Shiro 💠'
global.weem = 'Shiro 💠'
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
