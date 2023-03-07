import { getAllPostsById, getPostByTitle } from "../lib/post";
const SinglePost = ({ post }) => {
  return (
    <div>
      {" "}
      <h1>{post.title}</h1>{" "}
      <div className="flex-container">
        {" "}
        <div>
          <img alt={post.title} src={post.image} />{" "}
        </div>{" "}
      </div>
      <p>{post.article}</p>
    </div>
  );
};
export default SinglePost;

export async function getStaticProps(ctx) {
  const objectID = ctx.params.objectID;
  const prisma = new PrismaClient();
  const post = await prisma.post.findOne({
    where: {
      post: { slug: objectID },
    },
  });
  return {
    props: {
      post,
    },
  };
}
export async function getStaticPaths() {
  const posts = await getAllPostsById();
  const paths = posts.map((p) => ({
    params: { objectID: p.post.slug },
  }));
  return {
    paths: paths,
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
