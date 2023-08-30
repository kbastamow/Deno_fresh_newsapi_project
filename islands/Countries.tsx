import { PageProps } from "$fresh/server.ts";

export default function Countries() {
  return (
    <>
      <ul class="text-center text-md mb-6">Choose country</ul>

      <div class="display flex justify-around mb-10">
        <li class="list-none text-center">
          <a href="?country=us">
          the US
            <img class="w-28 shadow" src="/usflag.png" alt="U.S. flag" />
          </a>
        </li>
        <li class="list-none text-center">
          <a href="?country=gb">
            the UK <img class="w-28" src="/ukflag.png" alt="UK flag" />
          </a>
        </li>
        <li class="list-none text-center">
          <a href="?country=au">
            Australia{" "}
            <img class="w-28" src="/auflag.png" alt="Australian flag" />
          </a>
        </li>
        <li class="list-none text-center">
          <a href="?country=ca">
            Canada <img class="w-28" src="/caflag.png" alt="Canadian flag" />
          </a>
        </li>
      </div>
      <hr />
    </>
  );
}
