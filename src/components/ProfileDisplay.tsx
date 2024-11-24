import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getProfile, deleteProfile} from './services';
import Navbar from './Navbar';
import { useProfile } from '../context/ProfileContext';



const ProfileDisplay = () => {
    const [profileData, setProfileData] = useState<{ name: string; email: string; age?: number } | null>(null);
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams<{ id: string }>();
    const {setProfile} = useProfile();


    const handleCreateProfile = () => {
        navigate('/profile-form');
    }

    useEffect(()=> {
        const profileDetails =  localStorage.getItem('profile');
        if(profileDetails){
            setProfileData(JSON.parse(profileDetails));
        }else if(id){
             getProfile(id).then((result: any)=>{
                setProfileData(result);
            }).catch((err)=>{
                setError("Failed to load profile");
            })
        }else{
            setError("No Profile exists.Create the profile");
        }
        
    },[id])

    const handleUpdateProfile = () => {
        navigate(`/profile-form/${id}`); 
    }

    const handleDeleteProfile = async () => {
        if (id) {
            const confirmDelete = window.confirm("Are you sure you want to delete this profile permanently?");
            if(confirmDelete){
            try {
                await deleteProfile(id); 
                setProfileData(null); 
                localStorage.removeItem('profile');
                setProfile(null);
                navigate('/profile-form'); 
            } catch (error) {
                setError("Failed to delete profile");
                console.error(error);
            }
        }
        }
    }


    return (
        <div className='bg-gray-500 min-h-screen'>
            <Navbar />
        <div className="flex items-center justify-center pt-32">
        <div className="max-w-2xl w-full p-6 border rounded shadow-md bg-white">
            {error ? (
                <div className="text-red-500 text-center">
                    <p>{error}</p>
                    <button onClick={handleCreateProfile} className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Create Profile
                    </button>
                </div>
            ) : profileData ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-8">Profile Details</h2>
                    <div className="mb-4">
                    <p className="text-lg leading-7"><strong>Name:</strong> {profileData.name}</p>
                    </div>
                    <div className="mb-4">
                    <p className="text-lg leading-7"><strong>Email:</strong> {profileData.email}</p>
                    </div>
                    <div className="mb-8">
                    <p className="text-lg leading-7"><strong>Age:</strong> {profileData.age !== undefined ? profileData.age : 'NA'}</p>
                    </div>
                    <div className="mt-4">
                            <button onClick={handleUpdateProfile} className="mr-8 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
                                Update
                            </button>
                            <button onClick={handleDeleteProfile} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    </div>
    </div>
    );

}

export default ProfileDisplay;