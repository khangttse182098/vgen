import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_API,
});

export const getData = (url: string) => {
  return api.get(url);
};

export const createData = (url: string, data: object) => {
  return api.post(url, data);
};

export const updateData = (id: string, data: object, url: string) => {
  return api.put(`${url}/${id}`, data);
};

export const deleteData = (id: string, url: string) => {
  return api.delete(`${url}/${id}`);
};
