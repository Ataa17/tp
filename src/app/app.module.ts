import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // added

@NgModule({
  declarations: [
    // ...existing declarations...
  ],
  imports: [
    BrowserModule,
    FormsModule, // added
    // ...existing imports...
  ],
  providers: [
    // ...existing providers...
  ],
  bootstrap: [
    // ...existing bootstrap...
  ]
})
export class AppModule { }