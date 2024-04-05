const SinglePost1 = () => {
  return <div>hi</div>;
};
export default SinglePost1;

// import { getAllPosts } from "../lib/post";
// import Link from "next/link";
// export async function getStaticProps() {
//   const posts = await getAllPosts();

//   return { props: { posts } };
// }
// export default function AllPosts({ posts }) {
//   return (
//     <div>
//       <h1>All Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.params.title}>
//             <Link
//               href={`/${post.params.title.toLowerCase().replace(/\s+/g, "-")}`}
//             >
//               {post.params.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
