import React from "react";

const Restaurant = ({ restaurantId, result }) => {
  console.dir(result);
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
  const result = await fetch(`http://localhost:3001/api/hello?id=${rid}`).then(
    (R) => R.json()
  );

  return {
    <h1>
    props: {
      restaurantId: rid,
      result: result,
    },
    </h1>
  };
}

export default Restaurant;
