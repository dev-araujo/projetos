export const back = (e: React.FormEvent, set: any, state: any) => {
  e.preventDefault();

  if (state.initial > 0) {
     set.next({ initial: state.initial - 15, end: state.end - 15 });
  }
};

export const go = (e: React.FormEvent, set: any, state: any) => {
  e.preventDefault();
  if (state.end < 151)  set.next({ initial: state.initial + 15, end: state.end + 15 });
};
