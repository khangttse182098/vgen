"use client";
import { useQuery } from "@tanstack/react-query";

export const queryGet = <T>(queryKey: string[], queryFn: () => Promise<T>) => {
  return useQuery({ queryKey, queryFn });
};
