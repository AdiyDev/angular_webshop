import { ProductService } from './services/products.service'
import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/product'
import { Observable, tap } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular webshop'
  term = ''
  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>

  constructor(private ProductService: ProductService) {}

  ngOnInit(): void {
    this.loading = true
    // this.ProductService.getAll().subscribe((prod) => {
    //   this.products = prod
    //   this.loading = false
    // })
    this.products$ = this.ProductService.getAll().pipe(tap({ next: () => (this.loading = false) }))
  }
}
