import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: {};
  errors: string[];
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.newProduct = { title: '', price: '', url: '' };
  }

  addProduct() {
    this.httpService.addProduct(this.newProduct).subscribe(data => {
      this.router.navigate(['/products']);
    },
      error => {
        this.errors = error.error;
      }
    );
  }
  onCancel() {
    this.router.navigate(['/products']);
  }
}
