import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{	title = 'Retro Barcode';
	colorArray = [];

	fillColors() {
		for (let i = 0; i < 10; i++){
			const randNum = (Math.floor(Math.random() * 6) ) + 1;
			if (randNum === 1) {
				this.colorArray.push('DarkSeaGreen');
			} else if (randNum === 2) {
				this.colorArray.push('MediumBlue');
			} else if (randNum === 3) {
				this.colorArray.push('MediumAquaMarine');
			} else if (randNum === 4) {
				this.colorArray.push('DarkBlue');
			} else if (randNum === 5) {
				this.colorArray.push('CadetBlue');
			} else if (randNum === 6) {
				this.colorArray.push('Chartreuse');
			} else if (randNum === 7) {
				this.colorArray.push('IndianRed');
			}
		}
	}
	ngOnInit(){
		this.fillColors();
	}
}
