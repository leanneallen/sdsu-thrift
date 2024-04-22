import * as React from 'react';
import '../App.css';
import Settings from "../components/Settings"
import Header from "../components/Header"

function SettingsPage() {
  return (
    <>
    <Header/>  
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Settings />
    </div>
    </>
  
  );
}

export default SettingsPage;