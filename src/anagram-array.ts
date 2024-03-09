const anagramArray = (words: string[]): string[] => {
  const uniqCollection = new Map();

  const normalizeString = (str: string): string => {
    return str.toLowerCase().split('').sort().join('');
  };

  for (const word of words) {
    const normalizedWord = normalizeString(word);
    uniqCollection.set(normalizedWord, word);
  }

  return Array.from(uniqCollection.values());
};

const words = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log('anagram array:', anagramArray(words)); //
