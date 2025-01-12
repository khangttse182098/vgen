import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

// Cấu hình ngôn ngữ + message dynamic
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieStore = await cookies();
  // Lấy ngôn ngữ từ cookie đã set => Nếu không có thì mặc định là "vi"
  const locale = cookieStore.get("language")?.value
    ? cookieStore.get("language")?.value
    : "vi";

  // Trả về kiểu ngôn ngữ + message
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
