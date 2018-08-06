import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminDetailsComponent } from './admin/admin-details/admin-details.component';
import { PurchaseAddressComponent } from './purchase-address/purchase-address.component';
import { CallbackComponent } from './callback/callback.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyTokensComponent } from './buy-tokens/buy-tokens.component';
import { WorkersComponent } from './admin/workers/workers.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'userDash', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  {path: 'callback', component: CallbackComponent},
  {path: 'buyTokens', component: BuyTokensComponent, canActivate: [AuthGuard]},
  {path: 'purchase', component: PurchaseAddressComponent, canActivate: [AuthGuard]},
  {path: 'groupMembers', component: WorkersComponent, canActivate: [AuthGuard]},
  {path: 'adminSection', component: AdminDetailsComponent, canActivate: [AuthGuard]},
  {path: 'add', component: AdminCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
