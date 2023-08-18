import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../categories.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    allcategories: Category[] = [];
    deleteModal: any;
    idTodelete: number = 0;
   
  allCategories: Category[] = [];
 
  constructor(private categoriesService: CategoriesService) {}
 
  ngOnInit(): void {
    this.get();
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal'));
  }
 
  get() {
    this.categoriesService.get().subscribe((data) => {
      this.allCategories = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.categoriesService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allCategories = this.allCategories.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
}
}