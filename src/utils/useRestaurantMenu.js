import { useEffect, useState } from "react";
import { Menu_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setRestInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
