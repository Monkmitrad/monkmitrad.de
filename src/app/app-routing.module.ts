import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TitleComponent } from './title/title.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: TitleComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
