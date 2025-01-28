import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { TopicComponent } from './pages/topic/topic.component';
import { SharedModule } from './components/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
const PAGES = [ErrorPageComponent, HomeComponent, TopicComponent];
@NgModule({
  declarations: [AppComponent, ...PAGES],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.HTML,
    }),
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
