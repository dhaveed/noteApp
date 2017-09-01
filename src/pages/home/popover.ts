
import { Component } from '@angular/core';
import { ViewController, PopoverController, AlertController } from 'ionic-angular';
@Component({
  template: `
      <button ion-item (click)="newFolder()" no-lines>New Folder</button>
      <button ion-item (click)="close()" *ngIf="noNote" no-lines>Delete</button>
      <button ion-item (click)="close()" *ngIf="noNote" no-lines>Delete All</button>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, public popCtrl: PopoverController, public alertCtrl: AlertController) {}

  close() {
    this.viewCtrl.dismiss();
  }

   public newFolder(){
     let prompt = this.alertCtrl.create({
      title: 'New Folder',
      inputs: [
        {
          name: 'folderName',
          placeholder: 'Folder Name'
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
          text: 'Ok',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
   }
}