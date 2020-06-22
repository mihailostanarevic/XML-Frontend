import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
// import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularSplitModule } from 'angular-split';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { LimitRedirectComponent } from './auth/limit-redirect/limit-redirect.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LightSearchComponent } from './pages/search-forms/light-search/light-search.component';
import { AdCardComponent } from './pages/ad-card/ad-card.component';
import { AdDetailsComponent } from './pages/details/ad-details/ad-details.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { CarBrandComponent } from './pages/create-forms/car-brand/car-brand.component';
import { CarModelComponent } from './pages/create-forms/car-model/car-model.component';
import { FuelTypeComponent } from './pages/create-forms/fuel-type/fuel-type.component';
import { CarClassComponent } from './pages/create-forms/car-class/car-class.component';
import { GearshiftTypeComponent } from './pages/create-forms/gearshift-type/gearshift-type.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LimitRedirectComponent,
    DashboardComponent,
    LightSearchComponent,
    AdCardComponent,
    AdDetailsComponent,
    ReservationsComponent,
    CarBrandComponent,
    CarModelComponent,
    FuelTypeComponent,
    GearshiftTypeComponent,
    CarClassComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    NzFormModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NzIconModule,
    AngularSplitModule.forRoot(),
    CommonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' },
  { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }