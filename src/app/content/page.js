import Link from "next/link";
import { getList } from "@/libs/microcms";


export default async function StaticPage() {
  const { contents } = await getList();
  // console.log(`contents`, contents);
  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <>
      <h1>My Website</h1>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/content/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}
