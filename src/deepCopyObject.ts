// const deepCopyObject = (obj: Record<string | number, unknown> | unknown): unknown => {
//   if (typeof obj !== 'object' || obj === null) {
//     return obj;
//   }
//
//   const copy = Array.isArray(obj) ? [] : {};
//
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // @ts-expect-error
//       copy[key] = deepCopyObject(obj[key]);
//     }
//   }
//
//   return copy;
// };

type DeepCopy<T> = T extends Array<infer U> ? Array<DeepCopy<U>> : T extends object ? { [K in keyof T]: DeepCopy<T[K]> } : T;

function deepCopyObject<T>(obj: T): DeepCopy<T> {
  if (typeof obj !== 'object' || obj === null) {
    return obj as DeepCopy<T>;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopyObject) as unknown as DeepCopy<T>;
  }

  const copy = {} as { [K in keyof T]: DeepCopy<T[K]> };
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopyObject(obj[key]);
    }
  }

  return copy as DeepCopy<T>;
}

const original = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
const copied = deepCopyObject(original);

console.log(original);
console.log(copied);
