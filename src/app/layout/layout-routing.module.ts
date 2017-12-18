import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'dealtype', loadChildren: './dealtype/dealtype.module#DealtypeModule' },
            { path: 'deal', loadChildren: './deal/deal.module#DealModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'user-profile', loadChildren: './user-profile/user-profile.module#UserProfileModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'aboutus', loadChildren: './aboutus/aboutus.module#AboutusModule' },
            { path: 'termConditions', loadChildren: './termConditions/termConditions.module#TermConditionsModule' },
            { path: 'faq', loadChildren: './faq/faq.module#FaqModule' },
            { path: 'contactus', loadChildren: './contactus/contactus.module#ContactusModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
