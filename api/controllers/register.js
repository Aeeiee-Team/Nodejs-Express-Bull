const { successResponse, errorHelper } = require("../helpers/response");
const models = require("../../database/models");
const { welcomeEmail } = require("../helpers/welcomeEmail");
const { sendText } = require("../helpers/twilio");

async function createUser(req, res) {
	try {
		const user = await models.User.create(req.body);
		welcomeEmail(user.firstName, user.lastName, user.email);
		sendText(user.firstName, user.phoneNumber);
		return successResponse(res, 201, "User Registered Successfully", user);
	} catch (error) {
		return errorHelper(res, 500, error);
	}
}

module.exports = { createUser };
