import Link from "next/link";

export type NavProps = {
  href: string;
  title: string;
};

const NavLink = ({ href, title }: NavProps) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7B9] sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </Link>
  );
};

export default NavLink;
