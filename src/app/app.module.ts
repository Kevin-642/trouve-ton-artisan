import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { AccessibilitesComponent } from './accessibilites/accessibilites.component';
import { CookiesComponent } from './cookies/cookies.component';
import { DonneesPersonnellesComponent } from './donnees-personnelles/donnees-personnelles.component';
import { BatimentComponent } from './batiment/batiment.component';
import { ServicesComponent } from './services/services.component';
import { FabricationComponent } from './fabrication/fabrication.component';
import { AlimentaireComponent } from './alimentaire/alimentaire.component';
import { TopArtisanPipe } from './top-artisan.pipe';
import { DetailArtisanComponent } from './detail-artisan/detail-artisan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeArtisansComponent } from './liste-artisans/liste-artisans.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArtisansDataServiceService } from './artisans-data-service.service';
import { RechercheResultsComponent } from './recherche-results/recherche-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MentionsLegalesComponent,
    AccessibilitesComponent,
    CookiesComponent,
    DonneesPersonnellesComponent,
    BatimentComponent,
    ServicesComponent,
    FabricationComponent,
    AlimentaireComponent,
    TopArtisanPipe,
    DetailArtisanComponent,
    ListeArtisansComponent,
    PageNotFoundComponent,
    RechercheResultsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //formuaire
    ReactiveFormsModule,
    //Nav'Recherche'
    FormsModule
  ],
  providers: [ArtisansDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
