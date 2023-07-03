import { interval, fromEvent } from 'rxjs';
import { map, filter, tap, take, takeLast, takeWhile, scan, reduce, switchMap } from 'rxjs/operators';

// у каждого стрима есть pipe
// tap для сайд эффектов, вызывается на каждой итерации (debag или добав промежуточных элементов)
// scan работает в процессе стрима reduce с завершенным
//  switchMap смена стримов

fromEvent(document, 'click')
  .pipe(
    switchMap((evt) => {
      console.log(evt);
      return interval(500).pipe(
        tap((value) => console.log('tap', value)),
        take(5),
        reduce((acc, v) => acc + v, 0)
      );
    })
  )
  .subscribe({
    next: (v) => console.log('next', v),
    complete: () => console.log('complete'),
  });

// const stream$ = interval(500).pipe(
//   tap((value) => console.log('tap', value)),
//   map((item) => item * 3),
//   filter((item) => item % 2 === 0),
//   take(10),
//   takeLast(5)
//   takeWhile((v) => v < 6)

//   reduce((acc, v) => acc + v, 0)
//   scan((acc, v) => acc + v, 0)
// );

// stream$.subscribe({
//   next: (v) => console.log('next', v),
//   complete: () => console.log('complete'),
// });
