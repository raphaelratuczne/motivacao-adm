import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'frases', loadChildren: './pages/frases/frases.module#FrasesModule' },
  { path: 'politica-privacidade', loadChildren: './pages/politica-privacidade/politica-privacidade.module#PoliticaPrivacidadeModule' },
  { path: '', redirectTo: 'login', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
