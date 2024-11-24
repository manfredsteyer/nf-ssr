import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@softarc/native-federation-runtime';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'mfe1',
        loadComponent: () => loadRemoteModule({
            remoteName: 'mfe1',
            exposedModule: './Component',
            fallback: HomeComponent
        })
    }
];
