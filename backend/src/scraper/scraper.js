import axios from 'axios';
import * as cheerio from 'cheerio';
import { COMPANY_LINKS } from './constants.js';

async function fetchCompanies() {
    const companies = [];
    for (const [name, url] of Object.entries(COMPANY_LINKS)) {
        companies.push({ name, url });
    }
    return companies;
}

async function scrapeJobOpenings() {
    const jobOpenings = [];
    const companies = await fetchCompanies();

    for (const company of companies) {
        try {
            const response = await axios.get(company.url);
            const $ = cheerio.load(response.data);
            // Assuming job openings are listed in a specific HTML structure
            $('a.job-link').each((index, element) => {
                const jobTitle = $(element).text();
                const jobUrl = $(element).attr('href');
                jobOpenings.push({ company: company.name, title: jobTitle, url: jobUrl });
            });
        } catch (error) {
            console.error(`Error scraping ${company.name}:`, error.message);
        }
    }
    return jobOpenings;
}

export {
    fetchCompanies,
    scrapeJobOpenings
};