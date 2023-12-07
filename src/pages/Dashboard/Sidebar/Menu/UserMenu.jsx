import { FaUser, FaShoppingCart, FaMoneyBillAlt } from "react-icons/fa";
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
        icon={FaShoppingCart}
        label="My Cart"
        address="/dashboard/cart"
      />

      <MenuItem
        icon={FaMoneyBillAlt}
        label="Payment History"
        address="/dashboard/paymentHistory"
      />
    </>
  );
};

export default UserMenu;
