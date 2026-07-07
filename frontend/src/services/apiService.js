import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const getJobOpenings = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/job-openings`);
        return response.data;
    } catch (error) {
        console.error('Error fetching job openings:', error);
        throw error;
    }
};