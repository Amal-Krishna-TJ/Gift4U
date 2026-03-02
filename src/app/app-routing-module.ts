import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Broke } from './broke/broke';
import { Home } from './home/home';
import { Yes } from './yes/yes';
import { Bad } from './bad/bad';
import { Yes2x } from './yes2x/yes2x';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'broke', component: Broke},
  {path: 'yes', component: Yes},
  {path: 'bad', component: Bad},
  {path: 'yes2x', component: Yes2x}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
