import { PageProps } from "$fresh/server.ts";
import { Article, NewsData } from "../types/newsData.ts";
import { countryList } from "../helpers/countryList.ts";
import { useEffect, useState } from "preact/hooks";
import LoadDetails from "../islands/LoadDetails.tsx";
import { useSignal } from "@preact/signals";

export default function TopHeadlines({ data }: PageProps<NewsData>) {
 
  const { totalResults, country } = data;
//Sort contentful articles first
  const articles = data.articles.sort((x, y) => {
    if (x.content && !y.content) return -1
    else if (!x.content && y.content) return 1
    else return 0 
    })


  return (
    <div>
      <div class="text-center">
      <h3 class="text-2xl mt-6 mb-3">News from <span class="font-bold">{countryList[country]}</span></h3>
      <p>{totalResults} articles</p>
      </div>

      <div class="display flex flex-col w-2/3 mx-auto gap-2 ">
      {articles.map((article: Article, index) => (
        <div key={index} class="border-2 border-solid rounded border-gray-500 p-6">
          <h4 class="font-medium">{article.title}</h4>
          <LoadDetails data={article} />
        </div>
      ))}
      </div>
    </div>
  );
}
