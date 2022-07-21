'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::order.order');

module.exports = createCoreController("api::order.order", ({ strapi }) =>  ({
    async find(ctx) {
        // some logic here
        const response = await super.find(ctx);
        // some more logic
        return response;
      }
}));