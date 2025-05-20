import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../utils/constants";

export const ItemsList = () => {
  const [lostItems, setLostItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await axios.get(`${API_ENDPOINT}/getAllItems`);
      setLostItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {lostItems.map((el) => (
        <div key={el._id}>
          {" "}
          {/* add unique key */}
          <div>{el.ItemName}</div>
          <div>{el.description}</div>
        </div>
      ))}
    </div>
  );
};
