
  export const getWinner = (state:any) => {
    const linesForVictory = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [2, 5, 7],
      [2, 5, 8],
    ];
    for (const line of linesForVictory) {
      const [a, b, c] = line;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
  };