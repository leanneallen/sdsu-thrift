import * as React from 'react';
import '../App.css';
import Profile from "../components/Profile"
import Header from "../components/Header"

function ProfilePage() {
  return (
    <>
    <Header/>  
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Profile />
    </div>
    </>
  
  );
}

export default ProfilePage;