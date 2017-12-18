import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { AdminService } from '../../shared/services/admin/admin.service'
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material';
@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, FormsModule, MatPaginatorModule,MatSortModule],
    declarations: [TablesComponent],
    providers:[AdminService]
})
export class TablesModule {}
