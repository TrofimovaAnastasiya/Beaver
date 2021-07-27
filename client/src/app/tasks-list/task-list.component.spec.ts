let funcFilter = (arr: any[]): any[] => {
  return [];
};

describe('TasksListComponent', () => {
  const initialArr = [1, 2, 3, 4, 5, 6, 7];
  const finalArr = [2, 4, 6];

  it('should filter array by countabel', () => {
    expect(funcFilter(initialArr)).toEqual(finalArr);
  });
});
