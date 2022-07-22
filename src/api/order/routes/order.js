'use strict';

/**
 * order router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::order.order');

module.exports = {
    routes: [
      {
        method: "GET",
        path: "/order",
        handler: "order.find",
      },
      {
        method: "GET",
        path: "/order-product-list",
        handler: "order.findOrder",
      }
    ]
  }