import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const getAllPosts = async () => {
  const posts = await prisma.dfl1.findMany();
  return posts.map((post) => ({ params: { title: post.title } }));
};

export const getPostByTitle = async () => {
  const posts = await prisma.dfl1.findUnique({
    where: {
      title: title,
    },
  });
  return posts;
};

// async function getPostById(id) {
//   const post = await prisma.dfl1.findUnique({
//     where: {
//       objectID: id,
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
