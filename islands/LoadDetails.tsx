import { PageProps } from "$fresh/server.ts";
import { Signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import NewsDetails from "../components/NewsDetails.tsx";
import { Article } from "../types/newsData.ts";
import IconArrowBigDownLinesFilled from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-big-down-lines-filled.tsx"
import IconArrowMoveUp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-move-up.tsx"
import IconArrowMoveDown from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/arrow-move-down.tsx"


export default function LoadDetails({ data }: PageProps<Article>) {
  const [showDetails, setShowDetails] = useState(false);
  const [buttonOpen, setButtonOpen] = useState(true);
  return (
    <>
    <div class="text-right">
      <button
        class="ml-auto"
        onClick={() => (setShowDetails(!showDetails),
          setButtonOpen(!buttonOpen))}
      >
        {buttonOpen ? <><span class="cursor-pointer display flex">Expand
          <IconArrowMoveDown></IconArrowMoveDown>
        </span></> : <><span class="cursor-pointer display flex">Collapse <IconArrowMoveUp></IconArrowMoveUp></span></>}
      </button>
      </div>
      {showDetails ? <NewsDetails data={data}></NewsDetails> : <></>}
    </>
  );
}
