import { useDispatch } from "react-redux";
import { toggleTheme } from "@src/redux/slices/themeSlice";

export const useTheme = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return { toggle };
};
