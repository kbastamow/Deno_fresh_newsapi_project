import { PageProps } from "$fresh/server.ts";
import { Signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import NewsDetails from "../components/NewsDetails.tsx";
import { Article } from "../types/newsData.ts";

export default function LoadDetails({ data }: PageProps<Article>) {
  const [showDetails, setShowDetails] = useState(false);
  const [buttonOpen, setButtonOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => (setShowDetails(!showDetails),
          setButtonOpen(!buttonOpen))}
      >
        {buttonOpen ? <>Expand</> : <>Collapse</>}
      </button>
      {showDetails ? <NewsDetails data={data}></NewsDetails> : <></>}
    </>
  );
}
