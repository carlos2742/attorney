import { Injectable } from '@angular/core';
import {CommonService} from '../common/common.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private articlesResources: string;
  private commentsResources: string;

  constructor(private common: CommonService, private http: HttpClient) {
    this.articlesResources = `${this.common.apiUrl}articles/`;
    this.commentsResources = `${this.common.apiUrl}comments/`;
  }

  public articleList(filter = {}) {
    const url = `${this.articlesResources}search`;
    return this.http.post(url, filter);
  }

  public article(title) {
    const url = `${this.articlesResources}${title}/view`;
    return this.http.get(url);
  }

  public commentsList(articleId) {
    const url = `${this.articlesResources}${articleId}/comments`;
    return this.http.get(url);
  }

  public createComment(articleId, payload) {
    const url = `${this.articlesResources}${articleId}/comments`;
    return this.http.post(url, {comment: payload});
  }
}