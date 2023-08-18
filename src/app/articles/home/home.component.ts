import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allArticles: Article[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 


constructor(private aS: ArticlesService) {}

ngOnInit(): void {
  this.get();
  this.deleteModal = new window.bootstrap.Modal(
    document.getElementById('deleteModal'));
}

get() {
  this.aS.get().subscribe((data) => {
    this.allArticles = data;
  });
}
openDeleteModal(id: number) {
  this.idTodelete = id;
  this.deleteModal.show();
}

delete() {
  this.aS.delete(this.idTodelete).subscribe({
    next: (data) => {
      this.allArticles = this.allArticles.filter(_ => _.id != this.idTodelete)
      this.deleteModal.hide();
    },
  });
}
}
