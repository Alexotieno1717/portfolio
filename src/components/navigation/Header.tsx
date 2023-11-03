import { Links } from "@/constants";
import Link from "next/link";
import { Nav } from "../ui/ComponentsStyled";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useState } from "react";

interface HeaderProps {
  colors?: {
    bg: string;
    buttonColor: string;
    dividerColor: string;
  };
}

const defaultValues = {
  bg: "#282C33",
  buttonColor: "#C778DD ",
  dividerColor: "#C778DD",
};

const Header = ({ colors = defaultValues }: HeaderProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const scrollPosition = useScrollPosition();

  const toggleCollapse = () => setCollapsed(!collapsed);

  return (
    <>
      <Nav
        $collapsed={collapsed}
        $scrollPosition={scrollPosition}
        $colors={colors}
        className="transition ease-in-out delay-150 fixed w-full z-20 top-0 left-0"
      >
        <div className="lg:max-w-4xl xl:max-w-[1031px]  flex flex-wrap items-center justify-between mx-auto px-4 lg:px-0 py-4">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="logo" className="w-48" />
          </Link>
          <div className="flex">
            <button
              onClick={toggleCollapse}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`"justify-between w-full ${
              collapsed === false && "hidden"
            } lg:flex lg:w-auto lg:order-1"`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col gap-2 lg:gap-0 lg:items-center p-4 lg:p-0 mt-4 font-medium rounded lg:flex-row lg:space-x-6 xl:space-x-8 lg:mt-0 lg:border-0">
              {Links.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  target={item.target}
                  className="transition ease-in-out delay-150  hover:text-primary-purple"
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Header;
