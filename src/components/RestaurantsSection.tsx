import {FC, useState, useLayoutEffect, useMemo, FormEvent} from "react";
// import "../component_styles/Junksearch.css";
import Data from "../assets/data/restaurants.json";
import RestaurantBox from "./RestaurantBox";

const JunkSearch: FC = () => {
    return (
        <div className="Search-input-wrapper">
            <label htmlFor="Filter-toggle" className={"Filter-toggle-label"}>
                <span>Simple Search</span>
            </label>
            <input type="checkbox" name="" id="Filter-toggle"/>
            <input className={"Search-bar Simple"} type="text" placeholder={"Search for restaurants"}
            />
            <div className="Advanced-search-mode Advanced-input-wrapper">
                <input className={"Search-bar"} type="text"/>
                <input className={"Search-bar"} type="text"/>
                <input className={"Search-bar"} type="text"/>
            </div>
        </div>
    );
};

const RestaurantsSection: FC = () => {

    interface IFilter {
        filterSearchValue: string;
    }

    const [searchValue, setSearchValue] = useState<string>("");
    const [restaurantData, setRestaurantData] = useState<any[]>(Data);
    const [counter, setCounter] = useState<number>(3);
    const [filter, setFilter] = useState<IFilter>({filterSearchValue: ""});

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue.length === 0) {
            setFilter(prev => ({...prev, filterSearchValue: ""}));
            setCounter(3);
            return;
        }

        setFilter(prev => ({...prev, filterSearchValue: searchValue}));

    }
    const cachedRestaurantData = useMemo<any>(() => restaurantData.sort((a, b) => 0.5 - Math.random()), [restaurantData]);

    const handleShowMoreClick = (): void => {
        if (counter <= restaurantData.length) {
            setCounter(prev => prev + 3);
        } else if (restaurantData.length - counter < 3 && restaurantData.length - counter >= 1) {
            setCounter(prev => prev = restaurantData.length - counter);
        }
    };

    return (
        <section className={"Restaurants-section"}>
            <h1 className="Section-heading">Find Your Perfect Dining Spot</h1>
            <h2 className={"Section-subheading"}>Search by Cuisine, Location, or Name</h2>
            <form className="Search-form" onSubmit={handleSearchSubmit}>
                {/*<JunkSearch />*/}
                <input className={"Search-bar Simple"} type="text" placeholder={"Search for restaurants"}
                       onChange={e => setSearchValue(e.target.value.trim())}/>
                <input type="submit" className={"Search-button"} value={""}/>
            </form>
            <div className="Restaurant-boxes">
                {
                    filter.filterSearchValue.length === 0 ? cachedRestaurantData.slice(0, counter).map((restaurant: any, index:number) => {
                            return <RestaurantBox key={restaurant.name} image={restaurant.image} name={restaurant.name} rating={restaurant.rating}
                                                  description={restaurant.description}/>
                        })
                        :
                        cachedRestaurantData.filter((restaurant: any) => restaurant.name.toLowerCase().includes(filter.filterSearchValue.toLowerCase())).map((restaurant: any, index:number) =>{
                            return <RestaurantBox key={restaurant.name} image={restaurant.image} name={restaurant.name} rating={restaurant.rating}
                                                  description={restaurant.description}/>
                        })

                }

            </div>
            {filter.filterSearchValue.length === 0 &&
                <button className={"Show-more-button"} onClick={handleShowMoreClick}>Show More</button>}


        </section>
    );
};

export default RestaurantsSection;