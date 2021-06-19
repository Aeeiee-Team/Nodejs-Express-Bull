const kue = require("kue");
require("dotenv").config();

let queue;
if (process.env.NODE_ENV === "development") {
	queue = kue.createQueue();
} else {
	queue = kue.createQueue({
		redis: process.env.REDIS_URL,
	});
}
queue.setMaxListeners(queue.getMaxListeners() + 100);
queue.watchStuckJobs(5000);
module.exports = queue;
