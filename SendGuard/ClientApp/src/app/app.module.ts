import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SgHeaderComponent } from './components/sg-header/sg-header.component';
import { SgNavComponent } from './components/sg-nav/sg-nav.component';
import { SgButtonConnectorComponent } from './components/sg-button-connector/sg-button-connector.component';
import { SgLogoComponent } from './components/sg-logo/sg-logo.component';
import { SgHomePageComponent } from './components/sg-home-page/sg-home-page.component';
import { SgSendPageComponent } from './components/sg-send-page/sg-send-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SgHeaderComponent,
    SgNavComponent,
    SgButtonConnectorComponent,
    SgLogoComponent,
    SgHomePageComponent,
    SgSendPageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SgHomePageComponent, pathMatch: 'full' },
      { path: 'send/:cur', component: SgSendPageComponent, pathMatch: 'full' },
      { path: 'receive/:cur', component: SgSendPageComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
