// profile/src/components/Navbar.tsx
import React from 'react';
import { useProfile } from '../context/ProfileContext';

const Navbar: React.FC = () => {
    const { profile } = useProfile();

    return (
        <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
            <h1 className="text-lg font-bold">PROFILE</h1>
            {profile ? (
                <div>
                    <span>{profile.name}</span>
                </div>
            ): (
                <div>
                    <span>Guest</span>
                </div>
            )}
        </nav>
    );
};

export default Navbar;