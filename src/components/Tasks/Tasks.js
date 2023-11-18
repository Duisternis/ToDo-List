import React from 'react';
import { motion, useAnimation } from 'framer-motion';

import correct_icon from "../../assets/correct-icon.svg";
import save_icon from "../../assets/save-icon.svg";
import close_icon from "../../assets/close-icon.svg";
import start_icon from "../../assets/rocket.png";
import end_icon from "../../assets/end-point.png";

const Tasks = () => {

    const dateRevealLeft = useAnimation();
    const dateRevealRight = useAnimation();

    const handleHoverStart = () => {
        dateRevealLeft.set({ rotate: -90 })
        dateRevealRight.set({ rotate: +90 })

        dateRevealLeft.start({ x: -60 })
        dateRevealRight.start({ x: 60 })
    }

    const handleHoverEnd = () => {
        dateRevealLeft.start({ x: 0 })
        dateRevealRight.start({ x: 0 })
    }


    return (
        <motion.div className="bg-cblue-dark text-white flex items-center rounded-lg p-3 m-4 relative" onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd}>


            {/* Dates Due and Issue */}
            <motion.div className="absolute -rotate-90 text-xs text-center bg-[#00FFF0] text-cblue-dark p-3 w-34 left-0 rounded-t-lg -z-10" animate={dateRevealLeft}>
                <div className="relative font-semibold">
                    <img src={start_icon} alt="Start Icon" className="w-6 absolute rotate-90 -right-10 -top-1" /> 12-07-2021
                </div>
            </motion.div>

            <motion.div className="absolute rotate-90 text-xs text-center bg-[#00FFF0] text-cblue-dark p-3 w-34 right-0 rounded-t-lg -z-10" animate={dateRevealRight}>
                <div className="relative font-semibold">
                    <img src={end_icon} alt="End Icon" className="w-6 absolute -rotate-90 -left-10 -top-0.5" /> 21-07-2021
                </div>
            </motion.div>


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
            <div className="h-fit z-10">
                {/* Features */}
                <div className="flex justify-center items-center">
                    <div>
                        <img src={correct_icon} alt="correct-icon" draggable="false" className="cursor-pointer mx-2 w-4" />
                        <img src={close_icon} alt="close icon" draggable="false" className="cursor-pointer mx-2 py-4 w-4" />
                        <img src={save_icon} alt="save-icon" draggable="false" className="cursor-pointer mx-2 w-4" />
                    </div>
                </div>
            </div>
            <div className="ml-3 w-[85%]">
                {/* Content */}
                <div className="font-montez text-5xl m-2">
                    Learn React
                </div>
                <div className="font-mohave text-xs m-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet conm ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet conm ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet conm ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet conm ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet con
                </div>
            </div>
        </motion.div>
    );
};

export default Tasks;