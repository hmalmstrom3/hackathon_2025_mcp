import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const TOKEN_URL = process.env.PAYLOCITY_TOKEN_URL;
const CLIENT_ID = process.env.PAYLOCITY_CLIENT_ID;
const CLIENT_SECRET = process.env.PAYLOCITY_CLIENT_SECRET;

let tokenCache: { access_token: string; expires_at: number } | null = null;

export async function getPaylocityAccessToken(): Promise<string> {
  const now = Date.now();
  if (tokenCache && tokenCache.expires_at > now) {
    return tokenCache.access_token;
  }

  const response = await axios.post(
    TOKEN_URL!,
    new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID!,
      client_secret: CLIENT_SECRET!,
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  const { access_token, expires_in } = response.data as { access_token: string; expires_in: number };
  tokenCache = {
    access_token,
    expires_at: now + (expires_in - 60) * 1000, // expire 1 min early for safety
  };
  return access_token;
}
