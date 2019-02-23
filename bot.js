var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../auth.json'); // ./ or ../ for relative path| / for absolute path
//Configure logger settings

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
    //Bot needs to know if it will execute a command
    //Listen for messages starting with !
    if (message.substring(0,1)=='!'){ //if message substring first char (0,1) ==! then
        var args = message.substring(1).split(' '); //split message into args split on spaces after !
        var cmd = args[0]; //cmd is first part of args so ! hi dad. cmd = hi
        var HoM = "Hit or miss, I guess they never miss, huh? \
        You got a boyfriend I bet he doesnt kiss ya, muah! \
        He gon find another girl and he wont miss ya! \
        \nHe gon skrrt and hit the dab like Wiz Khalifa";
        args = args.splice(1); //splice(int index, int howmany, itemA, itemB). index = position to add/remove (negative num for from the end)
                                //howmany = items to remove. 0 = none
                                //item1-->itemX new items to add
                                //args = args.splice(1) keeps only first item/gets rid of rest starting at postion 1
        switch(cmd){ //based on cmd determines which case
            //!ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            case 'hit':
                bot.sendMessage({
                    to: channelID,
                    message: HoM
                });
            break;
            case 'mySR':
                var rand = Math.random()*10;
                if (rand==9){
                    var temp = Math.floor(Math.random()* (1000)+4000);
                }
                if (rand <9 && rand>=7){
                    var temp = Math.floor(Math.random()* (1000)+3000);
                }
                if (rand <7 && rand>=4){
                    var temp = Math.floor(Math.random()* (1000)+2000);
                }
                if (rand <4 && rand>=2){
                    var temp = Math.floor(Math.random()* (1000)+ 1000);
                }
                if (rand<2){
                    var temp = Math.floor(Math.random()* 1000);
                }
                bot.sendMessage({
                    to: channelID,
                    message: "@"+user+"'s SR is " + temp
                });
            break
            //More case Commands here
        }
    }
});
bot.on('message', function(user, userID, channelID, message, evt){
    var args = message.split(' ');
    var cmd = args[0];
    args = args.splice(1);

    switch(cmd){
        //'im'
        case 'im':
        if(args[0]){
            bot.sendMessage({
                to: channelID,
                message: ("Hi " + args.join(' ') + ", I'm Dad")
            });
        }
        break;
        case 'Im':
        if(args[0]){
            bot.sendMessage({
                to: channelID,
                message: ("Hi " + args.join(' ') + ", I'm Dad")
            });
        }
        break;
        case "I'm":
        if(args[0]){
            bot.sendMessage({
                to: channelID,
                message: ("Hi " + args.join(' ') + ", I'm Dad")
            });
        }
        break;
    }
});
//Install dependencies
//npm install discord.io winston --save

//Run script by executing while in script folder
//dir = ls
//cd ..
//cd blah
//node bot.js
