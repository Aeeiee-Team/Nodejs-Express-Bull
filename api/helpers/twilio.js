const { errorHelper } = require("./response");

require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

async function sendText(job, done) {
	console.log(job._doc);
	const data = job._doc;
	try {
		await client.messages.create({
			body: `Welcome to  Aeeiee, ${data.firstName}`,
			from: `${process.env.MESSAGING}`,
			to: `${data.phoneNumber}`,
		});

		return done();
	} catch (error) {
		done();
		return errorHelper(res, 500, error);
	}
}

module.exports = {
	sendText,
};
