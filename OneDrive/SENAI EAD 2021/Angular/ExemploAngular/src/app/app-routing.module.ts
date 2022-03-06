import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularComponent } from './views/celular/celular.component';
import { FormcadastroComponent } from './views/formcadastro/formcadastro.component';
import { FormloginComponent } from './views/formlogin/formlogin.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { NotebookComponent } from './views/notebook/notebook.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';
import { PlaystationComponent } from './views/playstation/playstation.component';

const routes: Routes = [
  { path: "" , component: HomeComponent },
  { path: "header" , component: HeaderComponent},
  { path: "notebook" , component: NotebookComponent},
  { path: "pcgamer" , component: PcgamerComponent},
  { path: "playstation" , component: PlaystationComponent},
  { path: "celular" , component: CelularComponent},
  { path: "formlogin" , component: FormloginComponent},
  { path: "formcadastro" , component: FormcadastroComponent}
]  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
