import React from 'react'
import "./Home.css"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
    return (


        <>
            <div className='warapper'>
                <Navbar />


                <div className="catagory_main_container"></div>

                <div className="helpline_main_container"></div>

                <div className="partner_logo_main">
                    <div className="test"></div>
                    <div className="test"></div>
                    <div className="test"></div>
                </div>

                <div className="success_story_main"></div>

                <div className="contect_details_main"></div>

         <Footer/>
            </div>


        </>
    )
}

export default Home