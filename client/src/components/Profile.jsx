import  React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    let navigate = useNavigate()

    // States for username and email
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)


    // fetches data from the server with credentials and retrieves username and email
    useEffect(() => {
        fetch('http://localhost:5050/profile', {
            credentials: 'include', // Ensures cookies are sent with the request
        })
        .then(res => {
            if(res.redirected) {
                throw new Error('Redirected');
            }
            if(!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            setUserName(data.userName)
            setEmail(data.email)
            setLoading(false) // fetching data completed
        })
        .catch(error => {
            setError(error.message);
            console.error('Error fetching profile data:', error);
            navigate('/signin')
        });
    }, [navigate])

    // Redirect to signin if not authenticated
    useEffect(() => {
        if (!loading && (email === '' || userName === '')) {
            navigate('/signin');
        }
    }, [loading, email, userName, navigate]);

    // Logout
    async function handleLogout() {
        await fetch('http://localhost:5050/logout', {
            method: 'GET',
            credentials: 'include', // Include credentials to handle cookies
        })
        .then(res => {
            navigate('/') // Redirect to home after successful logout
        })
        .catch(err => console.error(err));
    }

    // Error messages
    if(error) {
        return <div>Error: {error}</div>;
    }

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col justify-center items-center h-full gap-5'>
            <div>
                Welcome {userName}!
            </div>
            <div>
                <a onClick={handleLogout} className='p-3 rounded-2xl bg-red-600'>Logout</a>
            </div>
        </div>
    )
}