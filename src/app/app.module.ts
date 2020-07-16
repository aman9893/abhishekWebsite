import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material';
import { TpyeFeaturesComponent } from './tpye-features/tpye-features.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HowWorkComponent } from './how-work/how-work.component';
import { SliderComponent } from './slider/slider.component';
import { ClientSayesComponent } from './client-sayes/client-sayes.component';
import { InvestmentAddComponent } from './investment-add/investment-add.component';
import { BlogComponent } from './blog/blog.component';
import { CvilworkComponent } from './cvilwork/cvilwork.component';
import { BankinfoComponent } from './bankinfo/bankinfo.component';
import { LeagalComponent } from './leagal/leagal.component';

@NgModule({
  declarations: [
    AppComponent,
    TpyeFeaturesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HowWorkComponent,
    SliderComponent,
    ClientSayesComponent,
    InvestmentAddComponent,
    BlogComponent,
    CvilworkComponent,
    BankinfoComponent,
    LeagalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
