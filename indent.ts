// Here I would like to force an indent before ? and before :
export const theValue = document.location.search === ""
? "empty-search"
: "not-empty-search";

// here I'd like to force an indent before .
export const zero = ["one"]
.map((hi) => hi.toUpperCase());

export function noOp() {
	return 'noOp';
}
