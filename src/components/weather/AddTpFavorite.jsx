import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddTpFavorite() {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  const { weatherData } = useContext(WeatherContext);

  const [isFavorite, toggleFavorite] = useState(false);

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (found) {
      removeFromFavorites(location);
    } else {
      addToFavorites(latitude, longitude, location);
    }
    toggleFavorite(!isFavorite);
  };
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorite(found);
  }, []);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
