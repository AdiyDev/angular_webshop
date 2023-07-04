import { ModalService } from 'src/app/services/modal.service'
import { ProductService } from './../../services/products.service'
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  constructor(private productService: ProductService, private modalService: ModalService) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value)
    this.productService
      .create({
        title: this.form.value.title as string,
        price: 13.5,
        description: 'lorem ipsum set3333',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 2.2,
          count: 22,
        },
      })
      .subscribe({
        next: () => {
          this.modalService.close()
        },
      })
  }
}
