import type { Express } from 'express';
import mongoose from 'mongoose';

interface AppOptions {
  serviceName: string;
}

export const initializeServer = async (
  app: Express,
  appOptions: AppOptions
) => {
  // JWT env required by @hngittix/common
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET must be defined');
  if (!process.env.JWT_ISSUER) throw new Error('JWT_ISSUER must be defined');
  if (!process.env.JWT_AUDIENCE)
    throw new Error('JWT_AUDIENCE must be defined');
  if (!process.env.JWT_EXPIRATION_TIME)
    throw new Error('JWT_EXPIRATION_TIME must be defined');

  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI must be defined');

  const PORT = 3000;
  const SERVICE_NAME = appOptions.serviceName;

  // Connect to DB
  try {
    console.log(`Connecting to ${SERVICE_NAME}...`);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`🤝🤝🤝 Connected to ${SERVICE_NAME} DB 🤝🤝🤝`);
  } catch (e) {
    console.error(`💥💥💥 Unable to connect to ${SERVICE_NAME} DB`, e);
  }

  // Start the server
  app.listen(PORT, () => {
    console.log(
      `✅✅✅ ${SERVICE_NAME} service is listening on port ${PORT} ✅✅✅`
    );
  });
};