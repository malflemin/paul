
function game(){
  
}

game.prototype.drawPos = async function(message, pos){

};

game.prototype.drawHate= async function(Canvas, canvas, ctx, Discord, message, word){
// Since the image takes time to load, you should await it
const background = await Canvas.loadImage(__dirname + '/assets/homies.jpg');
// This uses the canvas dimensions to stretch the image onto the entire canvas

ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

ctx.font = "47px Sans-Serif";
ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
// Fill with gradient
ctx.fillStyle = '#FAEBD7';
ctx.fillText(word, 130, 40);
ctx.strokeText(word, 130, 40);
ctx.fillText(word, 70, 280);
ctx.strokeText(word, 70, 280);
// Use helpful Attachment class structure to process the file for you

const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'homies.jpg');
 
message.channel.send(attachment);
};



game.prototype.drawFilter = async function(Canvas, canvas, ctx, Discord, message, attached, filter){
// Since the image takes time to load, you should await it
const background = await Canvas.loadImage(__dirname + '/assets/why.jpg');
// This uses the canvas dimensions to stretch the image onto the entire canvas
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
ctx.font = "30px Georgia";

//const avatar = await Canvas.loadImage(attached);
//ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
  
var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
  
var filtered = filter.Brightness(imgData,0);

  
const attachment = new Discord.Attachment(canvas.toBuffer(), filter);
message.channel.send(attachment);
};





game.prototype.drawProfile = async function(Canvas, canvas, ctx, Discord, message, username, bio, money, bgcolor, strokecolor, avatarURL){
  
const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
// Since the image takes time to load, you should await it
// This uses the canvas dimensions to stretch the image onto the entire canvas

//OUTLINE
ctx.beginPath()
ctx.strokeStyle = strokecolor
ctx.fillStyle = bgcolor
ctx.lineWidth = 10
ctx.rect(0, 0, canvas.width, canvas.height)
ctx.fill()
ctx.stroke()
//OUTLINE
  
//CONTAINER NAME
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, bgcolor);
my_gradient.addColorStop(1, "white");
ctx.beginPath()
ctx.strokeStyle = strokecolor
ctx.lineWidth = 2
ctx.rect(200, 50, 100, 30)
ctx.stroke()
ctx.fill(my_gradient)

ctx.save();
ctx.strokeStyle = strokecolor
ctx.fillStyle = strokecolor

// text specific styles
ctx.font = '12px Monospace'
ctx.textAlign = 'left'
ctx.textBaseline = 'alphabetic'
  
  

// draw stroked text to screen
ctx.fillText(bio, 15, 120)

// calculate the width of this text using current font/styles
const textWidth = ctx.measureText(bio).width

// X = previous X position + width + 25px margin
ctx.font = '24px Monospace'
ctx.fillText(username, 200, 75)

ctx.font = '18px Monospace';
ctx.fillText("$" + money, 100, 40);
ctx.restore();
     
const avatar = await Canvas.loadImage(avatarURL);
ctx.drawImage(avatar, 20, 20, 75, 75);
//USER PROFILE PIC
  
const attachment = new Discord.Attachment(canvas.toBuffer(), 'backdrop.jpg');
message.channel.send(attachment);
};


game.prototype.drawAnim = async function(Canvas, canvas, ctx, encoder, message, Discord){
  const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Since the image takes time to load, you should await it
  // This uses the canvas dimensions to stretch the image onto the entire canvas
  //OUTLINE
  ctx.beginPath()
  ctx.fillStyle = 'green'
  ctx.rect(0, 0, canvas.width, canvas.height)
  ctx.fill()

  //load tree model
  const heart = await Canvas.loadImage(__dirname + '/assets/tree.png');
  
  let PI = 3.1415926535;
  var i, angle, x1, y1;
  for(var i = 0; i < 360; i++){
    if(i % 43 == 0){
      //ctx.fillStyle = 'orange';
      angle = i;
      var x1 = 50 * Math.cos(angle * PI / 180);
      var y1 = 50 * Math.sin(angle * PI / 180);
      
      
      //else
      //ctx.fillStyle = 'red'
      if(i < 180){
      ctx.drawImage(heart, 100 + x1, 100 + y1, 10, 15);
      }
      else
        ctx.drawImage(heart, 100 + x1, 100 + y1, 5, 5);
    
  encoder.addFrame(ctx);}}
  /*for(var j = 0; j < 10; j++){
      ctx.fillStyle = 'orange';
      ctx.fillRect(0, canvas.height, canvas.width-150, (((-canvas.height)/10)*j));//increase width over time
      if(j == 1){
        
      }
  encoder.addFrame(ctx);}*/
   
   
  encoder.finish();
  
  message.channel.send({files: ['./myanimated.gif']});
};
/*game.drawPet(Canvas, canvas, ctx, Discord, message, 
                           name, age, love, hunger, type);*/



