import {FC} from "react";
import StarIcon from "../assets/images/star.png";
import {start} from "node:repl";

interface IResBox {
    image: string;
    name: string;
    rating: number;
    description: string;
}

const RestaurantRating : FC<{rating : number}> = ({rating}) =>{
  //   if the rating is x.5, half star should be rendered with different logic than an integer rating
  return(
    <div className="Restaurant-rating">
        {
            Number.isInteger(rating) ?
                <>
                    {

                        Array.from({length:rating}, (_, index)=>index+1).map(element =>{
                            return <div className={"Star-icon-wrapper"}>
                                <img src={StarIcon}
                                     alt={"A star icon representing the rating. This is star number" + element}/>
                            </div>
                        })
                    }
                    {
                        rating < 5 && Array.from({length: 5 - rating}, (_, index) => index+1).map(element =>{
                            return(
                                <div className={"Gray-star-icon Star-icon-wrapper"}>
                                    <img src={StarIcon} alt="This is a gray star icon"/>
                                </div>
                            );
                        })
                    }
                </>:
                <>
                    {
                        Array.from({length: Math.floor(rating)}, (_, index) => index + 1).map((element, index) => {
                            return <div className={"Star-icon-wrapper"}>
                                <img src={StarIcon}
                                     alt={"A star icon representing the rating. This is star number" + element}/>
                            </div>
                        })
                    }
                    <div className="Star-icon-wrapper" style={{overflow: "clip", width: "12.5px"}}>
                        <img src={StarIcon} alt="Half star gold" style={{width: "25px"}}/>
                    </div>
                    <div className="Star-icon-wrapper Gray-star-icon" style={{overflow: "clip", width: "12.5px", transform: "scaleX(-1)", marginLeft: "-2px"}}>
                        <img src={StarIcon} alt="Half star gold" style={{width: "25px"}}/>
                    </div>
                    {
                        Array.from({length: (5 - Math.floor(rating) - 1)}, (_, index) => index + 1).map(element => {
                            return (
                                <div className={"Gray-star-icon Star-icon-wrapper"}>
                                    <img src={StarIcon} alt="This is a gray star icon"/>
                                </div>
                            );
                        })
                    }
                </>
        }
    </div>
  );
};

const RestaurantBox: FC<IResBox> = (props: IResBox) => {
    return (
        <div className="Restaurant-box">
            <div className="Restaurant-image">
                <img src={props.image} alt={`An image of the following restaurant: ${props.name}`}/>
            </div>
            <div className="Restaurant-header">
                <h3 className="Restaurant-name">{props.name}</h3>
                <RestaurantRating rating={props.rating} />

            </div>
            <div className="Restaurant-description">
                <p>{props.description}</p>
            </div>
            <button>View restaurant »</button>
        </div>
    );
};

export default RestaurantBox;