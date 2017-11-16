import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Http } from '@angular/http';
@Component({
  selector: 'app-weather-output',
  templateUrl: './weather-output.component.html',
  styleUrls: ['./weather-output.component.css']
})
export class WeatherOutputComponent implements OnInit {
	city = "";
	humidity :number;
	cur_temp :number;
	hi_temp :number;
	lo_temp :number;
	statuses :string[];
	input: string;
	err: string;
	constructor(private _route: ActivatedRoute, private _http :Http ) { 
		this._route.paramMap.subscribe((params)=>{
			console.log(params.get('city'));
			this.city = params.get('city');
			this.input = "";
			this.err = "";
			let url = "http://api.openweathermap.org/data/2.5/weather?q="+this.city+"&units=imperial&APPID=b9485324568a369ee726606e5c7446dd";
			//let url = "";
			_http.get(url).subscribe((res)=>{
				let data = res.json();
				console.log(data);
				this.humidity = data.main.humidity
				this.cur_temp = data.main.temp;
				this.hi_temp = data.main.temp_max;
				this.lo_temp = data.main.temp_min;
				
				this.statuses = [];
				for (let i = 0; i< data.weather.length; i++){
					this.statuses.push(data.weather[i].description);
				}
				
			},(err)=>{
				this.err = err.json().message
				this.humidity = 0;
				this.cur_temp = 0;
				this.hi_temp = 0;
				this.lo_temp = 0;
				
				this.statuses = [];
			});
			
			
			
		})
	}

	ngOnInit() {
	
	}
	
	onSubmit(event){
		event.preventDefault();
	}
	
}
