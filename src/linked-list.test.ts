import { describe, expect, it } from 'vitest';
import { LinkedList } from './linked-list';

describe('LinkedList', function () {
  const list = new LinkedList();
  const values = ['a', 'b', 'c'];

  it('1) Checking appEnd method', function () {
    list.appEnd('a').appEnd('b').appEnd('c').appEnd('d');

    expect(list.toString()).toBe([...values, 'd'].toString());
  });

  it('2) Checking toString method', function () {
    expect(list.toString()).toBe([...values, 'd'].toString());
  });

  it('3) Checking Head', function () {
    expect(list.head?.value).toBe('a');
  });

  it('4) Checking Tail', function () {
    expect(list.tail?.value).toBe('d');
  });

  it('5) Checking prepEnd method', function () {
    list.prepEnd('x');

    expect(list.toString()).toBe(['x', ...values, 'd'].toString());
  });

  it('6) Checking prepEnd method Head and Tail', function () {
    const VALUE = 'x';
    const list2 = new LinkedList();

    list2.prepEnd(VALUE);

    expect(list2.head?.value).toBe(VALUE);
    expect(list2.tail?.value).toBe(VALUE);
  });

  it('7) Checking find method', function () {
    expect(list.find('e')).toBeNull();

    const findResult = list.find('c');
    expect(findResult?.toString()).toBe('c');
    expect(findResult).toMatchObject({
      value: 'c',
      next: { value: 'd', next: null },
    });
  });

  it('8) Checking delete one method Head and Tail', function () {
    // HEAD
    const DELETE_VALUE1 = 'x';
    const deletedNode1 = list.delete(DELETE_VALUE1)?.toString();

    expect(deletedNode1).toBe(DELETE_VALUE1);
    expect(list.head?.value).toBe('a');
    expect(list.toString()).toBe([...values, 'd'].toString());

    // TAIL
    const DELETE_VALUE2 = 'd';
    const deletedNode2 = list.delete(DELETE_VALUE2)?.toString();

    expect(deletedNode2).toBe(DELETE_VALUE2);
    expect(list.tail?.value).toBe('c');
    expect(list.toString()).toBe(values.toString());
  });

  it('9) Checking insertBefore method', function () {
    expect(list.insertBefore('x', 'c').toString()).toBe('a,b,x,c');
  });

  it('10) Checking insertAfter method', function () {
    expect(list.insertAfter('y', 'x').toString()).toBe('a,b,x,y,c');
  });
});
