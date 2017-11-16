import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
	switches: Array<any> = ['off','on','off','off','off','off','on','off','off','off']

	switch = {index: 0};

	changeSwitch(arrIndex){
		return arrIndex;
	}

	printVal(value){
		console.log(value);
	}

	changeVal(index){
		if(this.switches[index] === 'off'){
			this.switches[index] = 'on'
		}else{
			this.switches[index] = 'off'
		}
	}
}

