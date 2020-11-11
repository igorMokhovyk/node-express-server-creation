import User from './Model';

export default function userGetById(req, res) {
  const userId = req.params.userId;

  User.findById(userId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json('User Get All Error');
    });
}
