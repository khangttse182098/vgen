import { getFetch } from "@/config/axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function Todos() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"], // Unique key to identify the query
    queryFn: getFetch("https://67542b5836bcd1eec8506977.mockapi.io/user"), // Function to fetch data
  });
  return <div></div>;
}
