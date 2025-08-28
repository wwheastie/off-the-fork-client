// Define allowed origins
const allowedOrigins = ["https://meal-preparation-front-end.onrender.com/"];

// Function to handle CORS headers
function setCorsHeaders(request, response) {
  const origin = request.headers.get("origin");
  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  response.headers.set("Access-Control-Allow-Credentials", "true");

  // Handle preflight request
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: response.headers,
    });
  }
  return null;
}

export { setCorsHeaders as setCorsHeaders };
