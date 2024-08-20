import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { FC, ReactNode, Suspense } from "react";
import { ThemeProvider } from "../contexts/themeContext";
import { useCustomThemeConfig } from "../config/themeConfig";
import { Spinner } from "@/components/Elements";
interface ThemeConfigProviderProps {
  children: ReactNode;
}

const ThemeConfigProvider: FC<ThemeConfigProviderProps> = ({ children }) => {
   const themeConfig = useCustomThemeConfig();
  return (
      <ConfigProvider
          theme={themeConfig}
      >
          {children}
      </ConfigProvider>
  );
};

interface ThemeProviderProps {
    children: ReactNode;
}

const AppProvider: FC<ThemeProviderProps> = ({ children }) => {
    return (
        <Suspense fallback={<Spinner />}>
            <ThemeProvider>
                <ThemeConfigProvider>
                    <Router>{children}</Router>
                </ThemeConfigProvider>
            </ThemeProvider>
        </Suspense>
    );
};

export default AppProvider;
