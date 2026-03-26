export const isValidLink = (link: string): boolean => {
	try {
// --- this Validate URLs using the URL constructor to prevent malformed links :)

		new URL(link);
		return true;
	} catch {
		return false;
	}
};
