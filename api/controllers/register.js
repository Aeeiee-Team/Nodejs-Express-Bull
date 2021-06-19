const { successResponse, errorHelper } = require("../helpers/response");
const models = require("../../database/models");

const { createJob } = require("../Jobs/bullConfig");

async function createUser(req, res) {
	try {
		const user = await models.User.create(req.body);
		createJob("Welcome email", user);
		createJob("Send Text", user);
		return successResponse(res, 201, "User Registered Successfully", user);
	} catch (error) {
		console.log(error);
		return errorHelper(res, 500, error);
	}
}

module.exports = { createUser };
