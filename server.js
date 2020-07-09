/*Danny Devito Bot
Created: 04/28/2019
Proberdy of Burgatory
Unauthorized use will result in forcible circumcision*/
//const config = require("./config.json");
var express = require("express");
const Canvas = require("canvas");
const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const { Client, Attachment } = require("discord.js");
const prefix = ":"; 

// serch
const ud = require('urban-dictionary');
// serch

var app = express();
var XMLHttpRequest = require("xmlhttp");
var deleted;
var lyr = require("lyrics-fetcher");
const GIFEncoder = require('gifencoder');
const client = new Discord.Client();
const axios = require("axios");
const fs = require("fs");
const timer = require("moment-timezone");
const meTime = require("iana-tz-data");
const countdown = require("countdown");
const filter = require("canvas-filters");
var rpgDiceRoller = require("rpg-dice-roller/lib/umd/bundle.min.js");
//mysql connection http://remotemysql.com/
var mysql = require("mysql");
//end mysql connection
var spammer = false;
var collecting = 1;
app.get("/", function(request, response) {
  response.sendStatus(200);
});
var offuser;
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
//delete after christmas

var con = mysql.createConnection({
      host: process.env.db_host,
      user: process.env.db_user,
      password: process.env.db_passwd,
      database: process.env.db_name
    });


client.on("messageDelete", (messageDelete) => {
  
 deleted = messageDelete.content;
 if (messageDelete.author.id == "307339858483871744") { //bootleg's userID
   messageDelete.channel.send("Bootleg `" + messageDelete.author.tag + "` said: \n" + ">>> " + deleted);
 }
});


