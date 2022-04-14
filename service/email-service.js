const emailDao = require("../dao/email-dao");

const emailService = {
  createEmail: (payload) => {
    return new Promise((resolve, reject) => {
      emailDao
        .createEmail(payload)
        .then((result) => {
          resolve({ message: "email stored successfully", result: result });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateEmail: (data) => {
    console.log("updateEmail", data);
    return new Promise((resolve, reject) => {
      emailDao
        .updateEmail(data)
        .then((result) => {
          resolve({ message: "email updated successfully", result: result });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

module.exports = emailService;
