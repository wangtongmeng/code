// /dashboard/about/page.js
import { use } from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    message: "Hello, About!",
  };
}

export default function Page() {
  const { message } = use(getData());
  return <h1>{message}</h1>;
}
