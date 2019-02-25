//module example
module.exports= (bot, logger, cmd, args, user, userID, channelID, message, evt) => {
    switch(cmd){
        case 'roll':
        logger.info('roll');
            let roll = Math.floor(Math.random()*6)+1;
            bot.sendMessage({
                to:channelID,
                message: '@'+user+' rolled a '+roll
            });
        break;
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

        //!ping
        case 'ping':
            logger.info("PING");
            bot.sendMessage({
                to: channelID,
                message: 'pong!'
            });
        break;
    }
}
