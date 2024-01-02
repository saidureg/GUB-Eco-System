import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/shared/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistoryAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle heading="PAYMENT HISTORY" subHeading="At a Glance!" />
      <div className="bg-white mx-10">
        <h3 className="p-6 text-3xl font-semibold">
          Total Payment: {payments?.length}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Number</th>
                <th>Total Price</th>
                <th>Transaction Id</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1} </th>
                  <td>{item.email}</td>
                  <td>{item.Number}</td>
                  <td>{item.price}</td>
                  <td>{item.transactionId}</td>

                  <td>
                    {/* Immediately Invoked Function Expression (IIFE) */}
                    {(() => {
                      const date = new Date(item.date);
                      const options = {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC",
                      };
                      return date.toLocaleDateString("en-US", options);
                    })()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryAdmin;
