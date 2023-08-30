import { Handlers, PageProps } from "https://deno.land/x/fresh@1.4.2/server.ts";
import TopHeadlines from "../components/TopHeadlines.tsx";
import { NewsData } from "../types/newsData.ts";
import Countries from "../islands/Countries.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const defaultCountry = "us";
    const country = url.searchParams.get("country") || defaultCountry;
    const headers = new Headers({
      "X-Api-Key": Deno.env.get("API_KEY")!,
    });
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}`,
      {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: headers,
      },
    );
    const result = await response.json();
    result.country = country;
    return ctx.render(result);
  },
};

export default function News({ data }: PageProps<NewsData>) {
  return (
    <>
    <div class="container">
      <div class="display flex my-8 mx-40 items-center">
          <div>
          <img class="h-40"src="/news.jpg"></img>
          </div>
          <div class="text-center text-2xl flex-grow">
          <h1 class="title-font text-3xl my-auto">Get the latest news!</h1>
          </div>
      </div>
      <Countries></Countries>
      {(!data) ? <p>No news</p> : (
        <>
          <TopHeadlines data={data}></TopHeadlines>
        </>
      )}
      </div>
    </>
  );
}
