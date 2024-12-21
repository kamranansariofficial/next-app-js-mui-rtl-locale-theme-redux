"use client";
import * as React from "react";
import ThemeRegistry from "@/ThemeRegistry/ThemeRegistry";
import { Providers } from "@/lib/providers";

import Topbar from "@/components/layout/_main/topbar";

import Box from "@mui/material/Box";

export default async function RootLayout({ children, params }) {
  const paras = await params;

  return (
    <html lang={params.lang}>
      <body>
        <Providers>
          <ThemeRegistry lang={params.lang}>
            <Topbar />
            <Box height={80} />

            {children}
          </ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}
