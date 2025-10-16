import { writeFileSync, mkdirSync, existsSync } from 'fs';

const envDir = './src/environments';
if (!existsSync(envDir)) {
  mkdirSync(envDir, { recursive: true });
}

const env = {
  production: true,
  companyName: process.env['COMPANY_NAME'],
  companyName2: process.env['COMPANY_NAME2'],
  companySlogan: process.env['COMPANY_SLOGAN'],
  giphyApiKey: process.env['GIPHY_API_KEY'],
  giphyUrl: process.env['GIPHY_URL']
};

const content = `export const environment = ${JSON.stringify(env, null, 2)};\n`;

writeFileSync(`${envDir}/environment.ts`, content);
