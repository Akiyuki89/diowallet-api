import authService from "../services/authService.js";

function signup(req, res) {
  const body = req.body;

  authService.signup(body);

  res.send();
}

export default { signup };
