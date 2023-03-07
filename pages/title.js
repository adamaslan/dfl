// import { getAllPosts, getPostByTitle } from "../lib/post";

// // export const getStaticPaths = async () => {
// //   const posts = await getAllPosts();
// //   const paths = posts.map((post) => ({
// //     params: { title: post.title },
// //   }));
// //   return { paths, fallback: false };
// // };

// export async function getStaticProps(context) {
//   const title = context.params.title;
//   const post = await getPostByTitle(title);
//   return { props: { post } };
// }

// // export async function getStaticProps({ params }) {
// //   const post = await getPostByTitle(params.title);
// //   return { props: { post } };
// // }

// const Post = ({ post }) => {
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <div className="flex-container">
//         <div>
//           <img alt={post.title} src={post.image} />
//         </div>
//       </div>
//       <p>{post.article}</p>
//     </div>
//   );
// };

// // export async function getStaticPaths() {
// //   return {
// //     paths: [{ params: { title } }],
// //     fallback: false,
// //   };
// // }

// // export async function getStaticPaths() {
// //   const posts = await getAllPosts();
// //   const paths = posts.map((post) => ({
// //     params: { title: post.title.toLowerCase().replace(/\s+/g, "-") },
// //   }));
// //   return { paths, fallback: false };
// // }

// // export async function getStaticPaths() {
// //   const posts = await getAllPosts();
// //   const paths = posts.map((post) => ({
// //     params: { title: post.title.toLowerCase().replace(/\s+/g, "-") },
// //   }));
// //   return { paths, fallback: false };
// // }

// // export async function getStaticPaths() {
// //   const posts = await getAllPosts();
// //   const paths = posts
// //     .filter((post) => post.title) // Filter out posts with undefined/null titles
// //     .map((post) => ({
// //       params: { title: post.title.toLowerCase().replace(/\s+/g, "-") },
// //     }));
// //   return { paths, fallback: false };
// // }

// export default Post;

const Title = () => {
  <div>hi</div>;
};
export default Title;
