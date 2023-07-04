import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable, catchError, delay, throwError, retry } from 'rxjs'
import { IProduct } from '../models/product'
import { ErrorService } from './error.service'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private ErrorService: ErrorService) {}

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products', {
        // params: new HttpParams().append('limit', 5),
        // params: new HttpParams({
        //   fromString: 'limit=5',
        // }),
        params: new HttpParams({
          fromObject: { limit: 4 },
        }),
      })
      .pipe(delay(500), retry(2), catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(error: HttpErrorResponse) {
    this.ErrorService.handle(error.message)
    return throwError(() => error.message)
  }
}
