import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { persistStore } from "redux-persist";
import { store } from "./global/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const App = () => {
  const persistor = persistStore(store);
  return (
    <div className="font-Poppin">
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <RouterProvider router={mainRouter} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
