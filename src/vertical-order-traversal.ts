type Tree = Array<number | null>;

const getLeftChild = (arr: Tree, index: number): { value: number | null; index: number } | null => {
  const leftChildIndex = 2 * index + 1;

  return leftChildIndex < arr.length ? { value: arr[leftChildIndex], index: leftChildIndex } : null;
};

const getRightChild = (arr: Tree, index: number): { value: number | null; index: number } | null => {
  const rightChildIndex = 2 * index + 2;

  return rightChildIndex < arr.length ? { value: arr[rightChildIndex], index: rightChildIndex } : null;
};

const verticalOrderTraversal = (arr: Tree): Array<Array<number | null>> => {
  /*
    {
      '-2': [{ value: 4, row: 2 }],
      '-1': [{ value: 2, row: 1 }],
      '0': [{ value: 1, row: 0 }, { value: 5, row: 2 }, { value: 6, row: 2 }],
      '1': [{ value: 3, row: 1 }],
      '2': [{ value: 7, row: 2 }],
    };
   */
  const map: Record<string, Array<{ value: number | null; row: number }>> = {};

  const queue = [{ value: arr[0], row: 0, col: 0, index: 0 }];

  while (Boolean(queue.length)) {
    const node = queue.shift();

    if (node) {
      // * Add node into map
      if (!map[node.col]) {
        map[node.col] = [];
      }

      map[node.col].push({ value: node?.value ?? null, row: node.row });

      // * Get children
      const right = getRightChild(arr, node.index);
      const left = getLeftChild(arr, node.index);

      if (left && node) {
        queue.push({ value: left.value, row: node.row + 1, col: node.col - 1, index: left.index });
      }

      if (right && node) {
        queue.push({ value: right.value, row: node.row + 1, col: node.col + 1, index: right.index });
      }
    }
  }

  return Object.entries(map).reduce((acc: Array<Array<number | null>>, curr) => {
    const [index, data] = curr;
    const nodes = data.map((node) => node.value).filter((node) => node);

    if (!Boolean(nodes.length)) {
      return acc;
    }

    if (Number(index) <= 0) {
      acc.unshift(nodes);
    } else {
      acc.push(nodes);
    }

    return acc;
  }, []);
};

const tree1 = [3, 9, 20, null, null, 15, 7]; // -> [[9],[3,15],[20],[7]]
const tree2 = [1, 2, 3, 4, 5, 6, 7]; // -> [[4],[2],[1,5,6],[3],[7]]
const tree3 = [1, 2, 3, 4, 6, 5, 7]; // -> [[4],[2],[1,6,5],[3],[7]]

console.log('tree1', verticalOrderTraversal(tree1));
console.log('tree2', verticalOrderTraversal(tree2));
console.log('tree3', verticalOrderTraversal(tree3));
/**
 * TERMINAL ->
 * clear && npx ts-node src/vertical-order-traversal.ts
 */
