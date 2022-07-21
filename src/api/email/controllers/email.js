"use strict";

/**
 * A set of functions called "actions" for `email`
 */

// module.exports = {
//   // exampleAction: async (ctx, next) => {
//   //   try {
//   //     ctx.body = 'ok';
//   //   } catch (err) {
//   //     ctx.body = err;
//   //   }
//   // }
// };

module.exports = {
  async index(ctx, next) {
    await strapi.plugins['email'].services.email.send({
      to: 'adarsh@mailinator.com',
      from: 'noreply@crystalcodelabs.com',
      replyTo: 'noreply@crystalcodelabs.com',
      subject: 'Use strapi email provider successfully',
      text: 'The Strapi email provider',
    });
    ctx.send("Email Send");
  },
};
