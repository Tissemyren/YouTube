import { Client, Collection, Events } from "discord.js";

declare module "discord.js" {
    interface Client {
        commands: Collection<string, any>;
        buttons: Collection<string, any>;
    }
}

const client = new Client({
    intents: [
        "Guilds",
    ],
});

client.commands = new Collection();
client.buttons = new Collection();

(async () => {

    client.once(Events.ClientReady, () => {
        console.log("Bot is online!");
    });
    
    client.login(process.env.BOT_TOKEN);
})();

export { client};