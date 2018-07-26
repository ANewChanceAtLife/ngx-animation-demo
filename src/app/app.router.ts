import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { state: 'home' } },
  { path: 'about', component: AboutComponent, data: { state: 'about' } },
  { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
  { path: 'work', component: WorkComponent, data: { state: 'work' } },
  { path: '**', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(routes, {
  useHash: true
});
