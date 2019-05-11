import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-category-sorting',
  templateUrl: './category-sorting.component.html',
  styleUrls: ['./category-sorting.component.css']
})
export class CategorySortingComponent implements OnInit {

  id: string = "";
  newsListSorted:Array<any>;
  newsListSource:Array<any>;

  constructor(private _Activatedroute:ActivatedRoute, private newsapi:NewsApiService) {

  }

  ngOnInit() {
  	this.id = this._Activatedroute.snapshot.params['id'];
    this.newsapi.getArticlesByID(this.id).subscribe(data => {
    	this.newsListSorted = data['articles'];
    	this.newsListSource = data['articles'][0]['source'];    	
    });
  }

}
