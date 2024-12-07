import { getData } from "@/config/axios";
import { queryGet } from "@/config/tanstack";

const Todos = () => {
  const query = queryGet(["todos"], async () => {
    const res = await getData(
      "https://67542b5836bcd1eec8506977.mockapi.io/user"
    );
    return res.data;
  });

  if (query.isLoading) return <div>Loading...</div>;
  if (query.isError) return <div>Error: {query.error.message}</div>;
  return (
    <div>
      <ul>
        {query.data?.map((user: any) => (
          <li key={user.id}>{user.testname}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
