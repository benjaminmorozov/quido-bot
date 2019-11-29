const { randomBytes } = require("crypto");
const Jimp = require("jimp");
const { RichEmbed } = require("discord.js");
const query = new Map();

exports.run = async (client, message, args) => {
    if (args.length === 0) {
        // No arguments provided

        const captcha = randomBytes(32).toString("hex").substr(0, 6);
        const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
        const image = await Jimp.read("./assets/noise.jpg");
        image.print(font, 0, 0, captcha);

        const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
        const embed = new RichEmbed()
            .setTitle("Verification")
            .setDescription("meow")
            .attachFile({ attachment: buffer, name: "captcha.jpeg" })
            .setImage("attachment://captcha.jpeg");
        message.author.send(embed).catch(() => {
            message.reply("⛔ | Could not send captcha, maybe you have Direct Messages disabled?");
        });

        this.query.set(message.author.id, captcha);

    } else {
        // Arguments provided
        if (!this.query.has(message.author.id)) return message.reply("⛔ | Please request a captcha by sending `" + this.config.prefix + "verify`");

        const captcha = this.query.get(message.author.id);

        if (message.args[0] !== captcha) return message.reply("⛔ | Invalid captcha!");
        else {
          let mutedRole = message.guild.roles.find(role => role.name == "Member");
            message.member.addRole(mutedRole).then(() => {
                message.reply("✅ | Successfully verified.");
            }).catch(console.error);
            this.query.delete(message.author.id);
        }

    }
};
