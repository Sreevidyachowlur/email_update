const emailModel = require("../model/email-model");

const emailDao = {
  createEmail: (payload) => {
    return emailModel({
      email: payload.email,
      password: payload.password,
    }).save();
  },
  updateEmail: (data) => {
    return emailModel.updateOne(
      { _id: data.id },
      { $set: { email: data.email } }
    );
  },
};

module.exports = emailDao;
