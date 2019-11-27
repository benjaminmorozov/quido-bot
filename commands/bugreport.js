exports.run = (client, message, args) => {
    if (!args.length) {
      return;
    }
    let reportmessage = args.join(" ");
    client.fetchUser("207044528027205634",false).then(user => {
      user.send(reportmessage);
    });
    message.reply("bug report was sent to the staff ❤️. Thanks for being a part of our community.");
};
