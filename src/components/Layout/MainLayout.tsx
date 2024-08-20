import { FC, ReactNode } from "react";
import Header from "./Header";

interface MainLayoutProps {
    children: ReactNode
};

const MainLayout:FC<MainLayoutProps> = ({children}) => {
    return (
        <div className="main-layout">
            <Header />
            {children}
        </div>
    )
}
export default MainLayout;