import { FullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 secs

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const data: FullBlog = await getData(params.slug);
  console.log(data);
  return (
    <div className="mt-8">
      <h1>
        <span className="text-base text-center text-primary block font-semibold tracking-wide uppercase">
          Op Pautu - Blog
        </span>
        <span className="mt-5 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt=""
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
        <PortableText value={data.content} />
      </div>
    </div>
  );
};

export default BlogArticle;
