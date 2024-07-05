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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254719485000";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_22_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3LFxuICAgICAgICAzNixcbiAgICAgICAgMjA4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNixcbiAgICAgICAgMzksXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg2LFxuICAgICAgICA2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4OCxcbiAgICAgICAgNixcbiAgICAgICAgMTg5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRVUgxdXFmU2RGbnF6WThSaVJ6K29kVExWNGtqMGFZd1Q1T29IcG95TnEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSa3ZyUmVTNlNEMmtOYkRFV1NUVXRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg1YTdjM2M4LWRlNjUtNGU2Yy1iZjIwLWE4ZDQxNDUxMThjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAyMDUsXG4gICAgICA1NSxcbiAgICAgIDIzNyxcbiAgICAgIDEyNSxcbiAgICAgIDYwLFxuICAgICAgMTE1LFxuICAgICAgMTU3LFxuICAgICAgMjQ3LFxuICAgICAgMjIsXG4gICAgICAzMixcbiAgICAgIDE1MSxcbiAgICAgIDEsXG4gICAgICAxOTIsXG4gICAgICAxOTAsXG4gICAgICAyMTAsXG4gICAgICA5NyxcbiAgICAgIDE5MixcbiAgICAgIDIwNCxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAzOCxcbiAgICAgIDE1OSxcbiAgICAgIDI5LFxuICAgICAgMTYyLFxuICAgICAgMTYzLFxuICAgICAgMjksXG4gICAgICA2NCxcbiAgICAgIDI1NCxcbiAgICAgIDMyLFxuICAgICAgMjE4LFxuICAgICAgMTk5LFxuICAgICAgMjIxLFxuICAgICAgNzksXG4gICAgICAxMzIsXG4gICAgICAxMzAsXG4gICAgICA1MyxcbiAgICAgIDEwLFxuICAgICAgMTA5LFxuICAgICAgMjM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNGQlRQTldDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTk0ODUwMDA6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCRU5cIixcbiAgICBcImxpZFwiOiBcIjE3NjE2MjgzMTYyMjM1NzozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLM0t2dE1ERU1mYW5yUUdHQTBnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi8zZjZGUkVabjNPanArMVA5Vk9yUk1xSXg5UFNFS0hvcFlUUEVKWE9tRW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQTE3cVdTcjlHQlArS0lVc3llUVd0dkg1TU1YMS82b2NGZ1dkTW1odWJmckFOVGtXRU9iNEZwYWozc0JYdUdxTld2UmhrbnNJWnROTnQwTXk3OXc1Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUjNtZjFzMStQQTJUK29WQ1VuMDZJTG5adW40a1Y1OFQ4d2RzQjZTOHhiR0t5WHJtOXNlekZTUE1ZWU9CNGRZUHp5QzVzamtHeFYzWkVRRUs4eVJ6Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE5NDg1MDAwOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTY3NzU1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
