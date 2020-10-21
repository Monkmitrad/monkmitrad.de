import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TitleComponent } from './title/title.component';
import { CreativeWorkComponent } from './creative-work/creative-work.component';
import { MusicComponent } from './music/music.component';
import { PhotographyComponent } from './photography/photography.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: TitleComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'creative-work', component: CreativeWorkComponent },
  { path: 'music', component: MusicComponent },
  { path: 'photography', component: PhotographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
