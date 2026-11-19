import { Routes } from '@angular/router';

import { routes as userRoutes } from './users/users.route';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '', //<your-domain>/
    component: NoTaskComponent,
    // redirectTo: '/users/u1',
    // pathMatch: 'full'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent, //<your-domain>/users/<uid>
    children: userRoutes,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];