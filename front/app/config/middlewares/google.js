import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from "dotenv";
dotenv.config();

const email =["emmanuelgodi95@gmail.com"];

passport.use(
    "auth-google",
    new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    callbackURL: process.env.GOOGLE_LOGIN
  },
  function(accessToken, refreshToken, profile, cb) {
    const response = email.includes(profile.emails[0].value);
    if (response ){
        cb(null, profile);
    }else{
        //save database
        email.push(profile.emails[0].value);
        cb(null, profile);
    }
  }
));