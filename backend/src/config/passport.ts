import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { UserModel } from "../db.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile?.emails?.[0]?.value;

        if (!email) {
          return done(new Error("No email found in Google profile"));
        }
        const firstName = profile.name?.givenName ?? "User";
        const lastName = profile.name?.familyName ?? "";

        let user = await UserModel.findOne({ email });

        if (!user) {
          user = await UserModel.create({
            email,
            firstName,
            lastName,
            password: "google-oauth", // placeholder, never used
          });
        }
        return done(null, user);
      } catch (e) {
        return done(e);
      }
    },
  ),
);

passport.serializeUser((user: any, done) => {
  console.log(user._id);
  done(null, user._id.toString())});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (e) {
    done(e);
  }
});
