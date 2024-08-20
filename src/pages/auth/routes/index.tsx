import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import { AuthLayout } from "@/components/Layout";

export const AuthRoutes = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </AuthLayout>
    );
};
