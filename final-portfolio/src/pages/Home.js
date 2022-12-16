import React from 'react';
import Navbar from '../Navbar'
import Welcome from '../Welcome'
import './Home.css'
import WorkCardList from '../WorkCardList'
import Personas from '../images/Personas.jpg'
import Redesign from '../images/Redesign.jpg'
import IterativeDesign from '../images/Iterative-Design.jpg'
import CameraGeometry from '../images/Camera-Geometry.jpg'
import { Outlet } from "react-router-dom";
import Footer from '../Footer'

function Home() {
  const data = [
    { name: "Personas & Storyboarding", src: Personas, description: "Investigating how to understand and empathize with users through interviews, empathy maps, and storyboarding.", path: 'personas'},
    { name: "Thai Diner Homepage Redesign", src: Redesign, description: "Redesigning a beloved restaurant's homepage to enhance responsiveness, usability, learnability, and memorability.", path: 'redesign'},
    { name: "Ole Startup Prototype", src: IterativeDesign, description: "Exploring iteration and user testing to develop an existing start-up idea.", path: 'iterative-design'},
    { name: "Camera Geometry", src: CameraGeometry, description: "Constructing point clouds representing 3D images based on 2D points.", path: 'camera-geometry'}
  ]

  return (
    <div>
      <Navbar />
      <Welcome />
      <WorkCardList data={data} />
      <div className="bottom-padding"></div>
      <Footer />
    </div>
  );
}

export default Home;
