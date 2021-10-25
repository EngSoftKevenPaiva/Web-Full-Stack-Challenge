import { DeviceComponent } from './device/device/device.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'category'
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'device', component: DeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
