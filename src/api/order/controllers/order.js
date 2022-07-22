"use strict";

/**
 *  order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::order.order');

module.exports = {
  async find(ctx) {
    // some logic here
    const response = await strapi.entityService.findMany('api::order.order');
    // some more logic
    return response;
  },

  async findOrder(ctx) {
    // some logic here
    const response = await strapi.entityService.findMany("api::product.product");
    // some more logic
    return response;
  }
}

