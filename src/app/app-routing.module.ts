import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlTableComponent } from './html-table/html-table.component';
import { ChartComponent } from './chart/chart.component';
import { IframeComponent } from './iframe/iframe.component';


const routes: Routes = [
  {path: 'htmltable', component: HtmlTableComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'iframe', component: IframeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HtmlTableComponent, ChartComponent, IframeComponent]
