import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NotebookComponent } from './views/notebook/notebook.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';
import { PlaystationComponent } from './views/playstation/playstation.component';
import { CelularComponent } from './views/celular/celular.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormloginComponent } from './views/formlogin/formlogin.component';
import { FormcadastroComponent } from './views/formcadastro/formcadastro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotebookComponent,
    PcgamerComponent,
    PlaystationComponent,
    CelularComponent,
    HeaderComponent,
    FooterComponent,
    FormloginComponent,
    FormcadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
