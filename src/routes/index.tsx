import { useRoutes } from "react-router-dom";
import { Landing } from "@/pages/mics";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

/**
* Defines the routing structure for the application.
* - Public routes are accessible before login.
* - Protected routes require user authentication and are accessible after login.
* 
* TODO: Integrate an authentication API to validate user status on the frontend.
*       This should include handling user login state and possibly fetching user roles.
* 
* TODO: Implement logic to filter and include only protected routes if the user is authenticated.
*       Ensure that unauthenticated users cannot access protected routes.
*/
export const AppRoutes = () => {
     const commonRoutes = [{ path: '/', element: <Landing /> }];
     const element = useRoutes([...protectedRoutes, ...publicRoutes,  ...commonRoutes]);
     return <>{element}</>;
}