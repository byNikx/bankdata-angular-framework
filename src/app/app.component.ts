import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  tabs: any[] = [
  	{
  	  label: 'Home',
  	  url: 'home'
  	},{
  	  label: 'About',
  	  url: 'about'
  	},{
  	  label: 'Tour',
  	  url: 'tour'
  	},{
  	  label: 'Contact',
  	  url: 'contact'
  	},{
  	  label: 'Maps',
  	  url: 'maps'
  	}
  ]

  constructor(){  	
	console.log("tabs", this.tabs[0].url);
  }

}

// const PAGES = {
// 	'_1': 'home',
// 	'_2': 'about',
// 	'_3': 'tour',
// 	'_4': 'contact',
// 	'_5': 'maps'
// }
// class Tab{
	
// 	private _label:string;
// 	private _code:string;
// 	constructor(private tabLabel: string, private tabCode: string) {
// 	  this._label = tabLabel;
// 	  this._code = tabCode;
// 	}

// 	getUrl(): string {
// 	  const key = `_${this.code}`;
// 	  return PAGES[key];
// 	}

// 	get label(): string {
// 	  return this._label;	
// 	}

// 	get code(): string {
// 	  return this._code;
// 	}
// }
