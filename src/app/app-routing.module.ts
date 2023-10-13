import { UserDetailComponent } from './page/user-detail/user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { AdminComponent } from './page/admin/admin.component';
import { CartComponent } from './page/cart/cart.component';
import { CollectionComponent } from './page/collection/collection.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login/login.component';
import { RegisterComponent } from './page/login/register/register.component';
import { ShareIdeasComponent } from './page/share-ideas/share-ideas.component';
import { StoreComponent } from './page/store/store.component';
import { ProductDetailsComponent } from './page/store/product-details/product-details.component';
import { CategoryComponent } from './page/store/category/category.component';
import { AddProductComponent } from './page/admin/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'store', component: StoreComponent },
  { path: 'store/:id', component: ProductDetailsComponent },
  { path: 'store/category/:id_type', component: CategoryComponent },
  { path: 'share-ideas', component: ShareIdeasComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'add', component: AddProductComponent },
  { path: 'user', component: UserDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
