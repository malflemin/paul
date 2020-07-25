function messages(){
}

messages.prototype.getPeePee = async function(message){
     var userPeepee = message.content.replace(":peepee ", "");
    //add dictionary of responses based on last digit of user ID
    var peepeeLength = {
      1: "so small others think it's deformed! :adhesive_bandage:",
      2: "so small you need a microscope to see it! :microscope:",
      3: "so small you need a magnifying glass to see it! :mag:",
      4: "small enough kids laugh at it! :baby:",
      5: "so average it's boring! :no_good:",
      6: "average enough to fit into society! :dancers:",
      7: "above average enough to be an overachiever! :hot_face:",
      8: "big enough that cops mistake it for a gun! :gun:",
      9: "so big it can be used to knock someone out! :cricket_game:",
      0: "so big it's more powerful than a nuclear bomb! :rocket:",
      11: "the biggest dick of all, its cum was used to make the first lifeforms of earth"
    };
    //start function
    if (userPeepee === ":peepee") {
      if (message.author.id === "189889962945150976")
        var lastIdDigit = 11;
      else if (message.author.id != "248283572652212225")
        var lastIdDigit = message.author.id % 10;
      else lastIdDigit = 0;
      message.channel.send("Do you have a big peepee? :eyes:");
      message.channel.send("Study says...");
      if (message.author.id != "248283572652212225") 
        message.channel.send("Your peepee is " + peepeeLength[lastIdDigit]);
      else message.channel.send("Your peepee is heartflip's wet dream :smirk:");
    } else {
      if (message.mentions.members.first().id === "189889962945150976")
        var lastIdDigit = 11;
      else if (message.mentions.members.first().id != "248283572652212225")
        var lastIdDigit = message.mentions.members.first().id % 10;
      else lastIdDigit = 0;
      message.channel.send("Does " + userPeepee + " have a big peepee? :eyes:");
      message.channel.send("Study says...");
      message.channel.send(
        userPeepee + " has a peepee " + peepeeLength[lastIdDigit]
      );
    }
};


messages.prototype.pipe = async function(Discord, message){
var gifs = [
      "https://cdn.discordapp.com/attachments/306258975509446656/572773365866037270/giphy.gif",
      "https://media.discordapp.net/attachments/362852145118052352/572771851596726274/lx7uzr.gif",
      "https://media1.tenor.com/images/37db9c0ee195dfd0eccac0b7cc1b811e/tenor.gif?itemid=5115603#.gif",
      "https://i.kym-cdn.com/photos/images/original/001/256/986/dc7.gif",
      "https://i.kym-cdn.com/photos/images/original/001/256/986/dc7.gif",
      "https://media.discordapp.net/attachments/362852145118052352/572769456770514944/b5c945f2-0594-4b21-bae2-0a93545e644b.gif",
      "https://cdn.discordapp.com/attachments/362852145118052352/572769455516680202/84f69a26-4e23-4328-9d7d-48a7e544d568.gif",
      "https://media.discordapp.net/attachments/362852145118052352/572769456028254209/fdf9784d-a52e-4988-9ed7-b7416f52714b.gif",
      "https://media.discordapp.net/attachments/362852145118052352/572771064988303382/RbsN7or.gif",
      "https://media.discordapp.net/attachments/496714165910634535/573916164686741507/giphy_2.gif",
      "https://media.discordapp.net/attachments/496714165910634535/573915822494580746/giphy_1.gif",
      "https://cdn.discordapp.com/attachments/496714165910634535/573915548979822612/giphy.gif"
    ];
    var sender = message.member.user.username;
    var reciever = message.content.replace(":pipe ", "");
    var img = gifs[Math.floor(Math.random() * gifs.length)];
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription("**" + sender + "**" + " has piped " + reciever)
      .setImage(img);
    message.channel.send(embed);
};


