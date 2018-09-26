import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarItemComponent } from './toolbar-item/toolbar-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestSpaceComponent } from './test-space/test-space.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ToolbarItemComponent,
    TestSpaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
