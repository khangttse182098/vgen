import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API,
});

// api.interceptors.

export const getFetch = async (url: string) => {
  const res = await api.get(url);
  return res.data;
};
