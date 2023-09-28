import { match } from "ts-pattern";
import { client } from "../../main.js";
import { getUserTubliInfo } from "../services/api.js";
import { userInfo } from "../markup/userinfo.js";

export const routers = async () => {
  client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
  });

  client.on("error", async (error) => {
    console.log("error", error);
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "tublibot") {
      const { name, value } = interaction.options.data[0];
      await match(name)
        .with("lookup", async () => {
          const { profile } = await getUserTubliInfo(value);
          const result = userInfo(profile);
          interaction.reply({ content: result });
        })
        .with("opensource", () => {
          return "open";
        })
        .otherwise(() => ({ error: "something went wrong" }));
    }
  });
};
