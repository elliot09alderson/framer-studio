import React, { useEffect, useState } from "react";
import Card from "./Card";
import deapool from "/deadpool.jpeg";
import deapool2 from "/deapool2.jpeg";
import GOW from "/God.jpeg";
const CardGroup = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((response) => {
          setData(response.products);
        });
    }
    fetchData();
  }, []);

 

  return (
    <div className="w-full flex items-center justify-center  gap-12 h-screen ">
      {data.map((item, idx) => (
        <Card
          title={item.title}
          desc={
            "very awsome movie of ryan Reynolds wath it you will never regert"
          }
        />
      ))}
    </div>
  );
};

export default CardGroup;
