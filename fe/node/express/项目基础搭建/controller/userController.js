exports.register = async (req, res) => {
  console.log(req.body);
  res.send('/register')
}

exports.list = async (req, res) => {
  res.send('/users')
}

exports.delete = async (req, res) => {

}