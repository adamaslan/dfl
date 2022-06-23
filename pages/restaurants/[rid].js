import React from "react";

const Restaurant = ({ restaurant }) => (
  <div>
    <div style={{ marginTop: "5rem" }} />
    <p>{restaurant.name}</p>
    <p>{restaurant.desc}</p>
  </div>
);

export async function getServerSideProps(context) {
  const { params } = context;
  const { rid } = params;
  const restaurantData = {
    nook: {
      name: "nook",
      desc: "coffee shop",
      slug: "nook",
    },
    2: {
      name: "notnook",
      desc: "nookYo",
    },
    3: {
      name: "los hermanos",
      desc: "The greatest tortilleria north of Mexico",
    },
    4: { name: "sey Cafe", desc: "The lightest of" },
    5: { name: "Athans bakery", desc: "Very Tasty Pastries" },
  };

  return {
    props: {
      restaurant: restaurantData[rid] || { name: "not found" },
    },
  };
}

export default Restaurant;
