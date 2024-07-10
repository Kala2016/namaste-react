import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);



  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating, costForTwo, locality } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card
      ?.card?.itemCards || [];

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{locality}</h3>
      <h4>
        {cuisines.join(",")}/costForTwo - {"Rs "}
        {costForTwo / 100}
      </h4>
      <h4>{avgRating} stars</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs"} {item.card.info.price / 100}
            </li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
