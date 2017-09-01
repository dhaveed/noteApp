import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PopoverPage } from '../pages/home/popover';
import { NewFolderPage } from '../pages/home/newfolder';
import { AddNotePage } from '../pages/add-note/add-note';
import { AddPopPage } from '../pages/add-note/pop';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverPage,
    NewFolderPage,
    AddNotePage,
    AddPopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PopoverPage,
    NewFolderPage,
    AddNotePage,
    AddPopPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