game.prototype.drawAdv = async function(Canvas, canvas, ctx, message, Discord, type, faceIndex, hatIndex,chance,attack){
const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
// Since the image takes time to load, you should await it
// This uses the canvas dimensions to stretch the image onto the entire canvas
//OUTLINE
ctx.beginPath()
ctx.fillStyle = '#99F1F1'
ctx.rect(0, 0, canvas.width, canvas.height)
ctx.fill()
//OUTLINE
const ground = await Canvas.loadImage(__dirname + '/assets/ground.png');
//load tree model
const tree = await Canvas.loadImage(__dirname + '/assets/tree.png');
//load city asset
const city = await Canvas.loadImage(__dirname + '/assets/city.png');
//attacks loading
const blast = await Canvas.loadImage(__dirname + '/assets/wispblast.png')
  
//place city
if(chance < 40 && chance > 5)
  ctx.drawImage(city, 200, 0, 350, 200);
else{
var num = Math.round(Math.random() * 20);
  console.log("tree: " + num);
for(var x = 0; x < num; x++)
  ctx.drawImage(tree, 15+(num*(Math.random() * (50-10+1))), 150, 15, 70);
}
  


if(type == 'Wisp'){
const pet = await Canvas.loadImage(__dirname + '/assets/pet0.png');
const face = await Canvas.loadImage(__dirname + '/assets/face'+ faceIndex + '.png');
const hat = await Canvas.loadImage(__dirname + '/assets/hat'+ hatIndex + '.png');
ctx.drawImage(pet, 25, 75, 123, 126);
ctx.drawImage(face, 55, 140, 60, 40);
ctx.drawImage(hat, 35, 45, 100, 80);
}
  
if(type == 'Fire'){
const pet = await Canvas.loadImage(__dirname + '/assets/fire.png');
const face = await Canvas.loadImage(__dirname + '/assets/face'+ faceIndex + '.png');
const hat = await Canvas.loadImage(__dirname + '/assets/hat'+ hatIndex + '.png');
ctx.drawImage(pet, 25, 75, 123, 126);
ctx.drawImage(face, 55, 140, 60, 40);
ctx.drawImage(hat, 35, 55, 100, 80);
}
  
if(type == 'Water'){
const pet = await Canvas.loadImage(__dirname + '/assets/water.png');
const face = await Canvas.loadImage(__dirname + '/assets/face'+ faceIndex + '.png');
const hat = await Canvas.loadImage(__dirname + '/assets/hat'+ hatIndex + '.png');
ctx.drawImage(pet, 10, 75, 145, 126);
ctx.drawImage(face, 45, 140, 60, 40);
ctx.drawImage(hat, 25, 48, 100, 80);
}

ctx.drawImage(ground, 0, 200, 150, 150);
ctx.drawImage(ground, 150, 200, 150, 150);
ctx.drawImage(ground, 300, 200, 150, 150);
ctx.drawImage(ground, 450, 200, 150, 150);
  
if(attack == null){
  
}
else if(attack == 'blast'){
  ctx.rotate(180 * Math.PI / 180);
  ctx.drawImage(blast, 200, 0, -100, 100);
}
const attachment = new Discord.Attachment(canvas.toBuffer(), 'backdrop.jpg');
message.channel.send(attachment);
};




