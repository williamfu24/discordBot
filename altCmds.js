module.exports = {
    roll: function(user, userID, channelID, message, evt){
        let roll = Math.floor(Math.random()* 6)+1;
        return message.channelID.send('${message.author.username} rolled a ${roll}');
        //bot.sendMessage({
        //    to: channelID,
        //    message: "@"+userID+" rolled a "+roll
        //});
    }
}
//module.exports = function(){
//    this.botinfo = function(message, bot){
//        let bicon = bot.user.displayAvatarURL;
//        let botembed = new Discord.RichEmbed()
//        .setColor('#DE8D9C')
//        .setThumbnail(bicon)
//        .addField('Bot Name', bot.user.username)
//        .addField('Description', 'Inject the memes into my life')
//        .addField('Created on', bot.user.createdAt.toDateString());
//        return message.channel.send(botembed);
//    }
//    this.roll = function(message){
//        let roll = Math.floor(Math.random()* 6)+1;
//        return message.channel.send('${message.author.username} rolled a ${roll}');
//    }
//}
