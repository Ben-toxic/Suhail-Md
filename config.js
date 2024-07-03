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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_42_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNyxcbiAgICAgICAgNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM5LFxuICAgICAgICA0OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4NixcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICA5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICA2MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNPdTB0ZWRMMHFFSE5aek0vRDhVNDE5MUQvYnJCejNMZ3JnZVdiYzh3T1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlo4TGxPdmtsVFVXM2x6V1BRamc0X0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDJjYWQ2NTYtYTExZS00NDg2LWEyNjgtMjFhMjNlZTFkNzBkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMTk3LFxuICAgICAgNDcsXG4gICAgICA3OCxcbiAgICAgIDE0LFxuICAgICAgMjQ2LFxuICAgICAgMTc4LFxuICAgICAgMjEwLFxuICAgICAgNjQsXG4gICAgICAyNSxcbiAgICAgIDIwNyxcbiAgICAgIDE5LFxuICAgICAgMTMyLFxuICAgICAgMTMsXG4gICAgICAzNixcbiAgICAgIDM5LFxuICAgICAgODgsXG4gICAgICAyMzIsXG4gICAgICAzNyxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTgzLFxuICAgICAgMTI2LFxuICAgICAgNDQsXG4gICAgICAyOSxcbiAgICAgIDE0MyxcbiAgICAgIDE1MyxcbiAgICAgIDE0MixcbiAgICAgIDIzOCxcbiAgICAgIDEyMixcbiAgICAgIDE1MSxcbiAgICAgIDEwLFxuICAgICAgMjE5LFxuICAgICAgODksXG4gICAgICA2NSxcbiAgICAgIDM0LFxuICAgICAgMTgsXG4gICAgICA0OSxcbiAgICAgIDE5OSxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFFCUU45N1lcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxOTQ4NTAwMDozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkJFTlwiLFxuICAgIFwibGlkXCI6IFwiMTc2MTYyODMxNjIyMzU3OjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0szS3Z0TURFTGpUbHJRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiLzNmNkZSRVpuM09qcCsxUDlWT3JSTXFJeDlQU0VLSG9wWVRQRUpYT21Fbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOVkp1cXdKZUROT0VmY295QzJwZlk2Y210YUNScFZvR3ptQ0xuZkFYYktFdmcxa3ZiRDc3WVZoTS9XOFhYeUw5N24zNVpvYitORWxVdktZWW5XdEdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwQmhxQVJzSWNyb0NXbUE3YVpKbGt2Nm0wNlNqcSsvNkF2VzdOSmRUS3NDbmY5eElCMUpKUUp6ZmNsZk5yeTN1NmhWM3lOMGVvVnFFRTBwOUZDU0VDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MTk0ODUwMDA6MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMzU3NzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLZ0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtnQy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
