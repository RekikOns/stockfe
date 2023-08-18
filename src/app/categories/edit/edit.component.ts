
import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import {CategoriesService } from '../categories.service';
import { Category } from '../category';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
  export class EditComponent implements OnInit {
    categoryForm: Category = {
      id: 0,
      name: '',
      description:'',
    };
   
    constructor(private categoryService:CategoriesService,
      private route: ActivatedRoute,
      private router:Router) {}
   
    ngOnInit(): void {
      this.route.paramMap.subscribe((param: { get: (arg0: string) => any; }) => {
        var id = Number(param.get('id'));
        this.getById(id);
      });
    }
   
    getById(id: number) {
      this.categoryService.getById(id).subscribe((data) => {
        this.categoryForm= data;
      });
    }
   
    update() {
      this.categoryService.update(this.categoryForm)
      .subscribe({
        next:() => {
          this.router.navigate(["/categories/home"]);
        },
        error:(err: any) => {
          console.log(err);
        }
      })
    }
  }
