import React from 'react';

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-500">
            <div className="max-w-md w-full p-4 border rounded shadow-md bg-white text-center">
                <h2 className="text-2xl font-bold mb-4">404 Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <p>Please check the URL or return to the Profile page.</p>
            </div>
        </div>
    );
};

export default NotFound;