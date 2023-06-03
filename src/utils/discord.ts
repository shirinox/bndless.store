import axios from 'axios';

export const announceDiscordWebhook = async (title: string) => {
	await axios.post(process.env.DISCORD_WEBHOOK as string, {
		embeds: [{ title, color: '3080403' }],
	});
};
