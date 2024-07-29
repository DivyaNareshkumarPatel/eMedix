const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
dotenv.config();
async function clearCollection() {
    const uri = process.env.mongoURI;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('eMedix');
        const collection = database.collection('hospitals');

        const result = await collection.deleteMany({});
        console.log(`${result.deletedCount} documents were deleted.`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

clearCollection().catch(console.dir);