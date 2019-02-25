var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../auth.json'); // ./ or ../ for relative path| / for absolute path
//Configure logger settings

const sp = require('./assets/array/sp.json');
const jokes = require('./assets/array/jokes.json');
const altCmds = require('./altCmds.js');

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
        args = args.splice(1); //splice(int index, int howmany, itemA, itemB). index = position to add/remove (negative num for from the end)
                                //howmany = items to remove. 0 = none
                                //item1-->itemX new items to add
                                //args = args.splice(1) keeps only first item/gets rid of rest starting at postion 1
        switch(cmd){ //based on cmd determines which case
            //!ping
            case 'ping':
                logger.info("PING");
                bot.sendMessage({
                    to: channelID,
                    message: 'pong!'
                });
            break;
            case 'shitpost':
                logger.info("shitpost");
                var temp = sp.copyPasta[Math.floor(Math.random()*sp.copyPasta.length)]; //choose random shitpost
                bot.sendMessage({
                    to: channelID,
                    //title: 'Top Tier Shitposts',
                    message: temp
                    //footer: {text: '${message.author.username}#{message.author.discriminator} is so funny haHA'}
                });
            break;
            case 'dadJoke':
                logger.info("dadJoke");
                var temp = jokes.dadJoke[Math.floor(Math.random()*jokes.dadJoke.length)];
                bot.sendMessage({
                    to:channelID,
                    message: temp
                });
            break;
            case 'joke':
                logger.info("joke");
                var temp = jokes.joke[Math.floor(Math.random()*jokes.joke.length)];
                bot.sendMessage({
                    to:channelID,
                    message: temp
                });
            break;
            case 'beanJoke':
                logger.info("beanJoke");
                var temp = jokes.beanJoke[Math.floor(Math.random()*jokes.beanJoke.length)];
                bot.sendMessage({
                    to:channelID,
                    message: temp
                });
            break;
            case 'roll':
                altCmds.roll(user, userID, channelID, message, evt);
            case 'mySR':
                logger.info("mySR");
                var rand = Math.random()*10; //Multiple randoms to make middle SR appear more
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
//Dad bot
bot.on('message', function(user, userID, channelID, message, evt){
    var args = message.split(' ');
    var cmd = args[0];
    args = args.splice(1);

    switch(cmd){
        case 'im':
            logger.info("Dad bot");
            if(args[0]){
                bot.sendMessage({
                    to: channelID,
                    message: ("Hi " + args.join(' ') + ", I'm Dad")
                });
            }
        break;
        case 'Im':
            logger.info("Dad bot");
            if(args[0]){
                bot.sendMessage({
                    to: channelID,
                    message: ("Hi " + args.join(' ') + ", I'm Dad")
                });
            }
        break;
        case "I'm":
            logger.info("Dad bot");
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
