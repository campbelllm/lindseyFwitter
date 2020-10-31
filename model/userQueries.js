const findAllUsers = 'SELECT id, username FROM users;';
const findUserByIdQuery = 'SELECT id, username FROM users WHERE id = ?;';
const findUserByUsername = 'SELECT id, username, password FROM users WHERE username = ?;';
const findFweetByUserIdQuery = 'SELECT * FROM fweets WHERE userId = ?;';
const insertUserQuery = 'INSERT INTO users (username, password) VALUES (?, ?);';
const deleteUserByIdQuery = 'DELETE FROM users WHERE ID = ?;';
const fetchSingleFweetQuery = 'SELECT * FROM fweets WHERE userId = ? AND id = ?;';
const deleteSingleFweetByUserId = 'DELETE FROM fweets WHERE userId = ? AND id = ?;'

module.exports = {
  findAllUsers,
  findUserByIdQuery,
  findUserByUsername,
  insertUserQuery,
  deleteUserByIdQuery,
  findFweetByUserIdQuery,
  fetchSingleFweetQuery,
  deleteSingleFweetByUserId,
};
