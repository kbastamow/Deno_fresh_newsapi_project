import { PageProps } from "$fresh/server.ts";

export default function Countries() {
  return (
    <>
      <ul>Choose country</ul>
      <li>
        <a href="?country=au">the US</a>
      </li>
      <li>
        <a href="?country=gb">the UK</a>
      </li>
      <li>
        <a href="?country=au">Australia</a>
      </li>
      <li>
        <a href="?country=ca">Canada</a>
      </li>
    </>
  );
}
