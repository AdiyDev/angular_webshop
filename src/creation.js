// import { of, from, Observable, fromEvent, range, timer, interval} from 'rxjs';
// import { scan,map } from 'rxjs/operators';
// import {} from 'rxjs/operators';
// $- stream реактивные
// of (из любых данных) создаёт стрим и по очереди передаёт данные
// const stream$ = of(1, 2, 3, 4, 5);

// stream$.subscribe((val) => {
//   console.log('value', val);
// });

// работает только с массивами pipe есть у всех стримов создаваемых
// const arr$ = from([1, 2, 3, 4, 5]).pipe(scan((acc, item) => acc.concat(item), []));

// arr$.subscribe((val) => {
//   console.log('item', val);
// });

// observer похож на promise только без resolve|reject имеет методы свои
// const stream$ = new Observable((observer) => {
//   observer.next('first value');

//   setTimeout(() => observer.next('value after 500ms'), 500);
//   setTimeout(() => observer.complete('complete stream before err'), 2000);
//   setTimeout(() => observer.error('something went wrong'), 2000);
//   setTimeout(() => observer.next('value after 3000ms'), 3000);
// });

// stream$.subscribe({
//   next: (value) => console.log(value),
//   error: (err) => {
//     console.log(err);
//   },
//   complete: () => console.log('complete stream'),
// });

// fromEvent - стрим из событий
// fromEvent(document.querySelector('canvas'), 'mousemove').subscribe((evt) => {
//   console.log(evt);
// });
// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map((evt) => ({
//       x: evt.offsetX,
//       y: evt.offsetY,
//       ctx: evt.target.getContext('2d'),
//       // eslint-disable-next-line comma-dangle
//     }))
//   )
//   .subscribe((pos) => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2);
//   });

// const clear$ = fromEvent(document.getElementById('clear'), 'click');

// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// });

// const sub = interval(500).subscribe((val) => console.log(val));

// setTimeout(() => {
//   sub.unsubscribe();
// }, 3000);

// timer(500).subscribe((val) => console.log(val));

// range(55, 11).subscribe((val) => console.log(val));
