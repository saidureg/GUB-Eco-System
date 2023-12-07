import { NavLink } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import useMenu from "../../hooks/useMenu";

const Canteen = () => {
  const [menu] = useMenu();
  // const loadFoods = useLoaderData();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("foodCategory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex my-10">
        <div className="w-1/4">
          <div className="space-y-4">
            <h3 className="text-2xl">Food Category </h3>
            <div className="space-y-4">
              {categories.map((category, idx) => (
                <NavLink
                  to={`/categories/${category.id}`}
                  className="block px-4"
                  key={idx}
                >
                  <ul className="btn-outline p-3 rounded-lg">
                    {category.name}
                  </ul>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menu?.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Canteen;
