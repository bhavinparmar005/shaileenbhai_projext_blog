
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    

    return (
        <>
            <nav>
                <div className="main_title">
                    <img src="./public/icons/logo.svg" alt="Skill Will Win logo" />
                </div>

                <div className="login_button">
                    <button onClick={() => setIsPopupOpen(true)}>Login</button>
                </div>
            </nav>

            {/* Popup */}
            {isPopupOpen && (
                <form className="popup_overlay">
                    <div className="popup">


                        <div className="login_heading_main">
                            <div className="heading_title">
                                <p>Login into Your Account</p>
                            </div>

                            <div className="close_icon" onClick={() => setIsPopupOpen(false)}>
                                <img src="./public/icons/x-close.svg" alt="" />
                            </div>
                        </div>

                        <p className="info">Please enter your account details</p>
                        <label className="label_for_email">Email Address</label>

                        <div className="input_email_main">

                            <div className="email_icon">
                                <img src="./public/icons/email_icon.svg" alt="" />
                            </div>

                            <div className="input_type_email">
                                <input type="email" placeholder="Enter email address..." />

                            </div>

                        </div>

                        <label className="label_for_email">Password</label>

                        <div className="input_email_main">

                            <div className="email_icon">
                                <img src="./public/icons/password_icon.svg" alt="" />
                            </div>

                            <div className="input_type_email">
                                <input type={showPassword ? "text" : "password"} placeholder="Enter password..." />

                            </div>

                            <div className="show_password_icon" onClick={() => setShowPassword((prev) => !prev)}>

                                   <img
                                    src={
                                        showPassword
                                            ? "./public/icons/hide_Password.svg"
                                            : "./public/icons/showPassword_icon.svg"
                                    }
                                    alt="Toggle password visibility"
                                />
                                {/* <img src="./public/icons/showPassword_icon.svg" alt="" /> */}
                            </div>

                        </div>


                        <div className="login_button_form">
                            <button>Login</button>

                        </div>


                        <div className="reset_password">
                             
                            <p>Forgot Password?<a href="#"> Reset</a></p>
                        </div>



                    </div>
                </form>
            )}
        </>
    );
};

export default Navbar;

{/* <button
    className="close_btn"
    onClick={() => setIsPopupOpen(false)}
>
    ×
</button> */}




