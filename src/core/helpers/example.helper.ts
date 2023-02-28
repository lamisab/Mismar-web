
const adminRule = "admin";
export const hasAdminAccess = (rules: string[] = []): boolean => {
	return rules.includes(adminRule);
};

export const getRoundomNumber = (): number => {
	return parseInt((Math.random() * 10).toString());
};

// pagination limit,offset
export const getLimitOffset = (
	pageNo: number = 1,
	resultsInPage: number = 20
) => {
	return {
		limit: resultsInPage,
		offset: (pageNo - 1) * resultsInPage,
	};
};