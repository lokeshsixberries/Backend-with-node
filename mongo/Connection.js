const mongo = require("mongoose");

module.exports = () => {
  mongo
    .connect(
      `mongodb+srv://veera:Lokesh0000@cluster0.rctih.mongodb.net/?retryWrites=true&w=majority`
    )
    .then((res) => {
      console.log("Database Connected !!!")
    })
    .catch((err) => {
        console.log("Database Connected Failed xxx")    
    });
};
