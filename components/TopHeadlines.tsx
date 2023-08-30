import { PageProps } from "$fresh/server.ts";
import { Article, NewsData } from "../types/newsData.ts";
import { countryList } from "../helpers/countryList.ts";
import { useEffect, useState } from "preact/hooks";
import LoadDetails from "../islands/LoadDetails.tsx";
import { useSignal } from "@preact/signals";

export default function TopHeadlines({ data }: PageProps<NewsData>) {
  const { totalResults, articles, country } = data;
  return (
    <div>
      <h3>News from {countryList[country]}</h3>
      <p>{totalResults} articles</p>
      {articles.map((article: Article, index) => (
        <div key={index}>
          <h4>{article.title}</h4>
          <LoadDetails data={article} />
        </div>
      ))}
    </div>
  );
}
