import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBus = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: buses = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["buses"],
    queryFn: async () => {
      const res = await axiosPublic.get("/buses");
      return res.data;
    },
  });

  return [buses, loading, refetch];
};

export default useBus;
