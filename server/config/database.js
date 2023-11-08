const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlParser: true, // Correct option name
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log(`DB Connection Success`);
		})
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.error(err); // Use console.error for errors
			process.exit(1);
	});
};
