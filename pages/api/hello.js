// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.query);

  const restaurantData = {
    123: {
      name: "nook",
      desc: "coffee shop",
    },
    456: {
      desc: "nookYo",
    },
  };

  const restaurantId = req.query.id;
  const result = restaurantData[restaurantId] || {};
  res.status(200).send(result);
}
