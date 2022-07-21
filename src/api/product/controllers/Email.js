module.exports = {
  index: async (ctx) => {
    await strapi.plugins["email"].service.sendEmail({
      to: "EMAIL_TOEMAI",
      from: "EMAIL_ADDRESS_FROM",
      replayTo: "EMAIL_TOEMAI",
      subject: "The Sample Email message has been sent on Strapi",
      text: "Sendgrid Email",
    });
    ctx.sendEmail("Email Send");
  },
};
    