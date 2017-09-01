import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
@Component({
  template: `
    <ion-list no-lines>
      <ion-list-header>New Folder</ion-list-header>
        <ion-input></ion-input>
        <ion-buttons end>
          <button clear (click)="close">Cancel</button>
          <button clear (click)="close">Ok</button>
        </ion-buttons>
    </ion-list>
  `
})
export class NewFolderPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}