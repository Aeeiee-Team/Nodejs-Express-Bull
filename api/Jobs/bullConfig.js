const Queue = require("bull");

const queue = new Queue("Jobs");
const { welcomeEmail } = require("../helpers/welcomeEmail");
const { sendText } = require("../helpers/twilio");

const createJob = (options, data) => {
	const opts = { priority: 0, attempts: 5};
	queue.add(options, data, {
		attempts: opts.attempts,
		backoff: {
			type: "exponential",
			delay: 2000,
		},
		removeOnComplete: true,
		removeOnFail: true,
	});
};

queue.process("Welcome email", (job, done) => welcomeEmail(job.data, done));
queue.process("Send Text", (job, done) => sendText(job.data, done));

module.exports = { createJob };
