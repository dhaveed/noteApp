import { Component } from '@angular/core';
import { ViewController, PopoverController, AlertController } from 'ionic-angular';
@Component({
  template: `
      <button ion-item no-lines (click)="showEditTitle()">Edit Title</button>
      <button ion-item no-lines>Save</button>
      <button ion-item no-lines>Share</button>
      <button ion-item no-lines>Delete</button>
  `
})
export class AddPopPage {
  constructor(public viewCtrl: ViewController, public popCtrl: PopoverController, public alertCtrl: AlertController) {}

  close() {
    this.viewCtrl.dismiss();
  }

  private showEditTitle(){
    let alert = this.alertCtrl.create({
      title: "Edit Title",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Save clicked');
          }
        }
      ],
      enableBackdropDismiss: true
    });
    alert.present();
  };
}