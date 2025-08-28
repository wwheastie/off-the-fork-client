import { setCorsHeaders } from "../custommiddleware";

// GET /api/leagues (proxied to meals endpoint)
export const GET = async (request) => {
  const response = new Response();

  // Set CORS headers
  const corsResponse = setCorsHeaders(request, response);
  if (corsResponse) return corsResponse; // Handles OPTIONS early, if applicable
  return new Response("Hello world", {
    status: 200,
    headers: response.headers,
  });
  // try {
  //   const upstream = await fetch(
  //     "https://off-the-fork-server.onrender.com/api/v1/meals/current",
  //     { cache: "no-store" }
  //   );

  //   if (!upstream.ok) {
  //     return new Response(JSON.stringify({ error: "Failed to fetch meals" }), {
  //       status: upstream.status,
  //       headers: {
  //         ...Object.fromEntries(response.headers),
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   }

  //   const data = await upstream.json();

  //   return new Response(JSON.stringify(data), {
  //     status: 200,
  //     headers: {
  //       ...Object.fromEntries(response.headers),
  //       "Content-Type": "application/json",
  //     },
  //   });
  // } catch (error) {
  //   console.error(error);
  //   return new Response(
  //     JSON.stringify({ error: "Server error fetching meals" }),
  //     {
  //       status: 500,
  //       headers: {
  //         ...Object.fromEntries(response.headers),
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // }
};
