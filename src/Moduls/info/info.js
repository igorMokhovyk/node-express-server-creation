const names = [];

export default function info(req, res) {
  names.push(req.body.name);
  res.send('info here!' + names);
}
