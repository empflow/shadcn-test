import UnderlinedLink from "./UnderlinedLink";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-300 p-3 mt-16">
      <div className="max-w-[1000px] m-auto">
        <UnderlinedLink underlineOnlyOnHover={true} href="/">
          Recipes
        </UnderlinedLink>{" "}
        {year}
      </div>
    </footer>
  );
}
