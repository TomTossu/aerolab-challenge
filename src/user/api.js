export const fetchUser = async () => {
  try {
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/user/me",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: process.env.REACT_APP_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Invalid Request");
    }

    let data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed", error);

    throw error;
  }
};

export const addPoints = async (amount) => {
  try {
    const response = await fetch(
      "https://coding-challenge-api.aerolab.co/user/points",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: process.env.REACT_APP_API_KEY,
        },
        body: JSON.stringify({ amount: amount }),
      }
    );

    if (!response.ok) {
      throw new Error("Invalid Request");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API request failed", error);

    throw error;
  }
};
