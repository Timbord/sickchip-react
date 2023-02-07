import { atom } from "nanostores";

export const appTitle = atom("Title");
export const showAppBar = atom(false);
export const showBottomBar = atom(false);
export const showBackBtn = atom(false);

export const setAppTitle = (title) => {
  appTitle.set(title);
};

export const setShowAppBar = (bool) => {
  showAppBar.set(bool);
};

export const setShowBottomBar = (bool) => {
  showBottomBar.set(bool);
};

export const setShowBackBtn = (bool) => {
  showBackBtn.set(bool);
};
