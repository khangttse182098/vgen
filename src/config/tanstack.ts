"use client";
import { useQuery } from "@tanstack/react-query";

export const queryGet = (queryKey: string[], queryFn: () => Promise<any>) => {
  return useQuery({ queryKey, queryFn });
};
