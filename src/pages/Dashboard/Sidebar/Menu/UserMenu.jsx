import { FaRegAddressBook, FaList, FaUser } from "react-icons/fa";
import MenuItem from "../MenuItem";

const UserMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUser}
        label="Profile"
        address="/dashboard/userProfile"
      />

      <MenuItem
        icon={FaRegAddressBook}
        label="Add Product"
        address="/dashboard/addProduct"
      />

      <MenuItem
        icon={FaList}
        label="My Products"
        address="/dashboard/myProduct"
      />
    </>
  );
};

export default UserMenu;