client.on("message", message => {
  
/* if( message.author.id == "413367448255987713") {
 message.react('🇩');
message.react('🇷');
message.react('🇫');
message.react('🇴');
message.react('0️⃣');
message.react('🇹');
 
    } */
  //bootleg is a pedophile
 if (message.author.id == "307339858483871744") {
   
   //message.delete();
   if (message.content.includes("pipe")) {
     message.channel.send("Bootleg has never pleasured a woman before and it shows.")
   }
   if (message.content.includes("advice")) {
     message.channel.send("Taking Bootleg's advice will land you in the sexual offenders register.")
   }
 } 
  
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.guild != null)
   var adminRole = message.guild.roles.cache.find(role => role.name == "Fist Mate 2.0");

  var Game = require("./Game.js");
  //fileloader was here
  var game = new Game();
  var loader = new File();
  
  
  
  //*************************************MISC COMMANDS************************************

  if (command == "egg") {
    var msg = message.content;
    var txt = msg.replace(":egg ", "");
    const attachment = new Discord.MessageAttachment(
      "http://dannydebito.000webhostapp.com/img.php?text=" + txt + "#.jpg"
    );
    message.channel.send(attachment);
  }

  if (command == "anim"){
    const encoder = new GIFEncoder(200, 200);
    const canvas = Canvas.createCanvas(200, 200);
    const ctx = canvas.getContext("2d");
    // stream the results as they are available into myanimated.gif
    encoder.createReadStream().pipe(fs.createWriteStream('myanimated.gif'));
    encoder.start();
    encoder.setRepeat(0);   // 0 for repeat, -1 for no-repeat
    encoder.setDelay(150);  // frame delay in ms
    encoder.setQuality(10); // image quality. 10 is default.
    // use node-canvas
    game.drawAnim(Canvas,canvas,ctx,encoder, message, Discord);

  }
  if (command == "vote") {
    var msg = message.content;
    var txt = msg.replace(":vote ", "");
    message.react("🇾");
    message.react("🇳");
  }


  //*************************************MISC COMMANDS*************************************

  //*************************************ETC COMMANDS*************************************
  if (command == "set") {
    var user = message.member.user.username;

    if ((user == "Malaise", "Melo")) {
      var msg = message.content;
      var activity = msg.replace(":set ", "");
      client.user.setActivity(activity);
      message.channel.send("Set activity status to, " + activity);
    } else {
      message.channel.send("Nice try faggit.");
    }
  }
  
  if(command == "score") {
    const canvas = Canvas.createCanvas(200, 200);
    const ctx = canvas.getContext("2d");
    var pointsK, pointsQ, challenges, winsK, winsQ, players = null;
    fs.readFile('./survivor.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }
        //console.log(jsonString);
        const survivor = JSON.parse(jsonString)
        pointsK = survivor.pointsK;
        pointsQ = survivor.pointsQ;
        winsK = survivor.winsK;
        winsQ = survivor.winsQ;
        game.drawSurvivor(Canvas, canvas, ctx, Discord, message, pointsK, pointsQ, winsQ, winsK);
      
        if(message.author.id == "415004212624228384"){
          const collector = new Discord.MessageCollector(
            message.channel,
            m => m.author.id === message.author.id,
            { time: 40000 }
          );
          collector.on("collect", message => {
            var data = message.content.split("");
            if (data.length > 3){
              data[2] += data[3];
              data.pop();
            }
            if (data[0].toUpperCase() == "K") {
              if(data[1] == '+'){
                pointsK += parseInt(data[2]);
                survivor.pointsK = pointsK;
              }
              else if(data[1] == '-'){
                pointsK -= parseInt(data[2]);
                survivor.pointsK = pointsK;
              }
              game.drawSurvivor(Canvas, canvas, ctx, Discord, message, pointsK, pointsQ, winsQ, winsK);
            }
            if (data[0].toUpperCase() == "Q") {
              if(data[1] == '+'){
                pointsQ += parseInt(data[2]);
                survivor.pointsQ = pointsQ;
              }
              else if(data[1] == '-'){
                pointsQ -= parseInt(data[2]);
                survivor.pointsQ = pointsQ;
              }
               game.drawSurvivor(Canvas, canvas, ctx, Discord, message, pointsK, pointsQ, winsQ, winsK);
            }
           
            console.log(survivor);
              fs.writeFile('./survivor.json', JSON.stringify(survivor), function writeJSON(err) {
                if (err) return console.log("Error writing to file from disk:", err);
                console.log(JSON.stringify(survivor));
              });
          });
        }
      else{
        message.channel.send("**Only our lord and saviour Will can edit!**");
      }
      
    })
}

  if (command == "f") {
    var user = message.member.user.username;
    var respectxt = message.content.replace(":f", "");
      message.channel
      .send("**" + user + "** has paid their respects for" + respectxt)
      .then(function(message) {
        message.react("🇫");
      });

  }
  if (command == "t") {
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
  }
  if (command == "avatar") {
    if (!message.mentions.users.size) {
      let embed = new Discord.MessageEmbed()
        .setImage(`${message.author.displayAvatarURL}`)
        .setColor("#275BF0");
      message.channel.send(embed);
     
    }
    
  if(command == "manip"){
    var attached = message.content.replace(":manip", "");
    const cnv = Canvas.createCanvas(500, 300);
    const cvx = cnv.getContext("2d");
    
    game.drawFilter(Canvas, cnv, cvx, Discord, message, attached, filter)
  }

    const avatarList = message.mentions.users.map(user => {
      let embed = new Discord.MessageEmbed()
        .setImage(user.displayAvatarURL)
        .setColor("#275BF0");
      console.log("user", user.username, user.displayAvatarURL);
      //message.channel.send(user.displayAvatarURL);
      message.channel.send(embed);
    });

    message.channel.send(avatarList);
  }
  if (command == "dog") {
    var xhr = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random";
    var jsonData = JSON.parse(xhr.responseText);

    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription("DOG")
      .setImage(jsonData["message"]);
    message.channel.send(embed);
  }
  //**********************************WEEB COMMANDS****************************************

  if (command == "kill") {
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
  }
  
  if (command == "hate"){
    var sent = message.content.replace(":hate", "");
    const canvas = Canvas.createCanvas(300, 300);
    const ctx = canvas.getContext("2d");
    
    game.drawHate(Canvas,canvas,ctx,Discord,message,sent);
  }
  if (command == "kiss") {
    var gifs = [
      "https://lifeo.ru/wp-content/uploads/gif-anime-kisses-28.gif",
      "https://cdn79.picsart.com/199892504002202.gif",
      "https://lifeo.ru/wp-content/uploads/gif-anime-kisses-23.gif"
    ];
    var sender = message.member.user.username;
    var reciever = message.content.replace(":kiss ", "");
    var img = gifs[Math.floor(Math.random() * gifs.length)];

    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription("**" + sender + "**" + " has kissed " + reciever)
      .setImage(img);

    message.channel.send(embed);
  }
  if (command == "pipe") {
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
  }

  if (command == "beg"){
    var gifs = [
      "https://cdn.discordapp.com/attachments/591399700133970073/700484293553684490/tenor.gif",
      "https://cdn.discordapp.com/attachments/248284852162396161/700486159918301194/source.gif",
      "https://cdn.discordapp.com/attachments/248284852162396161/700486404731437146/giphy.gif",
      "https://cdn.discordapp.com/attachments/248284852162396161/700486723188293672/77fa203a1296158e809ce1141e3bbc37.gif"
    ];
    var sender = message.member.user.username;
    var reciever = message.content.replace(":beg", "");
    var img = gifs[Math.floor(Math.random() * gifs.length)];
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription(
        "Paul " + " loves you, " + reciever + ":heart::heart::heart::heart::heart:"
      )
      .setImage(img);
    message.channel.send(embed);
    //https://tenor.com/view/corgi-puppy-petting-cute-daw-gif-3476904
  }
  if(command == "emotetest"){
    const emoji = message.guild.emojis.cache.find(emoji => emoji.name === 'oilup');
   message.channel.send(emoji);
  }
  if (command == "curse") {
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
  }

  if (command == "snipe") {
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription(deleted);
    message.channel.send(embed);
  }
  /* if (command == "nick") {
    var nickname = message.content.replace(":nick", "");
    
    if (message.mentions.members.first()) {
      const member1 = message.mentions.members.first();
      var nick2 = nickname.replace(member1, "");
      member1.setNickname(nick2);
    } else {
      const member1 = message.member;
      member1.setNickname(nickname);
    } 
  } */
  if (command == "mock") {
    var lower = message.content.toLowerCase();
    var mock = lower.replace(":mock", "");
    var i;
    var res = "";
    for (i = 0; i < mock.length; i++) {
      res += i % 2 == 0 ? mock.charAt(i).toUpperCase() : mock.charAt(i);
    }

    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription(res)
      .setImage(
        "https://cdn.discordapp.com/attachments/306258975509446656/576590954983849984/mock.jpg"
      );

    message.channel.send(embed);
  }
  if (command == "pokemon") {
   var mon = Math.floor(Math.random() * 800) + 1;
    
    const embed = new Discord.MessageEmbed()
    .setImage("https://www.serebii.net/sunmoon/pokemon/" + mon + ".png")
    
    message.channel.send(embed);
  }
  
  //serve commands
  if (command === "servebrad") {
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription("Dinner is served for Brad!")
      .setImage(
        "https://cdn.discordapp.com/attachments/306258975509446656/654537450647060510/1576123905464.jpg"
      );
    message.channel.send(embed);
  }
  if (command === "servefeet") {
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setDescription("This is your menu for feet meals, sir.")
      .setImage(
        "https://cdn.glitch.com/760bdc78-175b-4d1a-bc49-b3eea14aae95%2Fimage0.jpg?v=1578845517019"
      );
    message.channel.send(embed);
  }
  //end serve commands
  
  if (command == "pup") {
    var lower = message.content.toLowerCase();
    var pup = String(randomPuppy());
    randomPuppy().then(url => {
      message.channel.send(url);
    });
  }
  if (command == "lyrics") {
    var lower = message.content.toLowerCase();
    var search = lower.replace(":lyrics", " ");
    var apostrophe = search.replace("’", "");
  
    if (apostrophe.includes("-")) {
      var splitter = apostrophe.split("-");
      var lyrics = lyr.fetch(splitter[0], splitter[1], function(err, lyrics) {
        if (lyrics.length >= 2000) {
          message.channel.send(lyrics.substring(0, 1999));
          message.channel.send(lyrics.substring(2000, lyrics.length));
        } else message.channel.send(err || lyrics);
      });
    } else {
      async function getLyrics(song) {
        //const asdf = await Genius.findTrack(apostrophe);
        //const url = await Genius.getUrl(asdf);
        return url;
      }
      message.channel.send("Please include both the artist name and song title in the following format: :lyrics artist - song")
    }
  }

  
  if (command == "jiggy") {
    var mest = message.content.replace(":jiggy", "");
    /*var setto = mest.split("|");

    for (i = 0; i < setto[1]; i--) {
      spammer = true;
      if ((spammer = true)) {
        message.channel.send(setto[0]);
      }
    }*/
    message.channel.send('https://www.istockphoto.com/photo/smug-grin-gm114284243-9582881');
  }
