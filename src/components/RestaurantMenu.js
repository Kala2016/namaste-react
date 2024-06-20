import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Menu_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(Menu_API + resId);

      const json = await data.json();

      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu", error);
    }
  };

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
