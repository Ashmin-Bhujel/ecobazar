import NavigationBottom from "./NavigationBottom";
import NavigationMiddle from "./NavigationMiddle";
import NavigationTop from "./NavigationTop";

export default function Header() {
  return (
    <header>
      <nav>
        <NavigationTop />
        <NavigationMiddle />
        <NavigationBottom />
      </nav>
    </header>
  );
}
