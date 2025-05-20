import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../utils/constants";

export const ItemsList = () => {
  const [lostItems, setLostItems] = useState([]);
  useEffect(() => {
    const response = fetch(`${API_ENDPOINT}/getAllItems`);
    console.log(response);

    setLostItems(lostItems);
  }, [setLostItems]);
  return <div></div>;
};
