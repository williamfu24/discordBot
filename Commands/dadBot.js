module.exports = (bot, logger, user, userID, channelID, message, evt) =>{
    var args = message.split(' ');
    var cmd = args[0];
    args = args.splice(1);
    if (cmd=='im'||cmd=="Im"||cmd=="IM"||cmd=="i'm"||cmd=="I'm"||cmd=="I'M"){
        logger.info("Dad bot");
    }
    switch(cmd){
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
        case 'IM':
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
        case "i'm":
            if(args[0]){
                bot.sendMessage({
                    to: channelID,
                    message: ("Hi " + args.join(' ') + ", I'm Dad")
                });
            }
        break;
        case "I'M":
            if(args[0]){
                bot.sendMessage({
                    to: channelID,
                    message: ("Hi " + args.join(' ') + ", I'm Dad")
                });
            }
        break;
    }
}
