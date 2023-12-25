import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  //Local state variable - super powerFul variable(useState Hook)
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  //Normal js variable
  // let listOfRestaurants = [];

  // Normal js variable
  // let listOfRestaurantsJs  = [
  //     {
  //         info: {
  //           id: "23719",
  //           name: "McDonald's",
  //           cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
  //           costForTwo: "₹400 for two",
  //           cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //           avgRating: 3.4,

  //           deliveryTime: 24,
  //         }
  //       },
  //       {
  //         info: {
  //           id: "23718",
  //           name: "Dominos's",
  //           cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
  //           costForTwo: "₹400 for two",
  //           cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //           avgRating: 4.4,
  //           deliveryTime: 24,
  //         }
  //       },
  //       {
  //         info: {
  //           id: "23748",
  //           name: "Ram Bhandar",
  //           cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
  //           costForTwo: "₹400 for two",
  //           cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
  //           avgRating: 4.2,
  //           deliveryTime: 24,
  //         }
  //       },
  // ]

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList ); 
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
