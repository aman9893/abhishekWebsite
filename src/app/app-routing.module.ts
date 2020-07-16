import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HowWorkComponent } from './how-work/how-work.component';
import { BlogComponent } from './blog/blog.component';
import { CvilworkComponent } from './cvilwork/cvilwork.component';
import { BankinfoComponent } from './bankinfo/bankinfo.component';
import { LeagalComponent } from './leagal/leagal.component';

export const  AppRoutes: Routes = [

  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'howwork', component: HowWorkComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'product', component: CvilworkComponent },
  { path: 'bankinfo', component: BankinfoComponent },
  { path: 'legalDoc', component: LeagalComponent },
  
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: HomeComponent }
  ]
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
