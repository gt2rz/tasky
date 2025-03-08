"use client";
import MenuUserOptions from "./menu-user-options";

export interface MenuUserProps {
  image?: string;
  name?: string;
}

const MenuUser = ({ user }: { user: MenuUserProps }) => {
  return (
    <div className="flex items-center gap-1">
      {user?.image && (
        <>
          <img
            className="rounded-full ring ring-black w-8 h-8"
            src={user.image}
          />
          <MenuUserOptions user={user} />
        </>
      )}
    </div>
  );
};

export default MenuUser;
