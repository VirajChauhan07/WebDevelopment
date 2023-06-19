const { MongoClient } = require('mongodb');
 
// Connecting to a local port
const uri = 'mongodb://127.0.0.1:27017';
 
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
 
connect();
 
// ESNext syntax using async-await
async function connect() {
    try {
        await client.connect();
        const db = client.db('fruitsDB');
        console.log(
    `Successfully connected to db ${db.databaseName}`);
    const collection = db.collection('fruits');
     
        // Insertion
        const cursorInsertion = await collection.insertMany([
            {
               name:'Banana',
               score:'9',
               review:'Great stuff'
            },
            {
              name:'Orange',
              score:'7',
              review:'kinda sour'
            },
            {
              name:'Apple',
              score:'8',
              review:'Great fruit'
            }]);
        console.log(cursorInsertion.insertedCount);
         
        // Display
        const cursorFind = collection.find();
        const data = await cursorFind.toArray();
        console.table(data);
    }
    catch (err) {
        console.error(`we encountered ${err}`);
    }
    finally {
        client.close();
    }
}