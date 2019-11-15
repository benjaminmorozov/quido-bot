exports.run = (client, message, args) => {
  const user = message.author;
  let reason = args.join(" ").slice(22);
  message.guild.members.get(user.id).setNickname(reason);
};
