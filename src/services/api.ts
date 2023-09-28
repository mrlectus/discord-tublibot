import { API_KEY } from "../utils/config.js";

export const getUserTubliInfo = async (
  value: string | number | boolean | undefined
) => {
  try {
    const response = await fetch(
      `https://t74hnvwwsd.execute-api.us-east-1.amazonaws.com/dev/ft/tublibot/lookup/user/${value}`,
      {
        headers: {
          "Content-Type": "applicetion/json",
          "x-api-key": API_KEY!,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
