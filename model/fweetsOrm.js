const {
  findFweetByUserIdQuery,
  fetchSingleFweetQuery,
  deleteSingleFweetByUserId,
} = require('./userQueries');
const connection = require('../config/connection');

const fetchAllFweetsByUserId = async (userId) => {
  try {
    const [rows] = await connection.query(findFweetByUserIdQuery, userId)
    return rows[0];
  }catch (e){
    throw new Error(e);
  }
}

const fetchSingleFweetByUserId = async (userId, fweetId) => {
  try {
    const [rows] = await connection.query(fetchSingleFweetQuery, userId, fweetId)
    return rows[0];
  }catch (e){
    throw new Error(e);
  }
}

const deleteSingleFweetByUserId = async (userId, fweetId) => {
  try {
    const [rows] = await connection.query(deleteSingleFweetQuery, userId, fweetId)
    return rows[0];
    
  } catch (error) {
    throw new Error(e);
  }
};

module.exports = {
  fetchAllFweetsByUserId,
  fetchSingleFweetByUserId,
  deleteSingleFweetByUserId,
}