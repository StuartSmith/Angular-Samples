import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent} from './home/welcome.component';

const routes: Routes = [
  {path:'products',       component:ProductListComponent},
  {path:'products/:id',   component:ProductDetailComponent},
  {path:'about',   component:WelcomeComponent},
  {path:'',redirectTo:'products',   pathMatch:'full'},
  {path:'**',redirectTo:'about',   pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
