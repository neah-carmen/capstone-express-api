import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = require("../src/models").User;
import AuthService from "../services/AuthService";
import Util from "../utilities/Utils";

require("dotenv").config();
const secret = process.env.JWT_SECRET;

const util = new Util();

class AuthController {
  static async createUser(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
      util.setError(400, "Please provide complete details");
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await AuthService.createUser(newUser);
      util.setSuccess(201, "User Added!", createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async createSession(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(400).json({ msg: "User not exist" });
        }

        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (err) {
            throw err;
          }

          if (result) {
            let token = jwt.sign({ id: user.id }, secret, {
              expiresIn: 86400 // expires in 24 hours
            });
            return res.status(200).json({ msg: "Login success", token });
          } else {
            return res.status(401).json({ msg: "Invalid credentials" });
          }
        });
      })
      .catch(err => {
        res.status(500).send({ reason: err.message });
      });
  }
}

export default AuthController;
