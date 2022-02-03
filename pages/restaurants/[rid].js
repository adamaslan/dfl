import React from "react";

// const Restaurant = ({ restaurantId, result }) => {

const Restaurant = ({ restaurant, result }) => {
  console.dir(result);
  return (
    <div>
      <p>{name.pagey}</p>
      <p>{desc.restaurant}</p>
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
      restaurant: result,
    },
  };
}

export default Restaurant;
