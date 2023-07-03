import { interval } from 'rxjs';
// eslint-disable-next-line object-curly-newline
import { filter, map, take, scan } from 'rxjs/operators';

const btn = document.getElementById('interval');
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#problem .result');

const people = [
  { name: 'Arkadiy', age: 29 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleg', age: 20 },
];

btn.addEventListener('click', () => {
  btn.disabled = true;
  let i = 0;
  const canDrink = [];

  const intervalNative = setInterval(() => {
    if (people[i]) {
      if (people[i].age >= 18) {
        canDrink.push(people[i].name);
      }
      display.textContent = canDrink.join(' ');

      // eslint-disable-next-line no-plusplus
      i++;
    } else {
      clearInterval(intervalNative);
      btn.disabled = false;
    }
  }, 500);
});

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;

  interval(500)
    .pipe(
      take(people.length), // сколько взять
      filter((v) => people[v].age >= 18),
      map((v) => people[v].name),
      // eslint-disable-next-line comma-dangle
      scan((acc, v) => acc.concat(v), [])
    )
    .subscribe({
      next: (res) => {
        display.textContent = res.join(' ');
      },
      error: null,
      complete: () => {
        rxjsBtn.disabled = false;
      },
    });
});
