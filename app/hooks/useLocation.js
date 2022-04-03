import * as Location from "expo-location";
import React from "react";

const useLocation = () => {
  const [location, setLocation] = React.useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
