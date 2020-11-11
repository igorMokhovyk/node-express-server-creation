import User from './Model';

export default function deleteAll(req, res) {

  User.deleteMany()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json('User Update Error');
    });
}
