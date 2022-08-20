const PORT = process.env.PORT || 5000;
const dbURI =
  process.env.dbURI ||
  "mongodb+srv://quiz:2468@quiz.zkk8cdf.mongodb.net/?retryWrites=true&w=majority";

//change dburl put create cluster url

module.exports = {
  PORT: PORT,
  dbURI: dbURI,
};
