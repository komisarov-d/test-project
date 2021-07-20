import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_CONFIG } from './jwtConfig';
import userRepository from '../data/repositories/UserRepository';
import { compare } from '../common/utils/cryptoHelper';
import { adjustEmail } from '../common/utils/stringHelper';
import { ResponseErrorMessage, ResponseStatusCode } from '../common/enums';

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: JWT_CONFIG.secret
};

passport.use(
	'login',
	new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
		try {
			const unauthorizedResponse = () =>
				done(
					{ status: ResponseStatusCode.Unauthorized, message: ResponseErrorMessage.EmailOrPasswordIncorrect },
					false
				);

			const user = await userRepository.getUserByEmail(adjustEmail(email));
			if (!user) {
				return unauthorizedResponse();
			}

			const isValidPassword = await compare(password, user.password);

			return isValidPassword ? done(null, user) : unauthorizedResponse();
		} catch (err) {
			return done(err);
		}
	})
);

passport.use(
	'register',
	new LocalStrategy(
		{
			passReqToCallback: true,
			usernameField: 'email'
		},
		async ({ body: { firstName, lastName } }, email, password, done) => {
			try {
				const userByEmail = await userRepository.getUserByEmail(adjustEmail(email));

				return userByEmail
					? done(
							{ status: ResponseStatusCode.BadRequest, message: ResponseErrorMessage.EmailAlreadyTaken },
							null
					  )
					: done(null, { email, firstName, lastName, password });
			} catch (err) {
				return done(err);
			}
		}
	)
);

passport.use(
	new JwtStrategy(options, async ({ id }, done) => {
		try {
			const user = await userRepository.getById(id);
			return user
				? done(null, user)
				: done({ status: ResponseStatusCode.Unauthorized, message: 'Token is invalid.' }, null);
		} catch (err) {
			return done(err);
		}
	})
);
