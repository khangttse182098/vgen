"use server";
// truy cập + điều khiển cookies trên server side
import { cookies } from "next/headers";

export default async function setLanguageValue(value: string) {
  const cookieStore = await cookies();
  //set cookie có tên language với 1 giá trị được truyền vào => en hoặc vi
  cookieStore.set("language", value);
}
