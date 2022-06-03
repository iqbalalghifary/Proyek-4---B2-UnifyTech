'use strict';

/**
 * pegawai service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pegawai.pegawai');
