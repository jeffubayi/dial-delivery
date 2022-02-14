import { Header } from "./Header";

export function Footer() {
  const now = new Date();
  return (
    <footer>
      {now.getDate()}  {now.toLocaleString("en-US", { month: "long" })} {now.getFullYear()}
    </footer>
  );
}