if (command == "urban") {
  
  var definition = message.content.replace(":urban", "");
  
  ud.term(definition).then((result) => {
  const entries = result.entries
  message.channel.send(entries[0].word)
  message.channel.send(entries[0].definition)
  message.channel.send(entries[0].example)
}).catch((error) => {
  message.channel.send(error.message)
})
  
  
  
}

  /////////////////////////////////////////////////////////////////////////////////////////\
  /////////////////PET///////////////COMMAND////////////////////////////////////////////////\\
  ////////////////////////////////////////////////////////////////////////////////////////////\
  if (command == "pet") {
    var query;
    var id;
    var avatarURL;
    collecting = 0;
    let guild = client.guilds.get("306258975509446656");
    id = message.author.id;
    query = "SELECT * FROM pets WHERE oid=" + id;
    con.connect(function(err) {
      if (err) throw err;
      con.query(query, function(err, result, fields) {
        if (err) throw err;
        //check if profile exists
        if (!result.length) {
          var petName = "Coon";
          var insert ="INSERT INTO pets (oid, name) VALUES ('" +id +"', '" + petName + "')";
          
          con.query(insert, function(err, result, fields) {
            if (err) throw err;
            else
              message.channel.send(
                "Your pet did not exist so one has been created for you!"
              );
          });
        } else {
          //pet exists, loading page
          var name = JSON.stringify(result[0].name).replace(/[\<>@#&!"]/g, "");
          var face = JSON.stringify(result[0].face).replace(/[\<>@#&!"]/g, "");
          var hat = JSON.stringify(result[0].hat).replace(/[\<>@#&!"]/g, "");
          var exp = JSON.stringify(result[0].exp).replace(/[\<>@#&!"]/g, "");
          var love = JSON.stringify(result[0].love).replace(/[\<>@#&!"]/g, "");
          var hunger = JSON.stringify(result[0].hunger).replace(/[\<>@#&!"]/g,"");
          var type = JSON.stringify(result[0].type).replace(/[\<>@#&!"]/g, "");
          const canvas = Canvas.createCanvas(300, 300);
          const ctx = canvas.getContext("2d");
          console.log(face);
          game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
          
          
        if(type != 'Ghast'){
          const collector = new Discord.MessageCollector(
            message.channel,
            m => m.author.id === message.author.id,
            { time: 40000 }
          );
          collector.on("collect", message => {
            //*************LUB******************************
            if (message.content == ":lub") {
              love = parseInt(love);
              if (love < 100) {
                love += 5;
              }
              /*UPDATE pets SET love = 55 WHERE oid = 'ID'*/
              var update = "UPDATE pets SET love = " + love + " WHERE oid = '" + id + "'";

              con.query(update, function(err, result, fields) {
                if (err) throw err;
                else message.channel.send("Love has increased by 5");
              });
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
              collector.stop();
            }
            //***********NAME CHANGE*******************
            if (message.content.split(" ")[0] == ":rename") {
              name = message.content.replace(":rename ", "");
              console.log(name);
              /*UPDATE pets SET name = 'name' WHERE oid = 'ID'*/
              var update = "UPDATE pets SET name = '" + name + "' WHERE oid = '" + id + "'";

              con.query(update, function(err, result, fields) {
                if (err) throw err;
                else message.channel.send("You have renamed your pet into " + name);
              });
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
              collector.stop();
              collector.on("end", collected => {
              message.channel.send("Exiting pet menu...");
              });
            }
            //************FEED*************************
            if(message.content.split(" ")[0] == ":borg"){
              hunger = parseInt(hunger);
              if (hunger < 100) {
                hunger += 25;
              }
              if(hunger > 100){
                hunger = 100;
              }
              var update = "UPDATE pets SET hunger = " + hunger + " WHERE oid = '" + id + "'";

              con.query(update, function(err, result, fields) {
                if (err) throw err;
                else message.channel.send(name + " ate some borger uwu. . .");
              });
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
              collector.stop();
              collector.on("end", collected => {
              message.channel.send("Exiting pet menu...");
              });
            }
            //**************FACES**********************
            if (message.content.split(" ")[0] == ":face") {
              face = message.content.replace(":face ", "");
              console.log(face);
              if(face < 5 && face > -1){
              /*UPDATE pets SET name = 'name' WHERE oid = 'ID'*/
              var update = "UPDATE pets SET face = " + face + " WHERE oid = '" + id + "'";

              con.query(update, function(err, result, fields) {
                if (err) throw err;
                else message.channel.send("You changed " + name + "'s face.");
              });
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
              collector.stop();
              collector.on("end", collected => {
              message.channel.send("Exiting pet menu...");
              });
              }
            }
            //****************HAT**********************
            if (message.content.split(" ")[0] == ":hat") {
              hat = message.content.replace(":hat ", "");
              console.log(hat);
              if(hat < 7 && hat > -1){
              /*UPDATE pets SET name = 'name' WHERE oid = 'ID'*/
              var update = "UPDATE pets SET hat = " + hat + " WHERE oid = '" + id + "'";

              con.query(update, function(err, result, fields) {
                if (err) throw err;
                else message.channel.send("You changed " + name + "'s hat.");
              });
              game.drawPet(Canvas,canvas,ctx,Discord,message,name,exp,love,hunger,type,face,hat);
              collector.stop();
              collector.on("end", collected => {
              message.channel.send("Exiting pet menu...");
              });
              }
            }
            //**************ADVENTURE******************
            if(message.content.split(" ")[0] == ":advnt") {
              const cnv = Canvas.createCanvas(500, 300);
              const cvx = cnv.getContext("2d");
              var attack = null;
              var enemy = 100;
              //Load experience as int
              exp = parseInt(exp);
              //Load hunger as int
              hunger = parseInt(hunger);
              //Draw initial field
              game.drawAdv(Canvas, cnv, cvx, message, Discord, type,face,hat,attack)
              
              
              const adCollector = new Discord.MessageCollector(
              message.channel,
              m => m.author.id === message.author.id,
              { time: 100000 }
              );
              adCollector.on("collect", message => {
                var num = Math.round(Math.random() * 100);
                if(message.content == 'A'){//Attack
                  if(num < 40 && num > 5){
                    const fgCollector = new Discord.MessageCollector(
                    message.channel,
                    m => m.author.id === message.author.id,
                    { time: 30000 }
                    );
                    
                    message.channel.send("You attack the city!!! >:€");
                    fgCollector.on("collect", message => {
                      if(message.content == "blast"){
                        message.channel.send(name + " shoots a blast causing 20 damage!");
                        attack = 'blast';
                        game.drawAdv(Canvas, cnv, cvx, message, Discord, type, face, hat, num, attack)
                        exp += 50;
                        var amount = 0;
                        var update = "UPDATE pets SET exp = " + exp + " WHERE oid = '" + id + "'";
                        con.query(update, function(err, result, fields) {
                        if (err) throw err;
                        else message.channel.send(name + " gained 50 experience!\nand lost " + amount + " love!");
                        });
                        hunger -= 10
                        update = "UPDATE pets SET hunger = " + hunger + " WHERE oid = '" + id + "'";
                        con.query(update, function(err, result, fields) {
                        if (err) throw err;
                        else {}
                        });
                      }
                    });
                  }
                  else if(num < 80 && num > 40){
                    
                  }
                  else{
                    message.channel.send("you attack nothing umu!");
                  }
                }
                  
                if(message.content == 'N')//Next
                  { num = Math.round(Math.random() * 100);
                   game.drawAdv(Canvas, cnv, cvx, message, Discord, type,face,hat,num,attack)}
                if(message.content == 'E')//Return
                  adCollector.stop();
              });
              collector.stop();
            }
            //****************INFO*********************
            if (message.content.split(" ")[0] == ":info") {
              message.channel.send("```**PET INFO**\nCommands: {:lub, :name}\n*:lub* - Keeps up the pets love bar\n*:name* - Renames pet\nAbout: ```");
            }
          });
          collector.on("end", collected => {
              collecting = 1;
              });
        }
        else{
          
        }
      }
    });
        
  });
    
  }
  //////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////PET///////////////COMMAND//////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////
if (command == ":13") {
    let guild = client.guilds.get("306258975509446656");
    var role = message.guild.roles.find(role => role.name === "Fist Mate 2.0");
    var remover = message.mentions.members.first();
   remover.removeRole(role);
  }
  /////////////////////////////////////////////////////////////////////////////////\
  ////////////PROFILE SECTION//////////////////////PROFILE SECTION//////////////////\
  ///////////////////////////////////////////////////////////////////////////////////\
  if (command == "profile") {
    var query;
    var id;
    var avatarURL;

    let guild = client.guilds.get("306258975509446656");
    let member = guild.member(message.mentions.users.first());
    let aidee = member ? member.id : null;

    if (aidee == null) {
      id = message.author.id;
      query = "SELECT * FROM members WHERE id=" + id;
      avatarURL = message.author.displayAvatarURL;
      var setusername = message.author.username;
    } else {
      id = aidee;
      query = "SELECT * FROM members WHERE id=" + id;
      avatarURL = member.user.displayAvatarURL;
      var setusername = member.user.username;
    }
    console.log(id);
    con.connect(function(err) {
      if (err) throw err;
      con.query(query, function(err, result, fields) {
        if (err) throw err;
        //check if profile exists
        if (!result.length) {
          if (aidee == null) {
            var insert ="INSERT INTO members (id, username) VALUES ('" +id +"', '" +setusername +"')";
            message.channel.send("Your profile did not exist so one has been created for you!");
            con.query(insert, function(err, result, fields) {
              if (err) throw err;
            });
          } else {
            message.channel.send("This user's profile does not exist.");
          }
        } else {
          //profile exists, proceed to query info
          var username = JSON.stringify(result[0].username).replace(/[\<>@#&!"]/g,"");
          var bio = JSON.stringify(result[0].bio).replace(/[\<>@#&!"]/g, "");
          var money = JSON.stringify(result[0].money);
          var bgcolor = JSON.stringify(result[0].bgcolor).replace(/[\<>@#&!"]/g,"");
          var strokecolor = JSON.stringify(result[0].strokecolor).replace(/[\<>@#&!"]/g,"");

          const canvas = Canvas.createCanvas(350, 175);
          const ctx = canvas.getContext("2d");

          message.channel.send(username.replace(/[\<>@#&!"]/g, ""));

          console.log(bgcolor);
          game.drawProfile(Canvas,canvas,ctx,Discord,message,username,bio,money,bgcolor,strokecolor,avatarURL);

          if (aidee == null) {
            const collector = new Discord.MessageCollector(
              message.channel,
              m => m.author.id === message.author.id,
              { time: 15000 }
            );

            collector.on("collect", message => {
              //****************BIO EDITING SECTION*******************
              if (message.content.split(" ")[0] == ":bio") {
                var lic = message.content.split(":bio ");
                lic[1] = lic[1].replace("'", "");
                query ="UPDATE members SET bio = " +"'" +lic[1] +"'" +" WHERE id = " +id;
                bio = lic[1];
                con.query(query, function(err, result) {
                  if (err) throw err;
                  message.channel.send("adding bio...");
                });

                //PERFORM AFTER QUERY
                game.drawProfile(Canvas,canvas,ctx,Discord,message,username,bio,money,bgcolor,strokecolor,avatarURL);
              }
              //****************STROKE EDITING SECTION*******************
              else if (message.content.split(" ")[0] == ":stroke") {
                var lic = message.content.split(":stroke ");
                query ="UPDATE members SET strokecolor = " +"'" +lic[1] +"'" +" WHERE id = " +id;
                strokecolor = lic[1];
                con.query(query, function(err, result) {
                  if (err) throw err;
                  message.channel.send("adding stroke color...");
                });
                //PERFORM AFTER QUERY
                game.drawProfile(Canvas,canvas,ctx,Discord,message,username,bio,money,bgcolor,strokecolor,avatarURL);
              }
              //****************BACKGROUND EDITING SECTION*******************
              else if (message.content.split(" ")[0] == ":bg") {
                var lic = message.content.split(":bg ");
                query ="UPDATE members SET bgcolor = " +"'" +lic[1] +"'" +" WHERE id = " +id;

                bgcolor = lic[1];
                con.query(query, function(err, result) {
                  if (err) throw err;
                  message.channel.send("adding background color...");
                });
                //PERFORM AFTER QUERY
                game.drawProfile(Canvas,canvas,ctx,Discord,message,username,bio,money,bgcolor,strokecolor,avatarURL);
              } else if (message.content == "exit") {
                collector.stop();
              }
            });

            collector.on("end", collected => {
              message.channel.send("Exiting profile menu...");
            });
          }
        }
      });
    });
  }
  /////////////////////////////////////////////////////////////////////////////////////
  ////////////PROFILE SECTION//////////////////////PROFILE SECTION////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  if (command == "boobie") {
    message.channel.send("did you ask for boobie :eyes:");
    const embed = new Discord.MessageEmbed()
      .setColor(0x00ae86)
      .setImage(
        "http://3.bp.blogspot.com/-ICB2oO-vD28/UM25SxPiOlI/AAAAAAAAA4E/mL-NZLGPjUw/s1600/dsc_0289+-+copia.jpg"
      );
    message.channel.send(embed);
  }

  // NSFW COMMANDS
   if (command == "peepee") {
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
  }
  
  if (command == "nsfw") {
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
  }
  // END OF NSFW

  //BASE FUNCTIONALITY COMMANDS
  if (command == "tzone") {
    var getTime = message.content.replace(":tzone ", "");
    var time = timer();
    //var userTime = meTime();
    //var getCity = getTime.split("/");

    if (getTime == "All" || getTime == "all" || getTime == ":tzone" || getTime == "") {
      message.channel.send(
        "**Denver:** " +
          timer.tz("America/Denver").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**Texas:** " +
          timer.tz("America/Chicago").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**New York:** " +
          timer.tz("America/New_York").format("DD-MM-YYYY h:mma z") + ":fire: \n" +
          "**Ireland:** " +
          timer.tz("Europe/Dublin").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**Jakarta:** " +
          timer.tz("Asia/Jakarta").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**Sydney:** " +
          timer.tz("Australia/Sydney").format("DD-MM-YYYY h:mma z") +
          "\n" +
          "**New Zealand:** " +
          timer.tz("Pacific/Auckland").format("DD-MM-YYYY h:mma z")
      );
    } else if (getTime == "help") {
      message.channel.send(
        "Find more timezones here because we're lazy af: https://github.com/moment/moment-timezone/blob/92417fb266545c564b3522e29f7ebd5188d56179/data/meta/2014a.json"
      );
    } else {
      var count = 0;
      var searchTime = getTime.charAt(0).toUpperCase() + getTime.slice(1).toLowerCase();
      var getCity;
      //if user has a backslash in the command, split it into two to get place and timezone
      if (getTime.includes("/")) {
        getCity = getTime.split("/");
        getCity[0] = getCity[0].charAt(0).toUpperCase() + getCity[0].slice(1).toLowerCase();
        getCity[1] = getCity[1].charAt(0).toUpperCase() + getCity[1].slice(1).toLowerCase();
      }
      //if user has entered a place and timezone
      if (getCity != null) {
        console.log(getCity.join("/"));
        if (getCity[1] in meTime.zoneData[getCity[0]]) {
          message.channel.send("**",getCity.join("/"),"** " + timer.tz(getCity.join("/")).format("DD-MM-YYYY h:mma z"));
        }
      }
      //if user has only entered a place, show them all available timezones
      else if (searchTime in meTime.zoneData) {
        var searchLength = Object.keys(meTime.zoneData[searchTime]).length;
        if (searchLength > 4) {
          var timezoneArray = [];
          for (const key in meTime.zoneData[searchTime]) { 
            timezoneArray.push(key)
          }
          const embed = new Discord.MessageEmbed()
            .setColor(0x00ae86)
            .setDescription(timezoneArray.join(', '));
          message.channel.send("Please choose from one of the following timezones, and then re-enter the command as 'tzone: Place/Timezone'");
          message.channel.send(embed);
        } else {
          message.channel.send("**",searchTime,"** " + timer.tz(searchTime).format("DD-MM-YYYY h:mma z"));
        }
      }
    }
  }
  
  //dangerous and administrator commands 
  /*if(command=="off") {
       if ((user == "Malaise", "Melo")) {
              offuser = message.mentions.members.first().id;
         }
         else {
      message.channel.send("You can't use that commmand you fucking loser.");
    }
    
  }
  if(command=="on") {
    if((user == "Malaise", "Melo")) {
      offuser = "";
    } else {
      message.channel.send("You can't use that commmand you fucking loser.");
    }
  }*/
  if (command == "scrub") {
    
    var amt = message.content.replace(":scrub", "");
    async function clear() {
      message.delete();
      const fetched = await message.channel.fetchMessages({ limit: amt });
      message.channel.bulkDelete(fetched);
    }
    if(!amt) {
      message.channel.send("Enter a number of messages to scrub.")
    }
    else {
    clear();
    }
    }
    
  if(command == "help") {
    message.channel.send("https://cdn.glitch.com/760bdc78-175b-4d1a-bc49-b3eea14aae95%2Fchelp.html?v=1579104072634");
  }
  
  if (command == "countdown") {
    var countdownDate = countdown(new Date(2020, 11, 17, 20, 25)).toString();
    //console.log(countdownDate);
    message.channel.send("Time until arrival: " + countdownDate);
  }
  
  if (command == "dice") {
    var getDice = message.content.replace(":dice ", "");
    var dice;
    var modifier;
    var diceTotal;
    if (getDice.includes('+') || getDice.includes('-')) {
      var hasModifier;
      if (getDice.includes('+')) { 
        hasModifier = getDice.split('+')
        } else if (getDice.includes('-')) { 
        hasModifier = getDice.split('-')
        } 
      dice = hasModifier[0].replace(/\s+/g, "");
      modifier = parseInt(hasModifier[1].replace(/\s+/g, ""));
    } else {
      dice = getDice;
    }
    
    try {
      const roller = new rpgDiceRoller.DiceRoller();
      let roll = roller.roll(dice);
      var diceRoll = (`${roll}`);
      var rollSplit = diceRoll.split(" ");
      if (modifier === undefined) {
        diceTotal = parseInt(rollSplit[rollSplit.length-1]);
        message.channel.send(rollSplit[0] + " " + rollSplit[1] + " = " + diceTotal);
      } else if (getDice.includes('+')) { 
          diceTotal = parseInt(rollSplit[rollSplit.length-1]) + modifier; 
          message.channel.send(rollSplit[0] + " " + rollSplit[1] + " + " + modifier + " = " + diceTotal);
        } else if (getDice.includes('-')) { 
          diceTotal = parseInt(rollSplit[rollSplit.length-1]) - modifier; 
          message.channel.send(rollSplit[0] + " " + rollSplit[1] + " - " + modifier + " = " + diceTotal);
        }
    } catch {
      message.channel.send("You need this format for dice! `:dice d20` or `:dice d20+5`");
    }
  }
  
  if(command == "invert"){
    
  }
  //END OF BASE FUNCTIONALITY
  //*************************************ETC C*************************************
});

client.login(process.env.BOT_TOKEN);
