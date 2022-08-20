const PORT = process.env.PORT || 5000;
const dbURI = process.env.dbURI || "mongodb+srv://quiz:2468@quiz.zkk8cdf.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
    PORT: PORT,
    dbURI: dbURI,
}