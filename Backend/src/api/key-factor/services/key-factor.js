'use strict';

/**
 * key-factor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::key-factor.key-factor');
