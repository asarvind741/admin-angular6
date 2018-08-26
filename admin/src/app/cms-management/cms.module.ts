import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CmsService } from '../services/cms.service';
import { CmsRoutingModule } from './cms.routing.module';
import { AboutUsComponent } from './about-us/aboutus.component';

@NgModule({
  declarations: [
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CmsRoutingModule
  ],
  entryComponents: [
  ],
  providers: [
    CmsService
  ],
})
export class CmsModule { }
