import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 categoryForm: Category = {
    id: 0,
    name: '',
    description:'',
  };
 
  constructor(private categoryService:CategoriesService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.categoryService.create(this.categoryForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/categories/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
