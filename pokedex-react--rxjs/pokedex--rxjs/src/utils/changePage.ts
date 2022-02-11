export const changePage = (value: any, set: any, state: any) => {
  switch (value) {
    case 1:
      set({
        ...state,
        initial: 0,
        end: 12,
      });
      break;
    case 2:
      set({
        ...state,
        initial: 12,
        end: 24,
      });
      break;
  }

  
};
