class NatGen {
	constructor() {
		this.c = 0;
	}

	next() {
		this.c++;
	}

	current() {
		return this.c;
	}
}

const myNatGen = new NatGen();

myNatGen.next();

console.log(myNatGen.current());
