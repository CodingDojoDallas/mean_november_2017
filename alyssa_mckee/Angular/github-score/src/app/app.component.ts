import { Component } from '@angular/core';
import { GithubService } from './github.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	username :string;
	score :number;
	working :boolean;
	avatar :string;
	message = {color: "", content: ""};
	constructor(private _githubService :GithubService){
		this.score = 0;
		this.username = "";
		this.avatar = "";
		this.working = false;
	}
	onSubmit(event){
		event.preventDefault();
		console.log("submitting");
		
		this.message = {color:"black", content:"looking up user..."};
		this.avatar = "";
		
		this.working = true;
		
		
		this._githubService.getUserData(this.username)
		.then((data)=>{
			console.log("yay!", data.json());
			//calc score
			//save score
			this.score = data.json().followers + data.json().public_repos;
			//change message
			if (this.score >= 200){
				this.message.color = "blue";
				this.message.content = "GitHub Elite!";
			}
			else if (this.score >= 100){
				this.message.color = "green";
				this.message.content = "Great job!";
			}
			else if (this.score >= 50){
				this.message.color = "black";
				this.message.content = "Doing good!";
			}
			else if (this.score >= 20){
				this.message.color = "orange";
				this.message.content = "A decent start!";
			}
			else{
				this.message.color = "red";
				this.message.content = "Needs Work!";
			}
			this.avatar = data.json().avatar_url;
			this.working = false;
			
		})
		.catch((error)=>{
			console.log("nope...", error.json());
			this.message.color = "black";
			this.score = 0;
			this.message.content = error.json().message;
			this.avatar = "";
			this.working = false;
		});
		
		
	}
	
}
