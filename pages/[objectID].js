import { getAllPostsById, getPostByTitle } from "../lib/post";

export async function getStaticProps(ctx) {
  const prisma = new PrismaClient();
  const post = await prisma.post.findOne({
    where: {
      id: parseInt(ctx.params.postId),
    },
  });
  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: "1" } }],
    fallback: false,
  };
}

// export const getStaticPaths = async () => {
//   // map data to an array of path objects with params (objectID)
//   const posts = await getAllPostsById();

//   // const paths = posts.map((tasty) => {
//   //   return {
//   //     params: { objectID: tasty.objectID },
//   //   };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const data = await getAllPostsById;

//   return {
//     props: { tasty: data },
//   };
// };

// const Details = ({ tasty }) => {
//   return (
//     <div>
//       <h1>{tasty.objectID}</h1>
//       {/* <p>{tasty.title}</p> */}
//       <p>{tasty.image}</p>
//       <p>{tasty.article}</p>
//     </div>
//   );
// };

// export default Details;
