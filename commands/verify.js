const { randomBytes } = require("crypto");
const Jimp = require("jimp");
const { RichEmbed } = require("discord.js");

module.exports = async function(message) {

    if (message.args.length === 0) {
        // No arguments provided

        const captcha = randomBytes(32).toString("hex").substr(0, 6);
        const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
        const image = await Jimp.read("./assets/noise.jpg");
        image.print(font, 0, 0, captcha);

        const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
        const embed = new RichEmbed()
            .setTitle("Verification")
            .setDescription("This server is protected by a Captcha to prevent getting raided.\n" +
                "Please solve this captcha by sending `q!verify [code]` in this channel.")
            .attachFile({ attachment: buffer, name: "captcha.jpeg" })
            .setImage("attachment://captcha.jpeg");
        message.channel.send(embed).then(sentMessage => {
            sentMessage.delete(60000);
        });
        this.query.set(message.author.id, captcha);

    } else {
        // Arguments provided
        if (!this.query.has(message.author.id)) return message.reply("⛔ | Please request a captcha by sending `q!verify`");

        const captcha = this.query.get(message.author.id);

        if (message.args[0] !== captcha) return message.reply("⛔ | Invalid captcha!");
        else {
            let verifiedRole = message.guild.roles.find(role => role.name == "Member");
            message.member.addRole(verifiedRole).then(() => {
                message.reply("✅ | Successfully verified.");
            }).catch(console.error);
            this.query.delete(message.author.id);
        }

    }
};
