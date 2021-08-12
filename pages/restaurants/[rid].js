import React from "react";

const Restaurant = ({ restaurantId }) => {
  return (
    <div>
      <p>{restaurantId}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { rid } = params;
  console.log(rid);

  return {
    props: {
      restaurantId: rid,
    },
  };
}

export default Restaurant