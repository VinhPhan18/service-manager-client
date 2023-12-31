import React from 'react'
import classNames from "classnames/bind";

import style from "./DefaultLayout.module.scss";
import Header from "~/layouts/components/Header/Header";

function DefaultLayout({ children }) {
  const cx = classNames.bind(style);
  return (
    <div >
      <Header />
      <div className={cx("wrapper")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
