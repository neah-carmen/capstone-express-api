import SessionService from "../services/SessionService";
import Util from "../utilities/Utils";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "dotenv";
import User from "";

const util = new Util();

class SessionController {
  static async createSession(req, res) {
    console.log("Sign-In");

    User.findOne({
      where: {
        username: req.body.username
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send("User Not Found.");
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            auth: false,
            accessToken: null,
            reason: "Invalid Password!"
          });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({ auth: true, accessToken: token });
      })
      .catch(err => {
        res.status(500).send("Error -> " + err);
      });
  }
}
export default SessionController;
