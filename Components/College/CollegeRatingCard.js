import React from 'react'
import Image from 'next/image';
import personDefaultIcon from '../Common/Images'

const CollegeRatingCard = () => {
    return(
        <div>
            {/* <Image
                src={personDefaultIcon}
                alt="Picture of the author"
                width={33}
                height={33}
            /> */}
            <img 
            src={personDefaultIcon}
            alt="Person Icon"
            height="33px"
            width="33px"
            />
            <p>CollegeRatingCard</p>
        </div>
    )
}

export default CollegeRatingCard;