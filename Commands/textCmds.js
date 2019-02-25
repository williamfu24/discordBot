const sp = require('../assets/array/sp.json');
const jokes = require('../assets/array/jokes.json');
module.exports= (bot, logger, cmd, args, user, userID, channelID, message, evt) => {
    switch(cmd){
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
    }
}
