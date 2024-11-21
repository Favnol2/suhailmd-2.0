const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348145175687";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_29_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDkzLFxuICAgICAgICA5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpwSmgyWnJXalgrMll1aFM2RndqbUJEbDZZVE16MDlVbXJGRHJmY0JKQ1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0NTE3NTY4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjJERjUwQTVGNDY5NzAzOTMyMkE5M0ZBNjgyNDA3OThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMTYzMzI4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhYa1RXUzhZUTRLalVUM0pMeFo0MUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjgxODJlMDItMDM2Ny00MjgxLWJkOWEtNjhkZWY1MmQ3YzViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgOTIsXG4gICAgICAzNyxcbiAgICAgIDQ2LFxuICAgICAgNzEsXG4gICAgICAxNTYsXG4gICAgICAxMzgsXG4gICAgICAyNCxcbiAgICAgIDE5NixcbiAgICAgIDc1LFxuICAgICAgOTQsXG4gICAgICAyMTUsXG4gICAgICA4MixcbiAgICAgIDE4OCxcbiAgICAgIDIzMyxcbiAgICAgIDY0LFxuICAgICAgMjAsXG4gICAgICAyMzYsXG4gICAgICAxMSxcbiAgICAgIDIyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA2NyxcbiAgICAgIDQ1LFxuICAgICAgMjUxLFxuICAgICAgNTksXG4gICAgICA2MSxcbiAgICAgIDc3LFxuICAgICAgMjIxLFxuICAgICAgMTAzLFxuICAgICAgMTE4LFxuICAgICAgMTM0LFxuICAgICAgMTE5LFxuICAgICAgMTUsXG4gICAgICA1MyxcbiAgICAgIDI4LFxuICAgICAgMTIxLFxuICAgICAgMTIwLFxuICAgICAgNyxcbiAgICAgIDIzMixcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTTTY4UEY2NFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NTE3NTY4NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDA5NDQyMTcyMjMyNjU6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLV2c5TUlGRVBydCtya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInIxSTZwUHZ4WUttcGsvWWZDWVJ2ZmorcVdKWmRGYTBQYjA3MGV4aFJtWGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGk3eDJRb1FKMzc2SXM2Z0ZUZDgrYUdhdXJYbUFYWWtnY2pqNm5lcGE1SmhtQzZBYzAvSWpzNWF5c2E4V0xmMllpQ0NsSWFRWE5lZ2Nkc1FQRDk1RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSUxocEtYTGdoM3B6NU1TVHJ5K2ZIZzNtdzJ4MEZCOU5EMDJDK3FaMTdWK2ltQ2Jkb3l5ZHF5MXdmc1JiUUdxZkZod0txczJkVnpaZGRhNk85NmFnanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NTE3NTY4NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjE2MzMyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQzZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDNkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOWZaaUhNVXJDMGw2N21kWEo0UkdaTk5BVnJZZ2VvUUovWVlVMmF5NjBTRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDgyNDkzOTg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
