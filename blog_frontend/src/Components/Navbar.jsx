
// import { useEffect, useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);

//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""

//     })


//     const hendalChange = (e) => {
//         setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     }


//     const handalSubmit = (e) => {

//         e.preventDefault();
//         localStorage.setItem("loginData", JSON.stringify(formData));
//         console.log(formData);
//         setFormData({
//             email: "",
//             password: ""
//         });


//         setIsPopupOpen(false);




//     }


//     useEffect(() => {
//         if (isPopupOpen) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "";
//         }

//         // Cleanup in case component unmounts
//         return () => {
//             document.body.style.overflow = "";
//         };
//     }, [isPopupOpen]);



//     return (
//         <>
//             <nav>
//                 <div className="main_title">
//                     <img src="./public/icons/logo.svg" alt="Skill Will Win logo" />
//                 </div>

//                 <div className="login_button">
//                     <button onClick={() => setIsPopupOpen(true)}>Login</button>
//                 </div>
//             </nav>

//             {/* Popup */}
//             {isPopupOpen && (
//                 <form className="popup_overlay" onSubmit={handalSubmit}>
//                     <div className="popup">


//                         <div className="login_heading_main">
//                             <div className="heading_title">
//                                 <p>Login into Your Account</p>
//                             </div>

//                             <div className="close_icon" onClick={() => setIsPopupOpen(false)}>
//                                 <img src="./public/icons/x-close.svg" alt="" />
//                             </div>
//                         </div>

//                         <p className="info">Please enter your account details</p>
//                         <label className="label_for_email">Email Address</label>

//                         <div className="input_email_main">

//                             <div className="email_icon">
//                                 <img src="./public/icons/email_icon.svg" alt="" />
//                             </div>

//                             <div className="input_type_email">
//                                 <input type="email" placeholder="Enter email address..." name="email" onChange={hendalChange} value={formData.email} />

//                             </div>

//                         </div>

//                         <label className="label_for_email">Password</label>

//                         <div className="input_email_main">

//                             <div className="email_icon">
//                                 <img src="./public/icons/password_icon.svg" alt="" />
//                             </div>

//                             <div className="input_type_email">
//                                 <input type={showPassword ? "text" : "password"} placeholder="Enter password..." name="password" onChange={hendalChange} value={formData.password} />

//                             </div>

//                             <div className="show_password_icon" onClick={() => setShowPassword((prev) => !prev)}>

//                                 <img
//                                     src={
//                                         showPassword
//                                             ? "./public/icons/showPassword_icon.svg"
//                                             : "./public/icons/hide_Password.svg"
//                                     }

//                                     alt="Toggle password visibility"
//                                 />

//                             </div>

//                         </div>


//                         <div className="login_button_form">
//                             <button type="submit" >Login</button>

//                         </div>


//                         <div className="reset_password">

//                             <p>Forgot Password?<a href="#"> Reset</a></p>
//                         </div>
//                     </div>
//                 </form>
//             )}
//         </>
//     );
// };


// logi for droop down



{/* <div className="dropdown">

    <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img src="/icons/school_icon.svg" alt="" className="dropdown-icon" />
        <span>School Name</span>
        <span className="arrow">{isOpen ? "▲" : "▼"}</span>
    </button>

    {isOpen && (
        <div className="dropdown-menu">
            <p className="dropdown-item">Change Password</p>
            <p className="dropdown-item logout" onClick={handalLogout}>
                Logout
            </p>
        </div>
    )}
</div> */}


// export default Navbar;




import { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const nav = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    // Check if user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Load data from localStorage on mount
    useEffect(() => {
        const savedData = localStorage.getItem("loginData");
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            setFormData(parsedData); // set state with localStorage values
            setIsLoggedIn(true); // mark as logged in
        }
    }, []);

    const hendalChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handalSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("loginData", JSON.stringify(formData));
        console.log(formData);
        setFormData({
            email: "",
            password: ""
        });
        setIsPopupOpen(false);
        setIsLoggedIn(true); // hide login button after submit
    };

    const handalLogout = () => {
        localStorage.removeItem("loginData"); // clear localStorage
        setIsLoggedIn(false); // show login button again
        setFormData({ email: "", password: "" });  // reset form
        nav("/");
    }

    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isPopupOpen]);

    return (
        <>
            <header>
                <nav>
                    <div className="main_title" onClick={()=>{nav("/")}}>
                        <img src="./public/icons/logo.svg" alt="Skill Will Win logo" />
                    </div>

                    {/* Hide login button if already logged in */}

                    {isLoggedIn ? (
                        // <button className="navbar_login_button" onClick={() => { handalLogout() }}> Logout
                        // </button>

                        <div className="dropdown_main" onClick={() => setIsOpen(!isOpen)}>

                            <div className="flex_box">

                                <div className="school_icon_dropdown">
                                    <img src="./public/icons/navbar_school_icon.svg" alt="" />
                                </div>

                                <div className="navbar_school_name_main">
                                    <p className="navbar_school_name">Schooi Name</p>
                                </div>

                                <div className="dropdown_icon">
                                    {isOpen ? (

                                        <img src="./public/icons/dropdown_up_icon.svg" alt="" />
                                    ) : (
                                        <img src="./public/icons/dropdown_down_icon.svg" alt="" />
                                    )}

                                </div>

                            </div>



                            {isOpen && (
                                <div className="dropdown-menu">

                                    <div className="item">
                                        <p className="dropdown_change_password">Change Passwrod</p>
                                        <p className="dropdown_logout_password" onClick={handalLogout}>Logout</p>

                                    </div>


                                </div>
                            )}










                        </div>

                    ) : (
                        <button className="navbar_login_button" onClick={() => setIsPopupOpen(true)}>Login</button>
                    )}

                </nav>
            </header>


            {/* Popup */}
            {isPopupOpen && (
                <form className="popup_overlay" onSubmit={handalSubmit}>
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
                                <input
                                    type="email"
                                    placeholder="Enter email address..."
                                    name="email"
                                    onChange={hendalChange}
                                    value={formData.email}
                                />
                            </div>
                        </div>

                        <label className="label_for_email">Password</label>

                        <div className="input_email_main">
                            <div className="email_icon">
                                <img src="./public/icons/password_icon.svg" alt="" />
                            </div>
                            <div className="input_type_email">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password..."
                                    name="password"
                                    onChange={hendalChange}
                                    value={formData.password}
                                />
                            </div>

                            <div
                                className="show_password_icon"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                <img
                                    src={
                                        showPassword
                                            ? "./public/icons/showPassword_icon.svg"
                                            : "./public/icons/hide_Password.svg"
                                    }
                                    alt="Toggle password visibility"
                                />
                            </div>
                        </div>

                        <div className="login_button_form">
                            <button type="submit">Login</button>
                        </div>

                        <div className="reset_password">
                            <p>
                                Forgot Password?<a href="#"> Reset</a>
                            </p>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default Navbar;









