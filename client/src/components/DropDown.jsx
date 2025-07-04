
"use client";

import { Dropdown, DropdownItem } from "flowbite-react";

export function UserDropdown({logoutHandler}) {
  return (
    <Dropdown label="User" dismissOnClick={false}>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem onClick={logoutHandler}>Sign out</DropdownItem>
    </Dropdown>
  );
}
