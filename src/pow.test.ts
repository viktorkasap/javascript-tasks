import { describe, expect, it } from 'vitest';
import { pow } from './pow.ts';

describe('pow', function () {
  it('Возводит 2 в степень 3', function () {
    expect(pow(2, 3)).toBe(8);
  });
});
