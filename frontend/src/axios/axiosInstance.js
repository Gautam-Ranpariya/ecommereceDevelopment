import axios from 'axios';

// Create an instance
const Instance = axios.create({
    baseURL: 'http://192.168.0.123:5000/api/', // Base URL for all requests
    timeout: 2000, // Timeout in milliseconds
    headers: {
        'Content-Type': 'application/json', // Default headers for all requests
        'Authorization': 'Bearer <your_token_here>'
    },
});


export default Instance;

