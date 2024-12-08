"use client";
import { getData } from "@/config/axios";
import { queryGet } from "@/config/tanstack";

interface TData {
  testname: string;
  id: string;
}
export default function Home() {
  const { data, isError, isLoading } = queryGet<TData[]>(
    ["user"],
    getData("user")
  );
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {data?.map((item: TData) => (
        <div key={item.id}>{item.testname}</div>
      ))}
    </div>
  );
}
