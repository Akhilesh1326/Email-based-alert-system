import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rawData = readFileSync(join(__dirname, 'companies.json'), 'utf8');
const companiesArray = JSON.parse(rawData);

export const COMPANY_LINKS = {};
for (const company of companiesArray) {
    COMPANY_LINKS[company.name] = company.url;
}
