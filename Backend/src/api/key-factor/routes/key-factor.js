'use strict';

/**
 * key-factor router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::key-factor.key-factor');
