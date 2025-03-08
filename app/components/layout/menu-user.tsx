"use client";
import Avatar from "../commons/avatar";
import MenuUserOptions from "./menu-user-options";

export interface MenuUserProps {
  image?: string;
  name?: string;
  email?: string;
}

const MenuUser = ({ user }: { user: MenuUserProps | undefined }) => {
  return (
    <div className="flex items-center gap-1">
      {user?.image && (
        <>
          <Avatar image={user.image} />
          <MenuUserOptions user={user} />
        </>
      )}
    </div>
  );
};

export default MenuUser;
