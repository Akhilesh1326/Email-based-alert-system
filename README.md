# Email Alert System for IT Roles in Pune

This project is an email-based alert system that scrapes career links for IT roles from Pune-based companies. It consists of a backend built with Express.js, a frontend developed using React.js, and utilizes Supabase for database management.

## Project Structure

```
email-alert-system
├── backend
│   ├── src
│   │   ├── app.js
│   │   ├── scraper
│   │   │   ├── scraper.js
│   │   │   └── constants.js
│   │   ├── email
│   │   │   └── emailService.js
│   │   └── routes
│   │       └── index.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── components
│   │   │   └── JobList.js
│   │   ├── services
│   │   │   └── apiService.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── supabase
│   └── schema.sql
└── README.md
```

## Features

- **Scraper**: Dynamically fetches company names and their career pages, scraping job openings from those pages.
- **Email Alerts**: Sends email notifications to users when new job openings are found.
- **Frontend**: A React application that displays job openings fetched from the backend API.

## Getting Started

### Prerequisites

- Node.js
- npm
- Supabase account

### Backend Setup

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

### Database Setup

1. Use the `supabase/schema.sql` file to set up your Supabase database.
2. Configure your Supabase credentials in the backend.

## Usage

- The scraper runs periodically to check for job openings and sends email alerts to subscribed users.
- Users can view job openings through the React frontend.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.