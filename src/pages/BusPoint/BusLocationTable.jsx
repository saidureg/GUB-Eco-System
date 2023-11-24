import Navbar from "../../components/Header/Navbar";

const BusLocationTable = () => {
  return (
    <div>
      <Navbar />
      <div className="overflow-x-auto my-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Bus Info</th>
              <th>Driver Info</th>
              <th>Pickup Time</th>
              <th>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/KWGt2yz/gub-bus.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Bus Number: GRN101</div>
                    <div className="text-sm opacity-50">
                      Pickup Point: Shewrapara
                    </div>
                  </div>
                </div>
              </td>
              <td>
                Driver Name: John Doe
                <br />
                <span className="badge badge-ghost badge-sm">
                  +8801234-567890
                </span>
              </td>
              <td>Pickup Time: 07:00 AM</td>
              <td>Departure Time: 08:00 AM</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/KWGt2yz/gub-bus.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Bus Number: GRN101</div>
                    <div className="text-sm opacity-50">
                      Pickup Point: Shewrapara
                    </div>
                  </div>
                </div>
              </td>
              <td>
                Driver Name: John Doe
                <br />
                <span className="badge badge-ghost badge-sm">
                  +8801234-567890
                </span>
              </td>
              <td>Pickup Time: 07:00 AM</td>
              <td>Departure Time: 08:00 AM</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/KWGt2yz/gub-bus.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Bus Number: GRN101</div>
                    <div className="text-sm opacity-50">
                      Pickup Point: Shewrapara
                    </div>
                  </div>
                </div>
              </td>
              <td>
                Driver Name: John Doe
                <br />
                <span className="badge badge-ghost badge-sm">
                  +8801234-567890
                </span>
              </td>
              <td>Pickup Time: 07:00 AM</td>
              <td>Departure Time: 08:00 AM</td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/KWGt2yz/gub-bus.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Bus Number: GRN101</div>
                    <div className="text-sm opacity-50">
                      Pickup Point: Shewrapara
                    </div>
                  </div>
                </div>
              </td>
              <td>
                Driver Name: John Doe
                <br />
                <span className="badge badge-ghost badge-sm">
                  +8801234-567890
                </span>
              </td>
              <td>Pickup Time: 07:00 AM</td>
              <td>Departure Time: 08:00 AM</td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/KWGt2yz/gub-bus.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Bus Number: GRN101</div>
                    <div className="text-sm opacity-50">
                      Pickup Point: Shewrapara
                    </div>
                  </div>
                </div>
              </td>
              <td>
                Driver Name: John Doe
                <br />
                <span className="badge badge-ghost badge-sm">
                  +8801234-567890
                </span>
              </td>
              <td>Pickup Time: 07:00 AM</td>
              <td>Departure Time: 08:00 AM</td>
            </tr>
            {/* row 6 */}
            <tr>
              <th>6</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.ibb.co/KWGt2yz/gub-bus.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Bus Number: GRN101</div>
                    <div className="text-sm opacity-50">
                      Pickup Point: Shewrapara
                    </div>
                  </div>
                </div>
              </td>
              <td>
                Driver Name: John Doe
                <br />
                <span className="badge badge-ghost badge-sm">
                  +8801234-567890
                </span>
              </td>
              <td>Pickup Time: 07:00 AM</td>
              <td>Departure Time: 08:00 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusLocationTable;
