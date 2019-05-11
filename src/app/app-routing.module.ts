import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsListingComponent } from './news-listing/news-listing.component';
import { CategorySortingComponent } from './category-sorting/category-sorting.component';

const routes: Routes = [
  { path : '', component : NewsListingComponent},
	{ path : 'category/:id', component : CategorySortingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
