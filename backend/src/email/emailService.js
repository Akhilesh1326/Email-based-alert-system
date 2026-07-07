class EmailService {
    constructor(transporter) {
        this.transporter = transporter;
    }

    async sendJobAlert(recipientEmail, jobDetails) {
        const { title, company, link } = jobDetails;
        const mailOptions = {
            from: 'your-email@example.com',
            to: recipientEmail,
            subject: `New Job Alert: ${title} at ${company}`,
            text: `Hello,\n\nWe found a new job opening that might interest you:\n\nTitle: ${title}\nCompany: ${company}\nLink: ${link}\n\nBest regards,\nYour Job Alert System`
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`Email sent to ${recipientEmail}`);
        } catch (error) {
            console.error(`Error sending email to ${recipientEmail}:`, error);
        }
    }
}

export default EmailService;