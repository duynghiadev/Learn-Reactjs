import "../public/css/index.css";
import "../public/css/bootstrap.css";

import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "../layout/mainLayout";
import withRedux from "../redux/withRedux";
import "../libs/extensions";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import store from "../redux/store";

function MyApp(props: any) {
  const { Component, pageProps } = props;
  const AppLayout = Component.Layout || MainLayout;
  // const persistor = persistStore(store);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2FAAFC",
      },
      secondary: {
        main: "#d32f2f",
      },
    },
  });

  return (
    <>
      <Provider store={store}>
        {/* <PersistGate
           loading={<Component {...pageProps} />}
           persistor={persistor}
         > */}
        <ThemeProvider theme={theme}>
          <AppLayout {...pageProps}>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}
export default MyApp;

// export default withRedux(MyApp);
