# Email Alert System - Backend

## Overview
This project is an email-based alert system that scrapes career links for IT roles from Pune-based companies. The backend is built using Express.js and includes a scraper that dynamically fetches company names and their career pages, stores these links, and implements an email alerting system.

## Project Structure
- **src/app.js**: Entry point of the backend application. Initializes the Express app, sets up middleware, and defines routes.
- **src/scraper/scraper.js**: Contains logic for scraping Pune-based IT companies and their career pages.
- **src/scraper/constants.js**: Exports a constant object storing company names and their career page URLs.
- **src/email/emailService.js**: Contains methods for sending email alerts.
- **src/routes/index.js**: Sets up the API routes for the backend application.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd email-alert-system/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root of the backend directory and add the necessary configurations for your email service and any other required settings.

4. Run the application:
   ```
   npm start
   ```

## API Usage
- **GET /api/scrape**: Triggers the scraper to fetch job openings from the defined company career pages.
- **POST /api/alert**: Sends an email alert with the latest job openings to the specified user.

## Email Alert System
The email alert system runs periodically to check for new job openings and sends alerts to users based on their preferences.

## Scraper Functionality
The scraper fetches company names and their career page links, then scrapes job openings from those pages. The links are stored in a constants file for easy management.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.