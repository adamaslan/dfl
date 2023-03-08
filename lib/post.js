import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

//removed local.env

// export const getAllPosts = async () => {
//   const posts = await prisma.dfl1.findMany();
//   return posts.map((post) => ({ params: { title: post.title } }));
// };

// export const getAllPostsById = async () => {
//   const posts = await prisma.dfl1.findMany({
//     select: {
//       objectID: true,
//       title: true,
//       image: true,
//       article: true,
//       // Add other fields as needed
//     },
//   });
//   console.log(posts);
//   return posts.map((post) => ({
//     params: { objectID: post.objectID }, // convert ID to string
//     post: {
//       objectID: post.objectID,
//       title: post.title,
//       image: post.image,
//       article: post.article,
//       // Add other fields as needed
//     },
//   }));
// };

export const getAllPosts = async () => {
  const posts = await prisma.dfl1.findMany();
  console.log(posts);
  return posts.map((post) => ({
    params: { title: post.title },
    post: {
      title: post.title,
      image: post.image,
      article: post.article,
      // Add other fields as needed
    },
  }));
};

export const getPostByID2 = async () => {
  const posts = await prisma.dfl1.findUnique({
    where: {
      objectID: posts.objectID,
    },
  });
  return posts;
};

// async function getPostById(objectID) {
//   const post = await prisma.dfl1.findUnique({
//     where: {
//       objectID: objectID,
//     },
//   });
//   return post;
// }

// async function getPostByTitle(title) {
//   const post = await prisma.dfl1.findUnique({
//     where: {
//       title: title,
//     },
//   });
//   return post;
// }

// module.exports = {
//   getAllPosts,
//   getPostById,
//   getPostByTitle,
// };
