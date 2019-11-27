exports.run = (client, message, args) => {
  if (!args.length) {
      return;
  }
  let reportmessage = args.join(" ");
  client.fetchUser("207044528027205634",false).then(user => {
          user.send(reportmessage);
  });
};
