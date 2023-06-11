import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";
import star from '../../../../public/assets/icons/star.svg'
import Image from "next/image";


const MarqueeSection = () => {

    return (
        <div className="marqueeBox">
            <Marquee>
                {/* <span> */}
                    <Image src={star} alt="star icon" />
                    <p>
                        PARKING ENFORCEMENT
                    </p>                    
                    <Image src={star} alt="star icon" />
                    <p>
                        PARKING ENFORCEMENT
                    </p>
                    <Image src={star} alt="star icon" />
                    <p>
                        PARKING ENFORCEMENT
                    </p>
                {/* </span> */}
            </Marquee>
        </div>
    )
}

export default MarqueeSection;