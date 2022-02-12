export const back = (e: React.FormEvent, set: any, state: any) => {
  e.preventDefault();

  if (state.initial > 0) {
    set({ ...state, initial: state.initial - 12, end: state.end - 12 });
  }
};

export const go = (e: React.FormEvent, set: any, state: any) => {
  e.preventDefault();
  if (state.end < 150) set({ ...state, initial: state.initial + 12, end: state.end + 12 });
};
