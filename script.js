function fibonacci(num) {
	if(num==1) return 0;
	if(num==2) return 1;
	let a=0;
	let b=1;
	for(let i=3;i<=num;i++) {
		let c=a+b;
		a=b;
		b=c;
	}
	return c;
}

module.exports = fibonacci;
