import { Handlers, PageProps } from "https://deno.land/x/fresh@1.4.2/server.ts";
import TopHeadlines from "../components/TopHeadlines.tsx";
import { useState } from "preact/hooks";
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
      <img src="/news.jpg"></img>
      <h1>Get the latest news!</h1>
      <Countries></Countries>
      {(!data) ? <p>No news</p> : (
        <>
          <TopHeadlines data={data}></TopHeadlines>
        </>
      )}
    </>
  );
}
