'use client'
import "./globals.css";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import {Provider} from "react-redux";
import store from "@/redux/store/store";
import { Toaster } from 'react-hot-toast';
import AppNavbar from "@/component/header/AppNavbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider store={store}>
            <Toaster />
            <AppNavbar />
            <ProgressBar
                height="4px"
                color="#06b6d4"
                options={{ showSpinner: false }}
            />
            {children}
        </Provider>
      </body>
    </html>
  );
}
