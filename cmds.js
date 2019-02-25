//module example
module.exports.roll = (bot, channelID, user) => {
    let roll = Math.floor(Math.random()*6)+1;
    bot.sendMessage({
        to:channelID,
        message: '@'+user+' rolled a '+roll
    });
    //return '@'+user+' rolled a '+roll;
    //roll: function(user, userID, channelID, message, evt){
    //    let roll = Math.floor(Math.random()* 6)+1;
    //    return message.channelID('${message.author.username} rolled a ${roll}');
        //bot.sendMessage({
        //    to: channelID,
        //    message: "@"+userID+" rolled a "+roll
        //});
}
