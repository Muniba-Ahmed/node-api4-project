const initialUsers = () => [
  { username: "Muniba", password: "#######" },
  { username: "Marlo", password: "#######" },
];

let users = initialUsers();

const findAll = () => {
  return Promise.resolve(users);
};

const addUser = ({ username, password }) => {
  const newUser = { username, password };
  users.push(newUser);
  return Promise.resolve(newUser);
};

module.exports = {
  findAll,
  addUser,
};
