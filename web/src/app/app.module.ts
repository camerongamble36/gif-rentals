import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SplashScreenComponent } from './shared/splash-screen/splash-screen.component';
import { HomeComponent } from './pages/home/home.component';
import { HomesListComponent } from './pages/homes-list/homes-list.component';
import { ApplyComponent } from './pages/apply/apply.component';
import { FeaturesComponent } from './pages/misc/features/features.component';
import { AboutComponent } from './pages/misc/about/about.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeDetailComponent } from './pages/homes-list/home-detail/home-detail.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentComponent } from './components/comments-list/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SplashScreenComponent,
    HomeComponent,
    HomesListComponent,
    ApplyComponent,
    FeaturesComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    HomeDetailComponent,
    CommentsListComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
