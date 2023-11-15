import React from 'react';

import correct_icon from "../../assets/correct-icon.svg";
import save_icon from "../../assets/save-icon.svg";
import close_icon from "../../assets/close-icon.svg";

const Tasks = () => {
    return (
        <div className="bg-cblue-dark text-white flex items-center w-[500px] rounded-lg p-3 relative">
            <div className="flex absolute top-0 right-0 m-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                    <g filter="url(#filter0_bd_2_86)">
                        <circle cx="20.5" cy="20.5" r="5.5" fill="#00FFF0" />
                    </g>
                    <defs>
                        <filter id="filter0_bd_2_86" x="0" y="0" width="41" height="41" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_86" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="effect2_dropShadow_2_86" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.941176 0 0 0 0.8 0" />
                            <feBlend mode="normal" in2="effect1_backgroundBlur_2_86" result="effect2_dropShadow_2_86" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_2_86" result="shape" />
                        </filter>
                    </defs>
                </svg>
                <div className="font-ellen text-lg cursor-pointer pt-1">
                    in progress
                </div>
            </div>
            <div className="basis-1/12 h-fit">
                {/* Features */}
                <div className="flex justify-center items-center">
                    <div>
                        <img src={correct_icon} alt="correct-icon" className="cursor-pointer mx-2" />
                        <img src={close_icon} alt="close icon" className="cursor-pointer mx-2 py-4" />
                        <img src={save_icon} alt="save-icon" className="cursor-pointer mx-2" />
                    </div>
                </div>
            </div>
            <div className="pl-3">
                {/* Content */}
                <div className="font-montez text-5xl p-2">
                    Learn React
                </div>
                <div className="font-mohave text-xs p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit
                </div>
            </div>
        </div>
    );
};

export default Tasks;