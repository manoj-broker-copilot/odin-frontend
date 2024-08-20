import { FC } from "react"
import { Container } from "../Elements"

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout:FC<AuthLayoutProps> = ({children}) => {
    return (
        <div className="auth-layout" style={{padding:"1rem"}}>
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default AuthLayout;