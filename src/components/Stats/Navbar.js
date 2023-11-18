import React from 'react';

import insta_icon from "../../assets/instagram.svg";
import github_icon from "../../assets/github.svg";
import linkedin_icon from "../../assets/linkedin.svg";
import logout_icon from "../../assets/log-out.png";
import profile_icon from "../../assets/profile.png";
import add_icon from "../../assets/plus.png";


const Navbar = (props) => {
    return (
        <div className={props.className}>
            <ul className="">
                <li><a href="https://www.github.com/duisternis/ToDo-List/" target="_blank" rel="noreferrer"><img draggable="false" src={github_icon} alt="Github" className="w-10 m-3 cursor-pointer" /></a></li>
                <li><a href="https://www.instagram.com/not.vrnn/" target="_blank" rel="noreferrer"><img draggable="false" src={insta_icon} alt="Instagram" className="w-10 m-3" /></a></li>
                <li><a href="https://www.linkedin.com/in/varnan-matela/" target="_blank" rel="noreferrer"><img draggable="false" src={linkedin_icon} alt="LinkedIn" className="w-10 m-3" /></a></li>

                <li><img draggable="false" src={add_icon} alt="Add" className="w-10 my-8 -translate-x-5 scale-[2] bg-[#91CAFF21] rounded-full cursor-pointer" /></li>

                <li><img draggable="false" src={profile_icon} alt="Profile" className="w-10 m-3" /></li>
                <li><img draggable="false" src={logout_icon} alt="Logout" className="w-10 m-3 cursor-pointer" /></li>
            </ul>
        </div>
    );

};

export default Navbar;