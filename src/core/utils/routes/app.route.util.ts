export class AppRoute {
	static getCommonQuestionsUrl(): string {
		return "/faq";
	}
	static getTermsAndConditionsUrl(): string {
		return "/terms-and-conditions";
	}
	static getPrivacyUrl(): string {
		return "/privacy";
	}
	static getSupportUrl(): string {
		return "/contact";
	}

	static getForbiddenUrl(): string {
		return "/forbidden";
	}

	static get404Url(): string {
		return "/404";
	}
}
