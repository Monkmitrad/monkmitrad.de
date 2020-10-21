import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CreativeWorkComponent } from './creative-work/creative-work.component';
import { PhotographyComponent } from './photography/photography.component';
import { MusicComponent } from './music/music.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    FooterComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    CreativeWorkComponent,
    PhotographyComponent,
    MusicComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
