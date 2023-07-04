import { ProductService } from './services/products.service'
import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular webshop'
  products: IProduct[] = []
  loading = false

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.loading = true
    this.ProductService.getAll().subscribe((prod) => {
      this.products = prod
      this.loading = false
    })
  }
}
