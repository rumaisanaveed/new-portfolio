import { useTheme } from "next-themes";

const useThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return {
    currentTheme,
    toggleTheme,
  };
};

export default useThemeToggle;
