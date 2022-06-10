import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormatLinksPipe } from '../app/pipes/formateaURL.pipe';

import { AppComponent } from './app.component';
import { TestCompComponent } from './components/test-comp/test-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    FormatLinksPipe,
    TestCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
