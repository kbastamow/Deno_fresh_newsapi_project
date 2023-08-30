import { PageProps } from "$fresh/server.ts";
import { dateConverter } from "../helpers/dateConverter.ts";
import { Article } from "../types/newsData.ts";
import IconArrowUpRightCircle from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-up-right-circle.tsx"

export default function NewsDetails({ data }: PageProps<Article>) {

  const formattedDate = dateConverter(data.publishedAt)

  return (
    <div>
      <p>by {data.author}, source: {data.source.name}</p>
      <p class="text-cool-gray-500">{formattedDate}</p>
      <p class="px-8 py-4">{data.content ? data.content : data.description}</p>
      {data.urlToImage ? (<img src={data.urlToImage} alt="" class="h-40 p-6 shadow-xs mx-auto"/>) : <></>}
      <a href={data.url} class="cursor-pointer"><span class="display flex">Visit the site <IconArrowUpRightCircle/></span> </a>
    </div>
  );
}
