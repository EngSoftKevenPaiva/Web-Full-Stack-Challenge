import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Category } from '../interface/category';
import { Categories } from '../interface/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public static readonly API_URL = environment.backEndUrl;

  constructor(
    private http: HttpClient,
  ){ }

  listAllCategory(): Observable<Categories>{
    return this.http.get<Categories>(CategoryService.API_URL+ '/categories')
  }

  createCategory(name: String): Observable<Category>{
    const body = {
      'name': name
    }
    console.log(body)
    return this.http.post<Category>(CategoryService.API_URL+'/categories', body)
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(CategoryService.API_URL+'/categories/'+id)
  }
}
