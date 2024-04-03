import {FC, useEffect, useState, useMemo} from "react";
import RestaurantBox from "./RestaurantBox";
import Loading from "./Loading";
import Data from "../assets/data/top-rated-restauransts.json";

const FeaturedRestaurants: FC = () => {

    const [restaurantData, setRestaurantData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // setLoading(true);
        // fetch("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants/top-rated")
        //     .then(r => r.json())
        //     .then(r => {
        //         setRestaurantData(r);
        //         setLoading(false);
        //     })
        setRestaurantData(Data);
    }, []);

    const cachedRestaurantData = useMemo<any>(()=> restaurantData, [restaurantData]);

    return (
        <section className="Featured-restaurants">
            <h1 className={"Section-heading"}>Featured restaurants</h1>
            <h2 className={"Section-subheading"}>Discover Unforgettable Dining Destinations</h2>
            {
                loading ? <Loading /> :
                    <div className="Restaurant-boxes">
                        {
                            cachedRestaurantData.map((data: any) => {
                                return (
                                    <RestaurantBox key={data.name+1} name={data.name} description={data.description} image={data.image}
                                                   rating={data.rating}/>
                                );
                            })
                        }
                    </div>
            }

        </section>
    );
};

export default FeaturedRestaurants;