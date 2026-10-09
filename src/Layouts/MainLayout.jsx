
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer"

export default function MainLayout () {
  return (
    <div className= "min-h-screen bg-[#070913] relative">

      <Navbar/>
      <Outlet/>
      

      <Footer/>
      
    </div>
  );
};
