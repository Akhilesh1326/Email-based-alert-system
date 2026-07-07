import express from 'express';
import { fetchCompanies, scrapeJobOpenings } from '../scraper/scraper.js';
import { EmailService } from '../email/emailService';

const router = express.Router();
const emailService = new EmailService();

router.post('/scrape', async (req, res) => {
    try {
        const companies = await fetchCompanies();
        const jobOpenings = await scrapeJobOpenings(companies);
        res.status(200).json(jobOpenings);
    } catch (error) {
        res.status(500).json({ message: 'Error scraping job openings', error });
    }
});

router.post('/send-alert', async (req, res) => {
    const { email, jobDetails } = req.body;
    try {
        await emailService.sendJobAlert(email, jobDetails);
        res.status(200).json({ message: 'Job alert sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending job alert', error });
    }
});

export const setRoutes = (app) => {
    app.use('/api', router);
};