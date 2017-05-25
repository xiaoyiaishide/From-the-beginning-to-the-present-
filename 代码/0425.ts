export interface User {
	id?:string;
	email:string;
	password:string;
	repeat: string;
	address: string;
}

export interface Address {
	province: string;
	city: string;
	area: string;
	addr: string;
}