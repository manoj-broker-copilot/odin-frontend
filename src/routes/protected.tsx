import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { MainLayout } from "@/components/Layout";
import { Spinner } from "@/components/Elements";
import { lazyImport } from "@/utils/lazyImport";

const { Dashboard } = lazyImport(() => import('@/pages/mics'), 'Dashboard');

const App = () => {
    return (
        <MainLayout>
            <Suspense
              fallback={<Spinner />}
            >
                <Outlet />
            </Suspense>
        </MainLayout>
    )
}

export const protectedRoutes = [
    {
        path: '/app',
        element: <App />,
        children: [
          { path: '', element: <Dashboard /> },
          { path: '*', element: <Navigate to="." /> },
        ],
      },
]