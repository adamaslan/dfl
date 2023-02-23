import { getAllPosts, getPostByTitle } from "../lib/post";
import Image from "next/image";

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div className="flex-container">
        <div>
          <Image
            alt={post.title}
            width={1080}
            height={809}
            objectFit="cover"
            src={post.image}
          />
        </div>
      </div>
      <p>{post.article}</p>
    </div>
  );
}
// export async function getStaticPaths() {
//   const posts = await getAllPosts();
//   const paths = posts.map((post) => ({
//     params: { title: post.title.replace(/\s+/g, "-") },
//   }));
//   return { paths, fallback: false };
// }

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: { title: post.title },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostByTitle(params.title);
  return { props: { post } };
}
