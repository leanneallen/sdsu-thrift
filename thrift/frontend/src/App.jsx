import * as React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/Home.jsx'
import SignUpPage from './pages/SignUp.jsx'
import LoginPage from './pages/Login.jsx'
import AboutPage from './pages/About.jsx'
import SupportPage from './pages/Support.jsx' 
import ListingPage from './pages/Listings.jsx'
import NoPage from './pages/NoPage.jsx'

import './App.css'
import ApparelPage from './pages/categories/Apparel.jsx'

/*ROUTING PATH TEMPLATE: <Route path="" element={</>} /> */
function App() {
  return (
    <div>
      <ApparelPage />
    </div>
  );
}

// FOR ROUTING
// function App() {
//   return (
//     <>
//         /* <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/Home" element={<HomePage />} />
//           <Route path="/Listings" element={<ListingPage/>} />
//           <Route path="/SignUp" element={<SignUpPage />} />
//           <Route path="/Login" element={<LoginPage />} />
//           <Route path="/About" element={<AboutPage />} />
//           <Route path="/Support" element={<SupportPage/>} />  
//           <Route path="/Apparel" element={<ApparelPage />} />
//           <Route path="*" element={<NoPage />} /> 
//         </Routes> */}
//         </>
//   );
// }

export default App
