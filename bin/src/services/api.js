import { API_KEY } from "@/utils/config.js";
export const getUserTubliInfo = async (value) => {
    try {
        const response = await fetch(`https://t74hnvwwsd.execute-api.us-east-1.amazonaws.com/dev/ft/tublibot/lookup/user/${value}`, {
            headers: {
                "Content-Type": "applicetion/json",
                "x-api-key": API_KEY,
            },
        });
        return await response.json();
    }
    catch (error) {
        console.log(error);
    }
};
