import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatService } from "./chat.service";
import { ChatComponent } from "./chat/chat.component";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
