import { Accounts } from '@/xata';

const SKINS_RARITY = {
	DEFAULT: 1,
	EPIC: 1.05,
	LEGENDARY: 1.1,
	RARE: 1.35,
	ULTIMATE: 1.55,
	MYTHIC: 1.85,
};

export const calculatePrice = (skins: string[]) => {
	const accountRarity: string[] = [];
	skins.map((skin) => {
		accountRarity.push(skin.trimStart().split(' ')[0]);
	});
	let defaultSkins = 0;
	const priceMultiplier = Number(
		accountRarity
			.map((rarity) => {
				rarity === 'DEFAULT' && defaultSkins++;
				return SKINS_RARITY[rarity as keyof typeof SKINS_RARITY];
			})
			.reduce((a, b) => a * b, 1)
			.toFixed(2)
	);
	const finalPrice = priceMultiplier * 1.5;
	return finalPrice;
};

export const getSkinArray = (account: Accounts) => {
	return account.skins?.split(',');
};
