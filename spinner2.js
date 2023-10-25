const up = () => {
  process.stdout.write('\r|   ');
};

const right = () => {
  process.stdout.write('\r/   ');
};

const middle = () => {
  process.stdout.write('\r-   ');
};

const left = () => {
  process.stdout.write('\r\\   ');
}


setTimeout(up, 100);

setTimeout(right, 300);

setTimeout(middle, 500);

setTimeout(left, 700);

setTimeout(up, 900);

setTimeout(right, 1100);

setTimeout(middle, 1300);

setTimeout(left, 1500);
