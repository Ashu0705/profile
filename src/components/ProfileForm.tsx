import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import {profiles, getProfile} from './services';
import Navbar from './Navbar';

const ProfileForm = () => {
    const {setProfile} = useProfile();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState<string | null>(null); 
    const navigate = useNavigate();
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) {
            getProfile(id).then((profileData: any) => {
                setName(profileData.name);
                setEmail(profileData.email);
                setAge(profileData.age ? String(profileData.age) : ''); 
            }).catch((error) => {
                console.error("Error fetching profile:", error);
                setError("Failed to fetch profile data. Please try again.");
            });
        }
    }, [id]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const profileData = {
            name,
            email,
            age: age ? Number(age) : undefined
        };
        localStorage.setItem('profile', JSON.stringify(profileData));
        setProfile(profileData);
        let createdProfile;
        try{
        if (id) {
            createdProfile = await profiles({ ...profileData, id }); 
            window.alert("Profile updated successfully!"); 
        }else{
            createdProfile = await profiles(profileData);
            window.alert("Profile created successfully!"); 
        }        
        
        if (createdProfile && 'id' in createdProfile) {
            navigate(`/profile/${createdProfile.id}`); 
        } else {
            console.error("Created profile does not have an ID:", createdProfile);
            setError("An error occurred while processing your request. Please try again.");
        }
    } catch(error){
        setError("An error occurred while processing your request. Please try again.");
    }
    }

   
    return (
        <div className='bg-gray-500 min-h-screen'>
            <Navbar />
        <div className="flex items-center justify-center pt-16"> 
            <form onSubmit={handleSubmit} className="max-w-md w-full p-4 border rounded shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-4">{id?'Update Profile':'Create Profile'}</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name<span className="text-red-500">*</span></label>
                <input type='text'
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                minLength={3}
                placeholder='Enter Name'
                required
                className="w-full p-2 mb-4 border rounded"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
            <input type='email'
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder='Enter Email'
                required 
                className="w-full p-2 mb-4 border rounded"
                />
                </div>
                <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Age</label>
            <input type='number'
                value={age}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(e.target.value)}
                placeholder='Enter Age' 
                className="w-full p-2 mb-4 border rounded"
                />
                </div>
            <button type='submit' className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {id? 'Update':'Submit'}
            </button>
        </form>
        </div>
        </div>
    )
}

export default ProfileForm;