game.prototype.drawPet = async function(Canvas, canvas, ctx, Discord, message, name, age, love, hunger, type, faceIndex, hatIndex){
  
const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
// Since the image takes time to load, you should await it
// This uses the canvas dimensions to stretch the image onto the entire canvas
  
//OUTLINE
ctx.beginPath()
if(type == "Ghast")
ctx.fillStyle = 'darkslateblue'
else ctx.fillStyle = 'lightsteelblue'
ctx.lineWidth = 10
ctx.rect(0, 0, canvas.width, canvas.height)
ctx.fill()
//OUTLINE
ctx.fillStyle = 'black';
ctx.font = '24px Sans-Serif'
if(name.length >= 5) {
    var dist = (name.length - 4)*16;
} else {
    var dist = (name.length) *14;
    console.log(dist);
}
ctx.fillText("Name: " + name, 150-dist, 50);
const hungy = await Canvas.loadImage(__dirname + '/assets/hunger.png');
ctx.drawImage(hungy, 150, 80, 35, 35);
//////////////*hungy bar*/////////////////
ctx.beginPath()
ctx.strokeStyle = 'black'
ctx.lineWidth = 2
ctx.rect(190, 80, 100, 35)
ctx.stroke()
  
ctx.beginPath()
if(type == "Ghast")
ctx.fillStyle = 'grey'
else ctx.fillStyle = 'green'
ctx.rect(190, 80, hunger, 35)
ctx.fill()
///////////////*hungy bar*//////////////
const borg = await Canvas.loadImage(__dirname + '/assets/borg.png');
const heart = await Canvas.loadImage(__dirname + '/assets/love.png');
ctx.drawImage(heart, 150, 130, 35, 35);
//////////////*lovy bar*////////////
ctx.beginPath()
ctx.strokeStyle = 'black'
ctx.lineWidth = 2
ctx.rect(190, 130, 100, 35)
ctx.stroke()
  
ctx.beginPath()
if(type == "Ghast")
ctx.fillStyle = 'grey'
else ctx.fillStyle = 'red'
ctx.rect(190, 130, love, 35)
ctx.fill()
///////*lovy bar*//////////
  
//MENU MENU MENU
  
ctx.beginPath()
ctx.strokeStyle = 'black'
ctx.lineWidth = 5
ctx.rect(0, 220, canvas.width, 150)
ctx.stroke()
//**WISP**
if(type == 'Wisp'){
const pet = await Canvas.loadImage(__dirname + '/assets/pet0.png');
const face = await Canvas.loadImage(__dirname + '/assets/face'+ faceIndex + '.png');
const hat = await Canvas.loadImage(__dirname + '/assets/hat'+ hatIndex + '.png');
ctx.drawImage(pet, 25, 75, 123, 126);
ctx.drawImage(face, 55, 140, 60, 40);
ctx.drawImage(hat, 35, 45, 100, 80);
}

if(type == 'Fire'){
const pet = await Canvas.loadImage(__dirname + '/assets/fire.png');
const face = await Canvas.loadImage(__dirname + '/assets/face'+ faceIndex + '.png');
const hat = await Canvas.loadImage(__dirname + '/assets/hat'+ hatIndex + '.png');
ctx.drawImage(pet, 25, 75, 123, 126);
ctx.drawImage(face, 55, 140, 60, 40);
ctx.drawImage(hat, 35, 55, 100, 80);
}
  
if(type == 'Water'){
const pet = await Canvas.loadImage(__dirname + '/assets/water.png');
const face = await Canvas.loadImage(__dirname + '/assets/face'+ faceIndex + '.png');
const hat = await Canvas.loadImage(__dirname + '/assets/hat'+ hatIndex + '.png');
ctx.drawImage(pet, 10, 75, 145, 126);
ctx.drawImage(face, 45, 140, 60, 40);
ctx.drawImage(hat, 25, 48, 100, 80);
}

if(type == 'Ghast'){
const pet = await Canvas.loadImage(__dirname + '/assets/dead.png');
ctx.drawImage(pet, 25, 75, 123, 126);
//interaction bar for dead pets

}
else{
  //interaction bar for living pets
ctx.drawImage(heart, 10, 235, 15, 15);
ctx.fillStyle = 'red';
ctx.font = '18px Sans-Serif'
ctx.fillText(":lub ", 25, 250);
  
ctx.drawImage(borg, 80, 235, 15, 15); 
ctx.fillStyle = 'coral';
ctx.fillText(":borg ", 95, 250);
  
ctx.fillStyle = "darkviolet";
ctx.fillText(":rename ", 220, 20);
  
ctx.fillStyle = "black";
ctx.fillText(":face [0 - 4]\n:hat [0 - 6]", 170, 250);
  
ctx.font = '8px Sans-Serif'
ctx.fillStyle = "black";
ctx.fillText("exp: " + age, 220, 60);
}
  
if(message.content == ':lub'){
  ctx.drawImage(heart, 15, 68, 75, 75);
  ctx.drawImage(heart, 55, 34, 75, 75);
}
else if (message.content == ':borg'){
  ctx.drawImage(borg, 55,160,40,40);
}

  
const attachment = new Discord.Attachment(canvas.toBuffer(), 'backdrop.jpg');
message.channel.send(attachment);
};

game.prototype.drawSurvivor = async function(Canvas, canvas, ctx, Discord, message, points2, points1, wins1, wins2){
  
const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
  
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
ctx.globalAlpha = 0.95;
ctx.beginPath();
ctx.fillStyle = "white";
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fill();

ctx.font = 'italic 12pt Calibri';
ctx.fillStyle = "black";
ctx.fillText('Points: ' + points2,0,50);
ctx.fillText('Wins: ' + wins2,0,20);
ctx.fillText('Points: ' + points1,100,50);
ctx.fillText('Wins: ' + wins1,100,20);
//Use helpful Attachment class structure to process the file for you
  
  
const kuragg = await Canvas.loadImage(__dirname + '/assets/kuragg.png');
const qawwi = await Canvas.loadImage(__dirname + '/assets/Qawwi.png');

ctx.drawImage(kuragg, 0, 70, 100, 130);
ctx.drawImage(qawwi, 100, 70, 100, 130); 
  

  
const attachment = new Discord.Attachment(canvas.toBuffer(), 'backdrop.jpg');
message.channel.send(attachment);
};
module.exports = game;