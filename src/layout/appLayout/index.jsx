import React, { memo } from "react";
import Header from "../../components/header/appHeader";
import AppFooter from "../../components/footer/appFooter";

function AppLayout({ children, showHeader, showFooter }) {
  return (
    <div>
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <AppFooter />}
    </div>
  );
}

export default memo(AppLayout);
