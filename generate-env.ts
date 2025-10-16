import { writeFileSync } from 'fs';

const env = {
  production: true,
  companyName: process.env.COMPANY_NAME,
  companyName2: process.env.COMPANY_NAME2,
  companySlogan: process.env.COMPANY_SLOGAN,
  giphyApiKey: process.env.GIPHY_API_KEY,
  giphyUrl: process.env.GIPHY_URL
};

const content = `export const environment = ${JSON.stringify(env, null, 2)};\n`;

writeFileSync('./src/environments/environment.ts', content);

