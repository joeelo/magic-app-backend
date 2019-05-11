const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;
const id = new ObjectID();

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "magic-api";



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("unable to connect:", error)
  } 

  const db = client.db(databaseName);

  const query = {"completed": true}

});
