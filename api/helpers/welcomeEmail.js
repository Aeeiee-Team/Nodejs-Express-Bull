require("dotenv").config();
const Mailgen = require("mailgen");

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function welcomeEmail(job, done) {
	const mailGenerator = new Mailgen({
		theme: "default",
		product: {
			name: "Aeeiee",
			link: `https://aeeiee.com`,
		},
	});
	const mail = {
		body: {
			name: `${job.firstName} ${job.lastName}`,
			intro: "Welcome to Aeeiee! We're very excited to have you on board.",
			action: {
				instructions: "To get started with Aeeiee, please click here:",
				button: {
					color: "#22BC66",
					text: "Checkout our Website",
					link: `https://aeeiee.com`,
				},
			},
			outro:
				"Need help, or have questions? Just reply to this email, we'd love to help.",
		},
	};
	const emailBody = mailGenerator.generate(mail);

	const emailText = mailGenerator.generatePlaintext(mail);

	const mailOption = {
		to: job.email,
		from: `${process.env.SENDERS_EMAIL}`,
		subject: "Welcome to Aeeiee",
		html: emailBody,
		text: emailText,
	};
	done();
	return sgMail.send(mailOption);
}

module.exports = { welcomeEmail };
