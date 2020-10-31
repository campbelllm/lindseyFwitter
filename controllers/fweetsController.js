const {
  fetchAllFweetsByUserId,
  fetchSingleFweetByUserId,
  deleteSingleFweetByUserId,

} = require('../model/fweetsOrm');

module.exports = {

  getAllFweetsApi: async (req, res) => {
    try {
      const {userId} = req.params;
      const fweets = await fetchAllFweetsByUserId(userId);
      res.json(fweets);
    } catch (e) {
      console.log(e);
      res.status(400)
        .json(e);
    }
  },
  getFweetByIdApi: async (req, res) => {
    const { userId, fweetId } = req.params;
    try {
      res.json(await fetchSingleFweetByUserId(userId, fweetId));
    } catch (e) {
      console.log('i am broken L:38', e);
      res.status(400)
        .json(e);
    }
  },
  deleteFweetByIdApi: async (req, res) => {
    console.log(req.user);
    const { userId, fweetId } = req.params;
    if (parseInt(userId) !== req.user.id) {
      return res.status(401)
        .json({ error: 'You cannot delete a user that is not yourself' });
    }
    try {
      const deleteFweet = await deleteSingleFweetByUserId(userId, fweetId);
      res.json(deleteFweet);
    } catch (e) {
      console.log('i am broken L:48', e);
      res.status(400)
        .json(e);
    }
  },

};
