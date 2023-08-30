import { PageProps } from "$fresh/server.ts";
import { Article } from "../types/newsData.ts";

export default function NewsDetails({ data }: PageProps<Article>) {
  return (
    <div>
      <h2></h2>
      <p>by {data.author}, source {data.source.name}</p>
      <p>{data.content ? data.content : data.description}</p>
      <img src={data.urlToImage} alt="" />
      <a href={data.url}>Visit the site</a>
    </div>
  );
}
