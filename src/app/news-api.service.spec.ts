import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';

describe('NewsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: NewsApiService = TestBed.get(NewsApiService);
    expect(service).toBeTruthy();
  });
});
