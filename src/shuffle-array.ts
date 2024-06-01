/** Version 1/
// const shuffle = (array: number[]): number[] => {
//   return [...array].sort(() => Math.random() - 0.5);
// };



/* Version 2 */
const shuffle = (array: number[]): number[] => {
  const elements = [...array];

  for (let i = elements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

    [elements[i], elements[j]] = [elements[j], elements[i]];
  }

  return elements;
};

const arr = [1, 2, 3];
console.log([1], shuffle(arr));
console.log([2], shuffle(arr));
console.log([3], shuffle(arr));
