import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TvComponent } from './components/tv/tv.component';
import { AuthGuard } from './Service/guard/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'movie' , canActivate: [AuthGuard], component:MovieComponent},
  {path:'movie/:id' , canActivate: [AuthGuard],  component:MoviedetailsComponent},
  {path:'tv' ,  canActivate: [AuthGuard], component:TvComponent},
  {path:'tv/:id' , canActivate: [AuthGuard], component:MoviedetailsComponent},
  {path:'contact' , component:ContactsComponent},
  {path:'signin' , component:SigninComponent},
  {path:'signup' , component:SignupComponent},
  {path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
