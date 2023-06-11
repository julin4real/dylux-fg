import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['19543371477', 'FG98', true],
  ['1954371477'], 
  ['19543371477'] 
] //Numeros de owner 

global.mods = ['19543371477'] 
global.prems = ['19543371477']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'julin4real┃ᴮᴼᵀ' 
global.author = '@julin4real-insta' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/julin4real\n' 
global.dygp = 'https://chat.whatsapp.com/'
global.fgsc = 'https://github.com/FG98F/julin4real' 
global.fgyt = 'https://youtube.com/@Anitum'
global.fgpyp = 'https://paypal.me/julin4real'
global.fglog = 'https://imgur.com/JJrTswv.png' 

global.wait = '*⌛ _telechargement..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
