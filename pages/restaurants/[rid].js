import React from "react";

// const Restaurant = ({ restaurantId, result }) => {

const Restaurant = ({ pagey, result }) => {
  console.dir(result);
  return (
    <div>
      <h2>Drinks Food Life Restaurant Pics</h2>
      <p>{restaurant.name}</p>
      <p>{restaurant.desc}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { rid } = params;
  console.log(rid);
  const pagey = await fetch(`http://localhost:3001/api/hello?id=${rid}`).then(
    (R) => R.json()
  );

  return {
    props: {
      restaurantId: rid,
      restaurant: pagey,
    },
  };
}

export default Restaurant;
