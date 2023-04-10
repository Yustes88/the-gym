import type {NextPage} from "next";
import React, {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";
import {Session} from "next-auth";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
    auth: boolean;
};

export type CustomAppProps = AppProps & {
    Component: NextPageWithLayout;
    // pageProps: {
    //     session: Session;
    // }
};