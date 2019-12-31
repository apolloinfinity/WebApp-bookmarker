const dateFns = require('date-fns');

module.exports = (req, res, next) => {
	console.log(`Hello from logger`);
	next();
};
