import { type NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headersList = headers();

  console.log(requestHeaders.get("Authorization"));
  console.log(headersList.get("Authorization"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html", //If there isn't any headers you will see the text like "<h1>Profile API data</h1>, but with text/html we can see the HTML page"
    },
  });
}