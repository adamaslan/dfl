// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.query);

  const restaurantData = {
    1: {
      name: "nook",
      desc: "coffee shop",
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

  const restaurant = req.query.id;
  const result = restaurantData[restaurant] || {};
  res.status(200).send(result);
}
