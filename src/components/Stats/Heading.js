import { React, useState, useEffect } from 'react';

const Heading = () => {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        });

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex text-white font-montez items-center my-12 scale-[1.5] w-fit m-auto">

            <div className="text-8xl translate-y-1.5" >
                {currentDate.getDate()}
            </div>
            <div className="flex flex-col text-md">
                <div>{currentDate.toLocaleString('default', { month: 'long' })}</div>
                <div>{currentDate.getFullYear()}</div>
                <div className="w-[70px]">{currentDate.toLocaleTimeString('en-US', {
                    hour12: false,
                })}</div>
            </div>
            <div className="text-8xl translate-y-1.5">
                T
            </div>
            <div className="text-3xl">
                oDo <br />
                List
            </div>





        </div >
    );
}

export default Heading; 