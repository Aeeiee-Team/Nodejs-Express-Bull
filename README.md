# Nodejs-Express-Kue
A simple REST API that shows how to use bull as a job priority queue

## Getting Started

### Prerequisites

You must have

1. [Node.js](https://nodejs.org/) (_v8.12.0 or higher_) and npm (_6.4.1 or higher_) installed on your local machine. Run `node -v` and `npm -v` in your terminal to confirm that you have them installed

2. GIT bash

### Installing

To get started, clone this repository on your local machine using the following steps:

Open your terminal and navigate to the folder you want the project to be and enter the the following commands:

```
$ git clone https://github.com/Aeeiee-Team/Nodejs-Express-Bull.git
$ cd Nodejs-Express-Bull
$ npm install
```

Create a `.env` file and add the environment variables described in the .env.sample file. Below are the relevant environment variables worth adding:

- `DATA_DB` - Connection string for monogodb database (development environment).
- `SENDGRID_API_KEY` - Sendgrid API key for sending reset password email notification.
- `SENDERS_EMAIL` - Email that has gone through the single sender verification and will show as the sender's email
- `TWILIO_ACCOUNT_SID` - Twilio account SID for messaging
- `TWILIO_AUTH_TOKEN` - Twilio account auth token for messaging
- `MESSAGING` - Twilio assigned number for messaging


You'll need to register on the [sendgrid](https://sendgrid.com/) platform to get an API key.  You'll also need to go to settings and fufil the single sender verification requirement with the senders email.