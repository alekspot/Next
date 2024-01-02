import { useState } from "react";
import style from "./Header.module.scss";
import Link from "next/link";

type Props = {};

export default function Header (props: Props)  {
  
  return (
    <div className={style.header}>
      <Link href={"/"}>Главная</Link>
      <Link href={"/ui"}>Компоненты</Link>
    </div>
  );
};
