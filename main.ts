import { REST, Routes, Client, GatewayIntentBits } from "discord.js";
import { routers } from "./src/route/routes.js";
import { CLIENT_ID, TOKEN } from "./src/utils/config.js";
import { commands } from "./src/utils/commands.js";

export const rest = new REST({ version: "10" }).setToken(TOKEN!);

const main = async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID!), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
main();

export const client: Client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.login(TOKEN!);

routers();
