import { AppRoutes } from "./routes";
import AppProvider from "./providers/app";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <AppProvider>
            <Provider store={store}>
                <AppRoutes />
            </Provider>
        </AppProvider>
    );
}

export default App;
