const Canvas = require("canvas");
function transforms(){
  
}


//Grayscale transformation function
transforms.prototype.grayScale = async function(message, Discord){
  //Initialize canvas
  var canvas = Canvas.createCanvas(200, 200);
  var ctx = canvas.getContext('2d');
      //message.channel.send("Canvas loaded...");
  //Load image
  const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      //message.channel.send("Image loaded...");
  //Getting image pixel data
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
      //message.channel.send("Pixels loaded...");
  for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
  }
  ctx.putImageData(imageData, 0, 0);
      //message.channel.send("Image Grayscale Complete...");
  
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'backdrop.jpg');
  message.channel.send(attachment);
      //message.channel.send("Complete!");
};





//Invert transformation function
transforms.prototype.invert = async function(message, Discord){
  //Initialize canvas
  var canvas = Canvas.createCanvas(200, 200);
  var ctx = canvas.getContext('2d');
      //message.channel.send("Canvas loaded...");
  //Load image
  const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      //message.channel.send("Image loaded...");
  //Getting image pixel data
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
      //message.channel.send("Pixels loaded...");
  for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
      //message.channel.send("Image Inversion Complete...");
  
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'backdrop.jpg');
  message.channel.send(attachment);
      //message.channel.send("Complete!");
};




//Anti-Aliasing transformation function
transforms.prototype.smoothen = async function(message, Discord){
  //Initialize canvas
  var canvas = Canvas.createCanvas(200, 200);
  var ctx = canvas.getContext('2d');
      //message.channel.send("Canvas loaded...");
  //Load image
  const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      //message.channel.send("Image loaded...");
  //Smoothing settings
  ctx.imageSmoothingEnabled = this.checked;
  ctx.mozImageSmoothingEnabled = this.checked;
  ctx.webkitImageSmoothingEnabled = this.checked;
  ctx.msImageSmoothingEnabled = this.checked;
      //message.channel.send("Image Smoothing Complete...");
  
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'backdrop.jpg');
  message.channel.send(attachment);
      //message.channel.send("Complete!");
};





//Gaussian blur transformation function
transforms.prototype.blur = async function(message, Discord){
  //Initialize canvas
  var canvas = Canvas.createCanvas(200, 200);
  var ctx = canvas.getContext('2d');
      message.channel.send("Canvas loaded...");
  //Load image
  const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      message.channel.send("Image loaded...");
  //Getting image pixel data
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
      message.channel.send("Pixels loaded...");
  var sigma = 2;//intialize sigma value
  
  var minX = canvas.width,
  minY = canvas.height;
  for (var x = 0; x <= canvas.width; x++) {
    for (var y = 0; y <= canvas.height; y++) {
      /*if (minY < y) {
        break;
      }*/
      if (data[((y * minX + x) * 4) + 3] > 0) {
        /*if (x < minX) {
          minX = x;
        }*/
        /*if (y < minY) {
          minY = y;
        }*/
        data[y] = (1/(2*Math.PI*(Math.pow(sigma,2))))*
                  Math.pow(Math.e,(-((Math.pow(x,2)+Math.pow(y,2))
                                     /(2*Math.pow(sigma,2)))));
      }
      
    }
  }
  ctx.putImageData(imageData, 0, 0);
      message.channel.send("Image Blur Complete...");
  
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'backdrop.jpg');
  message.channel.send(attachment);
      message.channel.send("Complete!");
};





//Real Discrete Fourier Transform transformation function
transforms.prototype.rdft = async function(message, Discord){
  //Initialize canvas
  var canvas = Canvas.createCanvas(200, 200);
  var ctx = canvas.getContext('2d');
      message.channel.send("Canvas loaded...");
  //Load image
  const background = await Canvas.loadImage(__dirname + '/assets/backdrop.jpg');
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      message.channel.send("Image loaded...");
  //Getting image pixel data
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;
      message.channel.send("Pixels loaded...");
  //---------------------VARIABLE INIT-------------------------
  
  //-----------------------------------------------------------
  
  var minX = canvas.width,
  minY = canvas.height;
  for (var x = 0; x <= minX; x++) {
    for (var y = 0; y <= minY; y++) {
      if (minY < y) {
        break;
      }
      if (data[((y * minX + x) * 4) + 3] > 0) {
        if (x < minX) {
          minX = x;
        }
        if (y < minY) {
          minY = y;
        }
        data[y] = null;
      }
    }
  }
      message.channel.send("Discrete Fourier Transform Complete...");
  
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'backdrop.jpg');
  message.channel.send(attachment);
      message.channel.send("Complete!");
};


module.exports = transforms;