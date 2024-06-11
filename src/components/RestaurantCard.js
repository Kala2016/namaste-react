import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      locality,
      sla: { deliveryTime },
    } = resData?.info;
  
    return (
      <div className="res-card" style={{ background: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{locality} </h4>
        <h5>{cuisines.join(" ,")}</h5>
        
        <h6>{avgRating}stars</h6>
        <h6>{costForTwo}</h6>
        <h6>{deliveryTime}minutes</h6>
      </div>
    );
  };


  export default RestaurantCard;