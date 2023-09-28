import { match } from "ts-pattern";
import { client } from "main.js";
import { getUserTubliInfo } from "@/services/api.js";
export const routers = () => {
    client.on("ready", () => {
        console.log(`Logged in as ${client.user?.tag}!`);
    });
    client.on("error", async () => {
        console.log("error");
    });
    client.on("interactionCreate", async (interaction) => {
        if (!interaction.isChatInputCommand())
            return;
        if (interaction.commandName === "tublibot") {
            const { name, value } = interaction.options.data[0];
            const result = match(name)
                .with("lookup", async () => await getUserTubliInfo(value))
                .with("opensource", () => { });
            console.log(result);
        }
    });
};
