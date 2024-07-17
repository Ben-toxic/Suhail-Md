const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254719485000" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263782863950";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_07_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODQsXG4gICAgICAgIDU4LFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDUzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICA5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzksXG4gICAgICAgIDMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQyLFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJYMGRRdk9PZXRVWGxtQnZtZDZveWZwSmwrdUdMWjNXbnZPa1drUzZPNWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzgyODYzOTUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCMDRGOTYwREY2NDZEOEFBNzU5NjgxNDBCREE4RkIyQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyNTA0MjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODI4NjM5NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE4RTRBN0RDMEZDRjA0N0YwRTg1MTI5OUE5NUVBQjE2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTI1MDQyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6SGtmQ0VMM1RYQ0Yza1ROc0tycFlRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYwYTEzZTYwLWJhOGEtNDRkMC05ODMyLTM3ZWJiZTA1NTEzMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDIsXG4gICAgICAxMSxcbiAgICAgIDEyNyxcbiAgICAgIDg1LFxuICAgICAgMTc2LFxuICAgICAgMTI4LFxuICAgICAgMTE0LFxuICAgICAgMTkzLFxuICAgICAgMTgyLFxuICAgICAgNzQsXG4gICAgICAyMDEsXG4gICAgICA2NSxcbiAgICAgIDEzNixcbiAgICAgIDE1MCxcbiAgICAgIDIzMixcbiAgICAgIDQsXG4gICAgICAyMTIsXG4gICAgICAyMTUsXG4gICAgICAxNjgsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzEsXG4gICAgICAxMyxcbiAgICAgIDY2LFxuICAgICAgNTMsXG4gICAgICA2NixcbiAgICAgIDEzMSxcbiAgICAgIDE0NixcbiAgICAgIDEwNSxcbiAgICAgIDIxMixcbiAgICAgIDM2LFxuICAgICAgMjEwLFxuICAgICAgMjEyLFxuICAgICAgODQsXG4gICAgICAxMixcbiAgICAgIDIyNCxcbiAgICAgIDYzLFxuICAgICAgMzQsXG4gICAgICA5NixcbiAgICAgIDE4MCxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJURTZIUjZEU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzgyODYzOTUwOjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTIyMzg4OTQyNDM5MTA6MzBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTXIgTm9ib2R5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkQ2N2ZZSEVPems0TFFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyK3l5S1pNbElYd2FJVm5hVWVWbFdheWtjZ09Fc3ZSckE1SFFqeGozWmhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5lSW56djYzRTRFd1lDNjhLaUJtTzlNUjMyRHZoWEZuQThUMmNtNXBETy9adzVLVngyY3dBMDdUZTF5L1lia09tUjFQQk9iVTdhWk9EZ3pMMjNvTkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhvVHFGQm96bHRBWFJPbTBwLzlFZjg4OVhaekVTVEZ5SXdtUlV3UDBkUlJaNENjQ3p4ck85V215Z1Z4TEd0SlhpdHlrRENkMWhFeUxvbndjZ3JlMUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4Mjg2Mzk1MDozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyNTA0MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJV1NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlXUy5qc29uIjogIntcImtleURhdGFcIjpcIkJEOERYWXdsejZOU2sveFpSd1plakJsZU5XU0U2OEE5bG56Z2xWem1GbFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyODMxMzY3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Etoo",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "PTfjc5YJWru5LZJ7JHhV66Kv",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝐵𝛯𝛮 𝐵𝑈𝐺 𝐵𝛩𝑇"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "4a4930278cb0ed92fe3ed42f1b8f45c1";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
