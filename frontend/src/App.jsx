import React, { useEffect, useState } from 'react';
import JobList from './components/JobList';
import { getJobOpenings } from './services/apiService';

function App() {
    const [jobOpenings, setJobOpenings] = useState([]);

    useEffect(() => {
        const fetchJobOpenings = async () => {
            const openings = await getJobOpenings();
            setJobOpenings(openings);
        };

        fetchJobOpenings();
    }, []);

    return (
        <div className="App">
            <h1>Job Openings in Pune IT Companies</h1>
            <JobList jobOpenings={jobOpenings} />
        </div>
    );
}

export default App;