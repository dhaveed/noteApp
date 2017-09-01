import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { PopoverPage } from './popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public noNote = true;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popCtrl: PopoverController) {

  }

  public addNote(){
  	this.modalCtrl.create(AddNotePage).present();
  }

  public showPop1(e){
  	let pop1 = this.popCtrl.create(PopoverPage, {
  		showBackdrop: false
  	});
  	pop1.present({
  		ev: e
  	})
  }

  public createNewFolder(){

  }
}
