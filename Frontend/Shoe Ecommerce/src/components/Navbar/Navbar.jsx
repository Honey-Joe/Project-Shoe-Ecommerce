import { SideSheet } from "evergreen-ui";
import { DropdownItem } from "flowbite-react";
import { NavbarCollapse } from "flowbite-react";
import { NavbarToggle } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Menu } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { Search } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navlogo } from "../../assets/image";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="max-w-[100%]">
        <div className="w-[90%] mx-auto items-center grid grid-cols-3 gap-3 justify-center lg:grid-cols-3">
          <div>
            <img src={navlogo} alt="" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-4 font-[Poppins]">
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>Collections</li>
              </Link>
              <Link>
                <li>Shoes</li>
              </Link>
              <Link>
                <li>Boots</li>
              </Link>
              <Link>
                <li>Climbing</li>
              </Link>
              <Dropdown label="Pages" inline>
                <DropdownItem>
                  <Link>About us</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Contact us</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Blog</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Wish List</Link>
                </DropdownItem>
              </Dropdown>
            </ul>
          </div>
          <div className="lg:hidden justify-end flex items-center col-span-2 lg:col-span-1">
            <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)} width={300}>
            <ul className="font-[Poppins] flex flex-col gap-3 p-3">
              <Link>
                <li>Home</li>
              </Link>
              <Link>
                <li>Collections</li>
              </Link>
              <Link>
                <li>Shoes</li>
              </Link>
              <Link>
                <li>Boots</li>
              </Link>
              <Link>
                <li>Climbing</li>
              </Link>
              <Dropdown label="Pages" inline>
                <DropdownItem>
                  <Link>About us</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Contact us</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Blog</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link>Wish List</Link>
                </DropdownItem>
              </Dropdown>
            </ul>
            </SideSheet>
            <button onClick={()=> setIsShown(true)}><Menu></Menu></button>
          </div>
          <div className="flex gap-5 justify-end items-center col-span-2 lg:col-span-1">
            <div>
              <Link>
                <Search></Search>
              </Link>
            </div>
            <div>
              <Link>
                <User></User>
              </Link>
            </div>
            <div>
              <Link>
                <ShoppingBag></ShoppingBag>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
