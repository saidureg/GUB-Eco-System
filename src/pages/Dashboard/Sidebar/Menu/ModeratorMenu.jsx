import { MdReport, MdReviews } from "react-icons/md";
import { FaUtensils } from "react-icons/fa";
import MenuItem from "../MenuItem";

const ModeratorMenu = () => {
  return (
    <>
      <MenuItem icon={MdReviews} label="Food Review" address="foodReview" />
      <MenuItem icon={FaUtensils} label="Add Items" address="addItems" />
      <MenuItem icon={MdReport} label="Reported" address="reported" />
    </>
  );
};

export default ModeratorMenu;
