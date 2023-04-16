import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'car-list',
    loadChildren: () => import('./pages/car-list/car-list.module').then(m => m.CarListModule)
  },
  {
    path: 'car-detail/:id',
    loadChildren: () => import('./pages/car-detail/car-detail.module').then(m => m.CarDetailModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'create-car',
    loadChildren: () => import('./pages/create-car/create-car.module').then(m => m.CreateCarModule)
  },
  {
    path: 'edit-car/:id',
    loadChildren: () => import('./pages/edit-car/edit-car.module').then(m => m.EditCarModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found/not-found.module').then(m => m.NotFoundModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
