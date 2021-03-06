var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../auth.json'); // ./ or ../ for relative path| / for absolute path
//Configure logger settings

const textCmds = require('./Commands/textCmds.js');
const cmds = require('./Commands/cmds.js');
const dad = require("./Commands/dadBot.js");
const dnd = require("./Commands/DnD.js");

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorized:true
});
logger.level = 'debug';

//Init Discord Bot
var bot = new Discord.Client({ //creates new discord client aka bot
    token: auth.token, //use auth.json's token
    autorun: true
});
bot.on('ready', function(evt){ //evt = event. When bot is ready triggers event to log information
    logger.info("Connected");
    logger.info('Logged in as: ');
    logger.info(bot.username + ' -(' + bot.id + ')');

});
bot.on('message', function(user, userID, channelID, message, evt){ //while bot is on. message function (takes user, user idm channel id, message, and is evt)
    //Dad bot
    dad(bot, logger, user, userID, channelID, message, evt)

    //Bot needs to know if it will execute a command
    //Listen for messages starting with !
    if (message.substring(0,1)=='!'){ //if message substring first char (0,1) ==! then
        var args = message.substring(1).split(' '); //split message into args split on spaces after !
        var cmd = args[0]; //cmd is first part of args so ! hi dad. cmd = hi
        args = args.splice(1); //splice(int index, int howmany, itemA, itemB). index = position to add/remove (negative num for from the end)
                                //howmany = items to remove. 0 = none
                                //item1-->itemX new items to add
                                //args = args.splice(1) keeps only first item/gets rid of rest starting at postion 1
        cmds(bot, logger, cmd, args, user, userID, channelID, message, evt);
        textCmds(bot,logger,cmd,args,user,userID,channelID,message,evt);
        dnd(bot, logger, cmd, args, user, userID, channelID, message, evt);

    }
});

//Install dependencies
//npm install discord.io winston --save

//Run script by executing while in script folder
//dir = ls
//cd ..
//cd blah
//node bot.js
