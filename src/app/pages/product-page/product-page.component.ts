import { ProductService } from './../../services/products.service'
import { ModalService } from 'src/app/services/modal.service'

import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  title = 'angular webshop'
  term = ''
  loading = false

  constructor(public productService: ProductService, public modalService: ModalService) {}

  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(() => (this.loading = false))
  }
}
