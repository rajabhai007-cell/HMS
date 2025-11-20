import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";





import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Trusted from "./components/Trusted";
import HeroMid from "./components/HeroMid";
import AfterHero from "./components/AfterHero";
import AchieveSection from "./components/AchieveSection";
import Review from "./components/Review";
import DoctorInfo from "./components/DoctorInfo";
import Fuel from "./components/Fuel";
import StatsStrip from "./components/StatsStrip";



//scroll button
import WhatsApp from "./scroll/WhatsApp";
import Chat from "./scroll/Chat";



import Navbar from "./Nav/Navbar";
import Hms from "./Nav/products/Hms";
import Lms from "./Nav/products/Lms";
import About from "./Nav/company/About";
import Careers from "./Nav/company/Careers";
import Partner from "./Nav/company/Partner";
import Well from "./Nav/customer/Well";
import Success from "./Nav/customer/Success";
import Referral from "./Nav/customer/Referral";

import Aasandha from "./Nav/Integration/Aasandha";
import Abdm from "./Nav/Integration/Abdm";
import Cdss from "./Nav/Integration/Cdss";
import External from "./Nav/Integration/External";
import Machine from "./Nav/Integration/Machine";


import Blogs from "./Nav/Resources/Blogs";
import Case from "./Nav/Resources/Case";
import Doc from "./Nav/Resources/Doc";



// ✅ Auth Pages
import Signup from "./Nav/Signup";
import Forpass from "./Nav/Forpass"; // Forgot Password page
import UserLogin from "./Nav/UserLogin";
import PatientLogin from "./Nav/PatientLogin";
import BookDemo from "./Nav/BookDemo";
import Contact from "./Nav/Contact";
import Nphies from "./Nav/Integration/Nphies";

/* 🏠 Home Page Layout */
function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Trusted />
      <HeroMid />
      <AfterHero />
      <AchieveSection />
      <Review />
      <DoctorInfo />
      <StatsStrip />
      <Fuel />
      <Footer />
      <WhatsApp />
      <Chat/>
      
    </>
  );
}

/* 🌐 Router Setup */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/user-login",
    element: (
      <>
        <Navbar />
        <UserLogin />
        <Footer />
      </>
    ),
  },
  {
    path: "/patient-login",
    element: (
      <>
        <Navbar />
        <PatientLogin />
        <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <Signup />
        <Footer />
      </>
    ),
  },
  {
    path: "/forpass", // ✅ Add this route
    element: (
      <>
        <Navbar />
        <Forpass />
        <Footer />
      </>
    ),
  },
  {
  path: "/book-demo",
  element: (
    <>
      <Navbar />
      <BookDemo />
      <Footer />
    </>
  ),
},
{
  path: "/hms",
  element: (
    <>
      <Navbar />
      <Hms />
      <Footer />
    </>
  ),
},
{
  path: "/lms",
  element: (
    <>
      <Navbar />
      <Lms />
      <Footer />
    </>
  ),
},
{
  path: "/about",
  element: (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  ),
},
{
  path: "/careers",
  element: (
    <>
      <Navbar />
      <Careers />
      <Footer />
    </>
  ),
},
{
  path: "/contact",
  element: (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  ),
},
{
  path: "/well",
  element: (
    <>
      <Navbar />
      <Well />
      <Footer />
    </>
  ),
},
{
  path: "/referral",
  element: (
    <>
      <Navbar />
      <Referral />
      <Footer />
    </>
  ),
},
{
  path: "/success",
  element: (
    <>
      <Navbar />
      <Success/>
      <Footer />
    </>
  ),
},
{
  path: "/aasandha",
  element: (
    <>
      <Navbar />
      <Aasandha/>
      <Footer />
    </>
  ),
},
{
  path: "/abdm",
  element: (
    <>
      <Navbar />
      <Abdm/>
      <Footer />
    </>
  ),
},
{
  path: "/cdss",
  element: (
    <>
      <Navbar />
      <Cdss/>
      <Footer />
    </>
  ),
},
{
  path: "/external",
  element: (
    <>
      <Navbar />
      <External/>
      <Footer />
    </>
  ),
},
{
  path: "/machine",
  element: (
    <>
      <Navbar />
      <Machine/>
      <Footer />
    </>
  ),
},
{
  path: "/nphies",
  element: (
    <>
      <Navbar />
      <Nphies/>
      <Footer />
    </>
  ),
},
{
  path: "/blogs",
  element: (
    <>
      <Navbar />
      <Blogs/>
      <Footer />
    </>
  ),
},
{
  path: "/case",
  element: (
    <>
      <Navbar />
      <Case/>
      <Footer />
    </>
  ),
},
{
  path: "/doc",
  element: (
    <>
      <Navbar />
      <Doc/>
      <Footer />
    </>
  ),
},
{
  path: "/partner",
  element: (
    <>
      <Navbar />
      <Partner />
      <Footer />
    </>
  ),
},


]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
