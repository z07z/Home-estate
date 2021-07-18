'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {

	async getProperties(ctx){
		let populateQuery = [{path:'properties', select:'location'}];
		let entities = await strapi.query('property').model.find({}).select({
			location:1,
			photo:1
		}).populate(populateQuery).lean();


		return entities.map((entity, index) => {
		       const property = sanitizeEntity(entity, {model:strapi.models.property});
		       delete property.Photos;
		       
		       return property;
		});
	},

	async getSelected(ctx){
		const ids = ctx.request.body;
		let entities = await strapi.query('property').model.find({ '_id': { $in: ids } });

		return entities;
	}


};
