import passport from 'passport';

const authenticationMiddleware = passport.authenticate('login', { session: false });

export { authenticationMiddleware };
