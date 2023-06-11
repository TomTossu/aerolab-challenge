export const getProducts = async () => {
  try {
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/products",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgzODVlYTE3NzA5MTAwMjAyZDI1OTMiLCJpYXQiOjE2ODYzNDEwOTh9.ZE-ij3cOXLaoDmWeSv4Mxqje7mD8gQ2SDkljhWgxCQc",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Invalid request");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed", error);

    throw error;
  }
};
