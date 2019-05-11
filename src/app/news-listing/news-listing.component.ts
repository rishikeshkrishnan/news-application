import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {

  newsList:Array<any>;
  newsSources:Array<any>;

  constructor(private newsapi:NewsApiService) { }

  ngOnInit() {
    this.newsapi.initArticles().subscribe(data => this.newsList = data['articles']);
		this.newsapi.initSources().subscribe(data=> this.newsSources = data['sources']);
  }

}
