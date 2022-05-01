const UserDao = require("../dao/User-dao");

const UserService = {
  createUser: (payload) => {
    return new Promise((resolve, reject) => {
      UserDao.createUser(payload)
        .then((result) => {
          resolve({ message: "User stored successfully", result: result });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getUser: (data) => {
    console.log("getUser", data);
    return new Promise((resolve, reject) => {
      UserDao.getUser(data)
        .then((result) => {
          resolve({ result: result });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  getAge: (data) => {
    console.log("getUser", data);
    return new Promise((resolve, reject) => {
      UserDao.getAge(data)
        .then((result) => {
          resolve({ result: result });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  pagination: (data) => {
    console.log("getUser", data);
    return new Promise((resolve, reject) => {
      UserDao.pagination(data)
        .then((result) => {
          resolve({ result: result });
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

module.exports = UserService;
