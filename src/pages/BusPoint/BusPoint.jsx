import { NavLink } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";
import { useEffect, useState } from "react";
import BusCard from "./BusCard";
import useBus from "../../hooks/useBus";

const BusPoint = () => {
  // const loadBus = useLoaderData();
  const [buses] = useBus();
  const [busPickup, setBusPickup] = useState([]);
  const [categoryBus, setCategoryBus] = useState([]);

  useEffect(() => {
    fetch("busPickup.json")
      .then((res) => res.json())
      .then((data) => setBusPickup(data));
  }, []);

  const handleCategory = (e) => {
    const routeNo = e.target.innerText;
    const filteredBus = buses.filter((bus) => bus.route_no === routeNo);
    setCategoryBus(filteredBus);
  };

  return (
    <div>
      <Navbar />
      <div className="flex my-10">
        <div className="w-1/4">
          <div className="space-y-4">
            <h3 className="text-2xl">Route Category </h3>
            <div className="space-y-4">
              {busPickup.map((category, idx) => (
                <NavLink className="block px-4" key={idx}>
                  <ul
                    onClick={handleCategory}
                    className="btn-outline p-3 rounded-lg"
                  >
                    {category.name}
                  </ul>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryBus.length > 0
            ? categoryBus.map((bus) => (
                <BusCard key={bus._id} bus={bus}></BusCard>
              ))
            : buses?.map((bus) => <BusCard key={bus._id} bus={bus}></BusCard>)}
        </div>
      </div>
    </div>
  );
};

export default BusPoint;
