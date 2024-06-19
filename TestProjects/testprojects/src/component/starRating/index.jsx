import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export default function StarRating({ noOfStars = 5 }) {
    const [ratings, setRatings] = useState(0);
    const [hover, setHover] = useState(0);


    function handleClickEvent(index) {
        console.log(index);
        setRatings(index);
    }

    function handleMouseMove(index) {
        console.log(index);
        setHover(index);
    }

    function handleMouseLeave() {
        console.log(index);
        setHover(ratings);
    }


    return (
        <>
            <div className="star-rating-container">
                {

                    [...Array(noOfStars)].map((_, index) => {
                        index += 1;
                        return (
                            <FaStar
                                key={index}
                                className={index <= (ratings || hover) ? 'active' : 'inactive'}
                                onClick={() => handleClickEvent(index)}
                                onMouseMove={() => handleMouseMove(index)}
                                onMouseLeave={() => handleMouseLeave()}
                            />
                        )
                    })
                }

            </div>
        </>
    )
}