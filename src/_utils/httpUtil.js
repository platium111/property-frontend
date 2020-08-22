import { Auth } from 'aws-amplify';

export async function getHeaders() {
  // Set auth token headers to be passed in all API requests
  const headers = { };
  const session = await Auth.currentSession();
  if (session) {
    headers.Authorization = `${session.getIdToken().getJwtToken()}`;
  }
  return headers;
}