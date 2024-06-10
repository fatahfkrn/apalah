// Get the client
import { createConnection } from "dbmassive";
// Create the connection to database
const database = createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "dbmassive",
});
database.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Terhubung ke database dengan ID ` + database.threadId);
});
export default database;
