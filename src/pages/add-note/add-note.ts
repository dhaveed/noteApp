import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, PopoverController } from 'ionic-angular';
import { AddPopPage } from './pop';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

	//date vars
	private date = new Date();
	public time:string = this.date.getHours() + ":" + (this.date.getMinutes() < 10 ? "0" + this.date.getMinutes() : this.date.getHours());
	public fulldate = this.date.getMonth() + "/" + this.date.getDay() + "/" + this.date.getFullYear();

	//stats vars
	public typed = 0;
	public note:any = "";
	public isset = true;
	public noteLength = this.note.length;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public alertCtrl: AlertController, 
		public toastCtrl: ToastController,
		public popCtrl: PopoverController
	) { 
		/*constructorrr...*/
		//console.log(this.watchNote());
		this.noteLength = this.note.length;
		//this.lengthHandler();
	}

  public more(e){
  	let popover = this.popCtrl.create(AddPopPage);
  	popover.present({
  		ev: e
  	});
  }

  public maxLimToast(){
  	this.toastCtrl.create({
  		message: "Sorry, you can only input 1000 characters",
  		duration: 1500
  	}).present();
  	return true;
  };
  //end class
}
