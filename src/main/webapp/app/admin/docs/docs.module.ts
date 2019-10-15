import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EasyPrivatePensionSharedModule } from 'app/shared/shared.module';

import { JhiDocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [EasyPrivatePensionSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [JhiDocsComponent]
})
export class DocsModule {}
