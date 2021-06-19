const redis = require("redis");
require("dotenv").config();

let redisClient;
if (process.env.NODE_ENV === "production") {
	redisClient = redis.createClient(process.env.REDIS_URL);
} else {
	redisClient = redis.createClient({
		host: process.env.REDIS || "redis",
		port: 6379,
	});
}
redisClient.on("connect", () => {
	return "Redis client connected";
});




module.exports = redisClient;
