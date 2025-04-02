import Link from "next/link";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
];

const NavMenu = () => {
  return (
    <>
      {navItems.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="text-white font-medium hover:underline px-4 py-2"
        >
          {label}
        </Link>
      ))}
    </>
  );
};

export default NavMenu;
