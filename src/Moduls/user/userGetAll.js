import User from './Model';

export default function userGetAll(req, res) {
  User.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json('User Get All Error');
    });
}
