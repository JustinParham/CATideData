import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Footer.module.css";

export default function Footer() {
  const currDate = new Date();

  return (
    <div>
      <footer className={classes.footer}>
        <Link href="mailto:Justinjparham@gmail.com">
          <a>Contact</a>
        </Link>
        <div>
          <span>Tide Data provided by:</span>
          <Image src="/images/NoaaLogo.png" width={40} height={40} />
        </div>
        <p>&#169; {currDate.getFullYear()}</p>
      </footer>
    </div>
  );
}
