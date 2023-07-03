// import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

// похож на Observable только подписываться можем Subject в любом месте, а не в конструкторе
// document.addEventListener('click', () => {
// const stream$ = new Subject();
// const stream$= new BehaviorSubject('initv') subscribe после диспатчей, возьмёт последнее значение
// const stream$ = new ReplaySubject(2); с буфером

//   stream$.next('hi');
//   stream$.next('rx');
//   stream$.next('js');

//   stream$.subscribe((val) => console.log('sub', val));
// });
