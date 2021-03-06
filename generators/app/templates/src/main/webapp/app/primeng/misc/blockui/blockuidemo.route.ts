import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { BlockUIDemoComponent } from './blockuidemo.component';

export const blockuiDemoRoute: Route = {
    path: 'blockui',
    component: BlockUIDemoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'primeng.misc.blockui.title'
    },
    canActivate: [UserRouteAccessService]
};
