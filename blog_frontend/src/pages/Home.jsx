import React from 'react'
import "./Home.css"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    let nav = useNavigate();
    return (


        <>
            <div className='warapper'>
                <Navbar />


                <div className="catagory_main_container">
                    <div className="catagoty_main_title">
                        <p className='catagory_title'>“In Sight In Mind - જે નજરમાં એ મગજમાં”</p>
                        <p className='catagory_subtitle'>થિયરીને કેન્દ્રમાં રાખી ઉપરોકત પ્રત્યેક વિષય સલગ્ન 12, કુલ 48 પોસ્ટર મટિરિયલ દ્વારા દર અઠવાડિયે એક નવા હકારાત્મક વિચાર -ઉપયોગી માહિતી દ્વારા વિદ્યાર્થીઓને એમ્પાવર્ડ કરવાનો નમ્ર પ્રયાસ છે.</p>
                    </div>

                    <div className="catagory_filds_main">

                        <div className="catagory_filds_left_side">
                            <div className="catagory_filds_left_side1" onClick={() => nav("/bloglisting", {
                                state: {
                                    bgColor: "#f8efe4", // background color
                                    title: "Skill Will Win",
                                    subTitle: "એજ્યુકેશનલ સ્કિલ ડેવલોપમેન્ટ કોન્સેપ્ટ. (ધો - 8 to 12)",
                                    titleColor: "#AB541F"
                                }
                            })}
                            >
                                <div className="catagory_filds_left_side1_details_main">
                                    <div className="catagory_filds_left_side1_heading">
                                        <p>Skill Will Win</p>
                                    </div>
                                    <div className="catagory_filds_left_side1_icon">
                                        <img src="./public/icons/left_1.svg" alt="" />
                                    </div>
                                </div>
                                <p className='catagory_filds_left_side1_sub_heading'>
                                    એજ્યુકેશનલ સ્કિલ ડેવલોપમેન્ટ કોન્સેપ્ટ. (ધો - 8 to 12)
                                </p>
                            </div>
                            <div className="catagory_filds_left_side2" onClick={() => nav("/bloglisting", {
                                state: {
                                    bgColor: "#ebf1ec", // background color
                                    title: "બહાદુર બેટી",
                                    subTitle: "સ્વબચાવ, સલામતી, સજાગતા સલગ્ન માહિતી માર્ગદર્શન મોટિવેશન.",
                                    titleColor: "#086885"
                                }
                            })}>

                                <div className="catagory_filds_left_side1_details_main"
                                >
                                    <div className="catagory_filds_left_side2_heading">
                                        <p>બહાદુર બેટી</p>
                                    </div>
                                    <div className="catagory_filds_left_side1_icon">
                                        <img src="./public/icons/left_2.svg" alt="" />
                                    </div>
                                </div>
                                <p className='catagory_filds_left_side1_sub_heading'>
                                    સ્વબચાવ, સલામતી, સજાગતા સલગ્ન માહિતી માર્ગદર્શન મોટિવેશન.
                                </p>


                            </div>
                            <div className="catagory_filds_left_side3" onClick={() => nav("/bloglisting", {
                                state: {
                                    bgColor: "#f8efe4", // background color
                                    title: "લાઈફ લેશન ફ્રોમ લિજેન્ડ",
                                    subTitle: "એજ્યુકેશનલ સ્કિલ ડેવલોપમેન્ટ કોન્સેપ્ટ. (ધો - 8 to 12)",
                                    titleColor: "#AB541F"
                                }
                            })}>
                                <div className="catagory_filds_left_side1_details_main"

                                >
                                    <div className="catagory_filds_left_side1_heading">
                                        <p>લાઈફ લેશન ફ્રોમ લિજેન્ડ</p>
                                    </div>
                                    <div className="catagory_filds_left_side1_icon">
                                        <img src="./public/icons/left_1.svg" alt="" />
                                    </div>
                                </div>
                                <p className='catagory_filds_left_side1_sub_heading'>
                                    એજ્યુકેશનલ સ્કિલ ડેવલોપમેન્ટ કોન્સેપ્ટ. (ધો - 8 to 12)
                                </p>
                            </div>
                        </div>
                        <div className="catagory_filds_right_side">
                            <div className="catagory_filds_right_side1"
                                onClick={() => nav("/bloglisting", {
                                    state: {
                                        bgColor: "#eef4f3", // background color
                                        title: "મેં ભી ગાંધી",
                                        subTitle: "વર્તણુક બદલાવ (બીહેવીયર ચેન્જ) સલગ્ન કોન્સેપ્ટ.",
                                        titleColor: "#2C7864"
                                    }
                                })}
                            >
                                <div className="catagory_filds_left_side1_details_main">
                                    <div className="catagory_filds_right_side1_heading">
                                        <p>મેં ભી ગાંધી</p>
                                    </div>
                                    <div className="catagory_filds_left_side1_icon">
                                        <img src="./public/icons/right_1.svg" alt="" />
                                    </div>
                                </div>
                                <p className='catagory_filds_left_side1_sub_heading'>
                                    વર્તણુક બદલાવ (બીહેવીયર ચેન્જ) સલગ્ન કોન્સેપ્ટ.
                                </p>

                            </div>
                            <div className="catagory_filds_right_side2"

                                onClick={() => nav("/bloglisting", {
                                    state: {
                                        bgColor: "#fff3e1", // background color
                                        title: "તૈયારી જીત કી",
                                        subTitle: "સ્પોર્ટ્સ - રમતગમત ક્ષેત્રે સફળ કારકિર્દી ઘડતર માટે જરૂરી માહિતી માર્ગદર્શન મોટિવેશન.",
                                        titleColor: "#FF7C00"
                                    }
                                })}
                            >
                                <div className="catagory_filds_left_side1_details_main">
                                    <div className="catagory_filds_right_side2_heading">
                                        <p>તૈયારી જીત કી</p>
                                    </div>
                                    <div className="catagory_filds_left_side1_icon">
                                        <img src="./public/icons/right_2.svg" alt="" />
                                    </div>
                                </div>
                                <p className='catagory_filds_left_side1_sub_heading'>
                                    સ્પોર્ટ્સ - રમતગમત ક્ષેત્રે સફળ કારકિર્દી ઘડતર માટે જરૂરી માહિતી માર્ગદર્શન મોટિવેશન.
                                </p>

                            </div>
                            <div className="catagory_filds_right_side3"
                                onClick={() => nav("/bloglisting", {
                                    state: {
                                        bgColor: "#eef2e9", // background color
                                        title: "એક્ટિવિટી કેલેન્ડર",
                                        subTitle: "વર્તણુક બદલાવ (બીહેવીયર ચેન્જ) સલગ્ન કોન્સેપ્ટ.",
                                        titleColor: "#2C7864"
                                    }
                                })}
                            >
                                <div className="catagory_filds_left_side1_details_main">
                                    <div className="catagory_filds_right_side1_heading">
                                        <p>એક્ટિવિટી કેલેન્ડર</p>
                                    </div>
                                    <div className="catagory_filds_left_side1_icon">
                                        <img src="./public/icons/right_1.svg" alt="" />
                                    </div>
                                </div>
                                <p className='catagory_filds_left_side1_sub_heading'>
                                    વર્તણુક બદલાવ (બીહેવીયર ચેન્જ) સલગ્ન કોન્સેપ્ટ.
                                </p>

                            </div>
                        </div>
                    </div>



                </div>

                <div className="helpline_main_container_wrapper">

                    <div className="helpline_main_containe_main">

                        <div className="helpline_icon_main">
                            <img src="./public/icons/helpline.svg" alt="" />
                        </div>

                        <div className="helpline_number_main">
                            <p>હેલ્પલાઇન નંબર</p>
                            <p className='helpline_number'>70462 53732 / 98255 49400</p>

                        </div>

                    </div>



                </div>
                <div className="partner_logo_main_wrapper">
                    <div className="partner_logo_main">
                        <div className="test"></div>
                        <div className="test"></div>
                        <div className="test"></div>
                    </div>

                </div>


                <div className="success_story_main_wrapper">
                    <div className="success_story_main"></div>
                </div>


                <div className="contect_details_main_wrapper">


                    <div className="contect_details_main"></div>
                </div>


                <Footer />
            </div>


        </>
    )
}

export default Home