import User from './Model';

export default function userRegister(req, res) {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then(() => {
      res.status(200).json('user Created');
    })
    .catch(() => {
      res.status(400).json('user Not Created');
    });
}
