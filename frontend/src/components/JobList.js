import React, { useEffect, useState } from 'react';
import { getJobOpenings } from '../services/apiService';

const JobList = () => {
    const [jobOpenings, setJobOpenings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobOpenings = async () => {
            try {
                const data = await getJobOpenings();
                setJobOpenings(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobOpenings();
    }, []);

    if (loading) {
        return <div>Loading job openings...</div>;
    }

    if (error) {
        return <div>Error fetching job openings: {error}</div>;
    }

    return (
        <div>
            <h2>Job Openings</h2>
            <ul>
                {jobOpenings.map((job) => (
                    <li key={job.id}>
                        <a href={job.link} target="_blank" rel="noopener noreferrer">
                            {job.title} at {job.company}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;