try{
	try{
		throw new Error("oops");
	}catch(ex) {
		console.log("inner",ex.message);
	}finally {
		console.log("finally");
	}
}catch (ex) {
	console.log("outer",ex.message);
}finally{
	console.log("finally two");
}