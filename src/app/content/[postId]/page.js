import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "@/libs/microcms";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDitailPage({ params }) {
  const { postId } = params;
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1>{post.title}</h1>
      <div>{parse(post.content)}</div>
    </>
  )
}