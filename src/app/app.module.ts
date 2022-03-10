import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieComponent } from './components/movie/movie.component';
import { TvComponent } from './components/tv/tv.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetyearPipe } from './pipe/getyear.pipe';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthService } from './Service/auth.service';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { environment } from '../environments/environment';
import { HotToastModule } from '@ngneat/hot-toast';
import { SafePipe } from './pipe/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MovieComponent,
    TvComponent,
    HomeComponent,
    ContactsComponent,
    GetyearPipe,
    MoviedetailsComponent,
    SignupComponent,
    SigninComponent,
    PagenotfoundComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HotToastModule.forRoot(),
    
  ],
  providers: [AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
