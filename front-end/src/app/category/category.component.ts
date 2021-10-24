import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../interface/category';
import { CategoryService } from '../services/category.service';
import { Categories } from '../interface/categories';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['id','name','delete'];
  listAllCategories$: Observable<any>;
  dataSource: MatTableDataSource<Category>;
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) {
    this.categoryForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.maxLength(128)]]
    })
  }

  ngOnInit(): void {
    this.listAllCategories();
  }

  listAllCategories(){
    this.listAllCategories$ = this.categoryService.listAllCategory().pipe(
      map((categories: Categories) => {
        this.dataSource = new MatTableDataSource(categories.data);
        console.log(categories.data)
        return categories.data;
      }), catchError((error: any,caught: Observable<any>) => {
        return caught
      })
    );
  }

  createCategory(){
    const category = this.categoryForm.getRawValue() as Category;
    this.categoryService.createCategory(category.name).subscribe(
      response => {
        console.log(response);
        this.listAllCategories();
      },
      error => {
        console.log(error)
      }
    );
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(
      response => {
        console.log(response);
        this.listAllCategories();
      },
      error => {
        console.log(error)
      }
    );
  }
}
