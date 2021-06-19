const { errorHelper } = require("./response");

require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function sendText(firstName, phoneNumber) {
	console.log(phoneNumber, firstName);
	try {
		await client.messages.create({
			body: `Welcome to  Aeeiee, ${firstName}`,
			from: `${process.env.MESSAGING}`,
			to: `${phoneNumber}`,
		});
		return;
	} catch (error) {
		return errorHelper(res, 500, error);
	}
}

module.exports = {
	sendText,
};
