import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();

  cookies().set("resultPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log(requestHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));
  console.log(theme);
  console.log(cookies().get("resultPerPage"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html", //If there isn't any headers you will see the text like "<h1>Profile API data</h1>, but with text/html we can see the HTML page"
      "Set-Cookie": "theme=dark",
    },
  });
}
