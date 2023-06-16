export const getProducts = async () => {
  const URL = "https://coding-challenge-api.aerolab.co/products";

  try {
    const response = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: process.env.REACT_APP_API_KEY,
      },
    });

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

export const redeemProduct = async (productId) => {
  try {
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/redeem",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: process.env.REACT_APP_API_KEY,
        },
        body: JSON.stringify({ productId: productId }),
      }
    );

    if (!response.ok) {
      throw new Error("Invalid Request");
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.error("API request failed", error);

    throw error;
  }
};
