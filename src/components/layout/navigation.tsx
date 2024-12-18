import { Logo } from "./logo";
import { MenuButton } from "./menu-button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 z-50">
      <Logo />
      <MenuButton />
    </nav>
  );
}
