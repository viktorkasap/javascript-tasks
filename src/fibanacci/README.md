```js
const calculateFibonacci = (n) => {
  const BASE_CASE = n < 2;

  if (BASE_CASE) {
    return n;
  }

  const fibRes1 = calculateFibonacci(n - 1);
  const fibRes2 = calculateFibonacci(n - 2);
  const fibRes = fibRes1 + fibRes2;

  return fibRes;
};

calculateFibonacci(5);
```
![img.png](img.png)
![img_3.png](img_3.png)
![img_4.png](img_4.png)
![img_1.png](img_1.png) 
![img_2.png](img_2.png)