messages.prototype.curse = async function(Discord, message){
var gifs = [
      "https://media.discordapp.net/attachments/362852145118052352/572774978735570944/6ct3Rig.gif",
      "https://media.discordapp.net/attachments/362852145118052352/572771068041756672/7rBhXTK.gif",
      "https://cdn.discordapp.com/attachments/362852145118052352/572770583994040320/tenor.gif",
      "https://cdn.discordapp.com/attachments/306258975509446656/572773366696771585/tenor_1.gif",
      "https://images-ext-2.discordapp.net/external/bNCKfPmWfPYas1k8ulk7AMejFOF4SNZ3aWnD3VX9nRQ/https/i.redd.it/33454vqlrkz11.gif"
    ];
    var sender = message.member.user.username;
    var reciever = message.content.replace(":curse", "");
    var img = gifs[Math.floor(Math.random() * gifs.length)];
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription(
        "**" + sender + "**" + " has cursed you, " + reciever + "!"
      )
      .setImage(img);
    message.channel.send(embed);
};


messages.prototype.translate = async function(Discord, message,axios){
    var text = message.content;
    var translate = text.replace(":t", "");
    axios
      .get("https://translate.yandex.net/api/v1.5/tr.json/translate", {
        params: {
          key: process.env.YANDEX_API_KEY,
          text: translate,
          lang: "en"
        }
      })
      .then(res => {
        if (res.data.text[0] !== message.content) {
          message.reply(res.data.text[0]);
        }
      });
};


messages.prototype.nsfw = async function(Discord, message){
    if (message.channel.nsfw === true) {
      //creates a list of nsfw boobie gifs & randomises selected boobie
      var gifs = [
        "http://porngif.org/wp-content/uploads/2014/01/3976.gif",
        "http://porngif.org/wp-content/uploads/2014/01/6107.gif",
        "http://1.bp.blogspot.com/-i2UzkAyhPL8/UNhm2D5rM6I/AAAAAAAABS8/kFlZm0m6szY/s1600/1356284181816.gif",
        "http://porngif.org/wp-content/uploads/2014/01/6234.gif",
        "http://porngif.org/wp-content/uploads/2014/01/0215.gif"
      ];
      var img = gifs[Math.floor(Math.random() * gifs.length)];
      //sends the randomised selected boobie to an nsfw channel
      console.log(img);
      message.channel.send("did you ask for boobie :eyes:");
      const embed = new Discord.MessageEmbed().setColor(0x00ae86).setImage(img);
      message.channel.send(embed);
    } else {
      message.channel.send(
        "you can only use the nsfw command in nsfw channels!"
      );
    }
};


messages.prototype.kill = async function(Discord, message){
    var sent = message.content.replace(":kill", "");
    var auth = message.author.toString();
    var killers = [
      // KILLED STRINGS ARRAY
      sent + " didn't kill themselves and neither did Epstein hmm.",
      auth + " shoots" + sent + " point blank in the head, killing them instantly.",
      sent + " was banished to BDTs basement never to be heard from again.",
      sent + " is overwhelmed by Brad's disgusting toe jam breath and collapses.",
      sent + " was unfortunately killed in a freak felching accident by Pope.",
      sent + " is sucked inside out by BDT, killing them instantly.",
      auth + ", your shot missed! " + sent + " kills you swiftly..."
    ]; // END OF KILLED STRINGS ARRAY
    var randomNumber = Math.floor(Math.random() * killers.length);
    if (sent == "306816340457422850") {
      message.channel.send("**You can't kill that user!**");
    } else {
      var randomNumber = Math.floor(Math.random() * killers.length);
      const embed = new Discord.MessageEmbed()
        .setColor(0x00ae86)
        .setDescription(killers[randomNumber]);
      message.channel.send(embed);
    }
};


messages.prototype.setStatus = async function(Discord, client, message){
    var user = message.member.user.username;

    if ((user == "Malaise", "Melo")) {
      var msg = message.content;
      var activity = msg.replace(":set ", "");
      client.user.setActivity(activity);
      message.channel.send("Set activity status to, " + activity);
    } else {
      message.channel.send("Nice try faggit.");
    }
};


messages.prototype.getDog = async function(Discord, message, xhr){
  var url = "https://dog.ceo/api/breeds/image/random";
    var jsonData = JSON.parse(xhr.responseText);

    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription("DOG")
      .setImage(jsonData["message"]);
    message.channel.send(embed);

};


messages.prototype.getF = async function(Discord, message){
    var user = message.member.user.username;
    var respectxt = message.content.replace(":f", "");
      message.channel
      .send("**" + user + "** has paid their respects for" + respectxt)
      .then(function(message) {
        message.react("🇫");
      });
};


module.exports = messages;