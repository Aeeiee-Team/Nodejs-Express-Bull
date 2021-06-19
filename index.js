require("dotenv").config();

const port = process.env.PORT || 4000;

const server = require("./api/routes/index");
const db = require("./database/config/db");

db()
	.then(() => {
		console.log("database is connected");
	})
	.catch((err) => {
		console.log(err);
	});

server.listen(port, () => console.log(`App listening on port ${port}`));
