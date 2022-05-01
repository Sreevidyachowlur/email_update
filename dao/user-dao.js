const UserModel = require("../model/User-model");

const UserDao = {
  createUser: (payload) => {
    return UserModel({
      userId: payload.userId,
      name: payload.name,
      age: payload.age,
    }).save();
  },
  getUser: (data) => {
    return UserModel.find({ name: data.name });
  },

  getAge: (payload) => {
    let age = payload.age;
    return UserModel.aggregate([{ $sort: { age: 1 } }]);
  },

  pagination: (payload) => {
    const { page = 1, limit = 10 } = payload;
    return UserModel.find({})
      .limit(limit * 1)
      .skip((page - 1) * limit);
  },
};

module.exports = UserDao;
