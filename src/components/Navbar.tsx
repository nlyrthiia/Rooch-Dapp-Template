import type { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <a href="/">{props.logo}</a>
    </div>

    <nav>
      <ul className="navbar flex items-center text-xl font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { Navbar };
