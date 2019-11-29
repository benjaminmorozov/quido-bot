exports.run = async (client, message, args, code) => {
  if(message.channel.type === dm) {
    console.log(code)
  } else {
    return;
  };
};
