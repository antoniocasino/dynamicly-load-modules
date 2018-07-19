import { NgModule } from '@angular/core';
import { Component, Inject, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
} from '@angular/material';

import { ComponentLoaderService } from './services/component-loader.service';
import { RouterLoaderService } from './services/router-loader.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouteSelfServiceComponent } from './route-self-service/route-self-service.component';
import { ModuleFactoryLoader } from './services/module-loader.service';
import { SettingsComponent } from './settings/settings.component';
import { SettingsModule } from './settings/settings.module';

const appRoutes: Routes = [
  { path: 'hello', component: HelloComponent, data: { icon: "pan_tool" } },
  { path: '**', component: NotFoundComponent, data: { icon: "warning" } },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,

     SettingsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
    HomeComponent,
    NotFoundComponent,
    RouteSelfServiceComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ComponentLoaderService,
    RouterLoaderService,
    ModuleFactoryLoader,
  ],
  entryComponents: [
    HelloComponent,
    TestComponent,
    HomeComponent,
    RouteSelfServiceComponent,
    SettingsComponent
  ]
})
export class AppModule {
  constructor(private routeLoader: RouterLoaderService) {
  }
  ngOnInit(){
    this.routeLoader.loadEndpointFromAPI();
  }
}
