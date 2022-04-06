import { Types } from 'mongoose';
import { generateUserJwt, UserPayLoad } from '../services/jwt';

export const mockAuthenticate = async (userPayload?: UserPayLoad) => {
  if (!process.env.COOKIE_SESSION_NAME)
    throw new Error('COOKIE_SESSION_NAME must be defined');

  // Create a userId that is of mongo object id format
  const userId = new Types.ObjectId().toString();

  // Create a payload
  const payload = userPayload
    ? userPayload
    : { id: userId, email: 'test@test.com' };

  // Create JWT
  const jwt = await generateUserJwt(payload);

  // Create session object
  const session = { jwt };

  // Convert session to JSON
  const sessionJSON = JSON.stringify(session);

  // Encode base 64
  const base64 = Buffer.from(sessionJSON).toString('base64');

  // Return cookie
  return `${process.env.COOKIE_SESSION_NAME}=${base64}`;
};
