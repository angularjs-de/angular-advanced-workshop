import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { DateComponentComponent } from './date-component/date-component.component';
import { environment } from '../environments/environment';
import { translocoLoader } from './transloco.loader';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';

@NgModule({
  declarations: [AppComponent, MainNavigationComponent, DateComponentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TranslocoModule
  ],
  bootstrap: [AppComponent],
  providers: [{
      provide: TRANSLOCO_CONFIG,
      useValue: {
        listenToLangChange: false,
        defaultLang: 'en',
        fallbackLang: 'de',
        prodMode: environment.production,
        scopeStrategy: 'shared'
      } as TranslocoConfig
    },
    translocoLoader
  ]
})
export class AppModule {}
