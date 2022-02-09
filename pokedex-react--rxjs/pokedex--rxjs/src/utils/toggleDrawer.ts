type Anchor = "right"

export const toggleDrawer = (anchor: Anchor, open: boolean,set: any) =>
  (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    set(open);
  };
