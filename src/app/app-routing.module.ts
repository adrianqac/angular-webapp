import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';


const routes: Routes = [
	{path:'', component: HomeComponent},
	{path:'home', component: HomeComponent},
	{path:'productos', component: ProductosListComponent},
	{path:'crear-producto', component: ProductoAddComponent},
	{path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
