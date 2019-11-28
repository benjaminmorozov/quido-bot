const { stripIndents } = require('common-tags');
const moment = require('moment');
const sherlock = require('sherlockjs');
exports.run = async (client, message, args, { remind }) => {
  let reason = args.join(" ").slice(22);
  const time = remind.startDate.getTime() - Date.now();
  const preRemind = await msg.say(stripIndents`
    I will remind you '${Util.cleanContent(message, remind.eventTitle)}' ${moment().add(time, 'ms').fromNow()}.
  `);
  const remindMessage = await new Promise(resolve => {
    setTimeout(() => resolve(message.say(stripIndents`
      ${message.author} you wanted me to remind you of: '${Util.cleanContent(message, remind.eventTitle)}'
    `)), time);
  });

  return [preRemind, remindMessage];
};
