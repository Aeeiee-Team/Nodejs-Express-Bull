require("dotenv").config();
const mongoose = require("mongoose");

let mongoUrl = null;

const mongoConnection = () => {
	if (process.env.NODE_ENV === "test") {
		mongoUrl = process.env.TEST_DB;
	} else {
		mongoUrl = process.env.DATA_DB;
	}
	return mongoose.connect(mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	});
};

module.exports = mongoConnection;
