import { setCorsHeaders } from "../custommiddleware";

// GET /api/test
export const GET = async (request) => {
  const response = new Response();

  // Set CORS headers
  const corsResponse = setCorsHeaders(request, response);
  if (corsResponse) return corsResponse; // If it's an OPTIONS request, return early

  try {
    const upstream = await fetch(
      "https://off-the-fork-server.onrender.com/api/v1/meals/current",
      { cache: "no-store" }
    );

    if (!upstream.ok) {
      let data1 = "Error";
      let data2 = "unsuccessful get call";

      const result = { data1, data2 };

      response.headers.set("Content-Type", "application/json");
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: response.headers,
      });
    }
    const dataFetched = await upstream.json();

    const success = { response: "success" };
    console.log("data1:", dataFetched, "data2:", success);
    return new Response(JSON.stringify(dataFetched), {
      status: 200,
      headers: response.headers,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
