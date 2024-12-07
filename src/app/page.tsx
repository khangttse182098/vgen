"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todos from "./todo/page";

const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}
