import UnderlinedLink from "./UnderlinedLink";

export default function Header() {
  return (
    <header className="p-4 border-b border-gray-300">
      <div className="max-w-[1000px] justify-between gap-2 m-auto w-full flex">
        <UnderlinedLink underlineOnlyOnHover={true} href="/">
          <h2>Recipes</h2>
        </UnderlinedLink>
        <nav>Navigation Menu</nav>
      </div>
    </header>
  );
}
