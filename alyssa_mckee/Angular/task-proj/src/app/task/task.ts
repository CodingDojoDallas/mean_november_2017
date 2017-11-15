interface TaskInterface {
	name: string;
}

export class Task implements TaskInterface{
	name: string;
	constructor(name = ""){
		this.name = name;
	}
}
