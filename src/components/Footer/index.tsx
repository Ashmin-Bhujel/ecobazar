import Content from "./Content";
import Copyright from "./Copyright";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer>
      <Newsletter />
      <Content />
      <Copyright />
    </footer>
  );
}
