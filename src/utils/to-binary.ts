function toBinary(dec: string): string {
	const x = +dec;
	if (isNaN(x)) {
		return `"${dec}" is not a number`;
	}
	return (x >>> 0).toString(2);
}

export { toBinary };
