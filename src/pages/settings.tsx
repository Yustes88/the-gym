import React, { ReactElement } from "react";
import { MainLayout } from "@/components/layout/MainLayout";

function Settings() {
  return <></>;
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Settings;
