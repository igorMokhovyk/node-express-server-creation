import User from './Model';

export default function userDeleteById(req, res) {
  const userId = req.params.userId;

  delete req.body.password;

  User.deleteOne({ _id: userId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json('User Delete Error');
    });
}
