import authService from "../services/authService.js";

function signup(req, res) {
  const body = req.body;

  authService.signup(body);
}

export default { signup };
