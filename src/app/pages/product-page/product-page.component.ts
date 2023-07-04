import { ProductService } from './../../services/products.service'
import { ModalService } from 'src/app/services/modal.service'

import { Component, OnInit } from '@angular/core'

import { Observable, tap } from 'rxjs'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  title = 'angular webshop'
  term = ''
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>

  constructor(public productService: ProductService, public modalService: ModalService) {}

  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(() => (this.loading = false))
    // this.products$ = this.productService.getAll().pipe(tap({ next: () => (this.loading = false) }))
  }
}
