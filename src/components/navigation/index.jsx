"use client";

import Image from "next/image";
import Logo from "../../../public/assets/logo.png";
import Link from "next/link";
import StyledButton from "../button";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "About",
      href: "/about-us",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ];

  const logIn = [{ name: "Log In/Register", href: "/sign-in" }];

  return (
    <>
      <nav className="">
        <div className="max-w-screen-4xl p-3 flex flex-wrap items-center justify-between mx-auto p-4 bg-[rgba(255,255,255,0.02)]">
          <div className="w-fit flex">
            <Link href="/">
              <Image src={Logo} width={200} height={100} alt="Map Map Logo" />
            </Link>
          </div>
          <div className="flex mx-auto w-[40%] justify-evenly items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link href={item.href} key={`top-nav-${item.name}`}>
                  <StyledButton
                    bg={"bg-accent3"}
                    hover={"hover:brightness-[70%]"}
                    activeState={isActive}
                  >
                    {item.name}
                  </StyledButton>
                </Link>
              );
            })}
          </div>
          <div className="flex w-fit items-center">
            {logIn.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link href={item.href}>
                  <StyledButton
                    bg={"bg-accent2"}
                    hover={"hover:brightness-[70%]"}
                    activeState={isActive}
                  >
                    {item.name}
                  </StyledButton>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
