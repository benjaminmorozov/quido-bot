Canvas.registerFont(resolve(join(__dirname, "../assets/Discord.ttf")), "Discord");
const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const fetch = require("node-fetch"); // This is to fetch the user avatar and convert it to a buffer.
const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@quido-bot-sku03.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
});
const Score = require("../models/score.js")

const imageUrlRegex = /\?size=2048$/g;

exports.run = async (client, message, args) => {
  Score.findOne({userID: message.author.id, serverID: message.guild.id}, (err, score) => {
  async function profile(member, score) {
    try {
      const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
      if (!result.ok) throw new Error("Failed to get the avatar.");
      const avatar = await result.buffer();

      // The reason for the displayName length check, is we don't want the name of the user going outside
      // the box we're going to be making later, so we grab all the characters from the 0 index through
      // to the 17th index and cut the rest off, then append `...`.
      const name = member.displayName.length > 20 ? member.displayName.substring(0, 17) + "..." : member.displayName;

      // ...
    } catch (error) {
      await message.channel.send(`Something happened: ${error.message}`);
    };
    return new Canvas(400, 180)
      // Create the Blurple rectangle on the right side of the image.
      .setColor("#7289DA")
      .addRect(84, 0, 316, 180)
      // Create the "Dark, but not black" boxes for the left side of the image
      // and the text boxes on the right.
      .setColor("#2C2F33")
      .addRect(0, 0, 84, 180)
      .addRect(169, 26, 231, 46)
      .addRect(224, 108, 176, 46)
      // Create a shadow effect for the avatar placement.
      .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
      .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
      .setShadowBlur(10) // Blur the shadow by 10.
      // This circle is 2 pixels smaller in the radius to prevent a pixel border.
      .addCircle(84, 90, 62)
      .addCircularImage(avatar, 20, 26, 64)
      // This creates a rounded corner rectangle, you must use save and restore to
      // clear the clip after we are done with it
      .save()
      .createBeveledClip(20, 138, 128, 32, 5)
      .setColor("#23272A")
      .fill()
      .restore()
      // Add all of the text for the template.
      // Let's center the text
      .setTextAlign("center")
      // I'm using a custom font, which I will show you how to add next.
      .setTextFont("10pt Discord")
      // Set the colour to white, since we have a dark background for all the text boxes.
      .setColor("#FFFFFF")
      // Add the name variable.
      .addText(name, 285, 54)
      // Using template literals, you can add text and variables, we're applying the toLocaleString()
      // to break up the number into a nice readable format.
      .addText(`Level: test`, 84, 159)
      // Now we want to align the text to the left.
      .setTextAlign("left")
      // Let's add all the points!
      .addText(`Score: ${score}`, 241, 136)
      .toBuffer()
  }
  const buffer = await profile(message.member, score.score);
  const filename = `profile-${message.author.id}.jpg`;
  const attachment = new Attachment(buffer, filename);
  await message.channel.send(attachment);
  });
};
