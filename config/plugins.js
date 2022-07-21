// module.exports = ({ env }) => ({
//   email: {
//     config: {
//       provider: 'sendgrid',
//       providerOptions: {
//         apiKey: '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',
//       },
//       settings: {
//         defaultFrom: 'noreply@crystalcodelabs.com',
//         defaultReplyTo: 'adarsh@mailinator.com',
//       },
//     },
//   },
// });


// Nodemailer email plugins

// module.exports = ({ env }) => ({
//   email: {
//     provider: 'strapi-provider-email-nodemailer',
//     providerOptions: {
//       host: env('EMAIL_SMTP_HOST'), ,
//       port: 465,
//       secure: false,
//       auth: {
//         user: env('EMAIL_SMTP_USER'),
//         pass: env('EMAIL_SMTP_PASS'),
//       },
//       // ... any custom nodemailer options
//     },
//     settings: {
//       defaultFrom: 'noreply@crystalcodelabs.com',
//       defaultReplyTo: 'adarsh@mailinator.com',
//     },
//   },
// });

// module.exports = ({ env }) => ({
//   email: {
//     provider: "nodemailer",
//     providerOptions: {
//       host: "localhost",
//       port: 1337,
//       ignoreTLS: true,
//     },
//   },
// });


// smtp plugins

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST'), //SMTP Host
        port: 465   , //SMTP Port
        secure: true,
        username: env('EMAIL_SMTP_USER'),
        password: env('EMAIL_SMTP_PASS'),
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    }, 
  },    
});