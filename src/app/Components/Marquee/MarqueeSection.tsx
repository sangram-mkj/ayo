import React from "react";
import "./Marquee.css";
import Marquee from "react-fast-marquee";
import star from '../../../../public/assets/icons/star.svg'
import Image from "next/image";


const MarqueeSection = () => {

    return (
        // <div>
            <Marquee className="marqueeBox">
                {/* <span> */}
                    <Image src={star} alt="star icon" />
                    <p className="marqueeText">
                        &nbsp; &nbsp; PARKING ENFORCEMENT &nbsp; &nbsp;
                    </p>                    
                    <Image src={star} alt="star icon" />
                    <p className="marqueeText">
                    &nbsp; &nbsp; PARKING ENFORCEMENT &nbsp; &nbsp;
                    </p>
                    <Image src={star} alt="star icon" />
                    <p className="marqueeText">
                    &nbsp; &nbsp; PARKING ENFORCEMENT &nbsp; &nbsp;
                    </p>
                    <Image src={star} alt="star icon" />
                    <p className="marqueeText">
                    &nbsp; &nbsp; PARKING ENFORCEMENT &nbsp; &nbsp;
                    </p>
                    <Image src={star} alt="star icon" />
                    <p className="marqueeText">
                    &nbsp; &nbsp; PARKING ENFORCEMENT &nbsp; &nbsp;
                    </p>
                {/* </span> */}
            </Marquee>
        // </div>
    )
}

export default MarqueeSection;