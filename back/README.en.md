# Piiquante - Hot Sauce Rating API

Here are the instructions for installation and startup using the `.env` file and the `exampleDataInsertion.js` file to add demo data:

## Installation

1. Clone the GitHub repository: `git clone https://github.com/codavidev/DavidCharguiri_6_03062021.git`
2. Navigate to the backend directory: `cd DavidCharguiri_6_03062021/back`
3. Install dependencies: `npm install`

## Configuration

1. Copy the `.env.example` file to `.env`:

```
cp .env.example .env
```

2. Open the `.env` file and replace the environment variable values with your own:

```
DB_USER=<your_mongodb_username>
DB_PASSWORD=<your_mongodb_password>
DB_CLUSTER=<your_mongodb_cluster>
TOKEN_KEY=<your_secret_token_key>
```

## Startup

1. Start the server: `npm start`

2. The API will be accessible at `http://localhost:3000/`

### Demo Data (optional)

Once the server is started, you can run the `exampleDataInsertion.js` script to add demo data (users and sauces):

```
node exampleDataInsertion.js
```

The `.env` file contains the environment variables required to connect to the MongoDB database and configure the secret token key for JWT authentication.

The `exampleDataInsertion.js` file is a script that inserts dummy data into the database, such as users and sauces, to allow testing the API with demo data.