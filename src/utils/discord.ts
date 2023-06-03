import axios from 'axios';

export const announceDiscordWebhook = async (title: string) => {
	await axios.post(
		'https://discord.com/api/webhooks/1109516958560424016/1X_hpvWZEh5w416xcw96T-xPLCCsrh5z4hyLiT6R-VN9rYM6Qw3I34JcPMhdhBQyxwZB',
		{
			embeds: [{ title, color: '3080403' }],
		}
	);
};
