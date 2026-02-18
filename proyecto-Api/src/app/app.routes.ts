import { Routes } from '@angular/router';
import { Detail } from './pages/detail/detail';
import { Main } from './pages/main/main';
import { Add } from './pages/add/add';
import { EditGame } from './components/edit-game/edit-game';



export const routes: Routes = [

    { path: '', component: Main },
    { path: 'game/:id', component: Detail },
    { path: 'add', component: Add },
    { path: 'game/:id/edit', component: EditGame },



];