exports.run = (client, message, args) => {
  const user = message.author;
  let reason = args.join(" ").slice(22);
  message.user.setNickname(reason);
};
