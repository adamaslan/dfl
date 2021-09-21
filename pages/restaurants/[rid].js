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
  const result = await fetch(`http://localhost:3000/api/hello?id=${rid}`).then(
    (R) => R.json()
  );

  return {
    props: {
      restaurantId: rid,
      result: result,
    },
  };
}

export default Restaurant;
