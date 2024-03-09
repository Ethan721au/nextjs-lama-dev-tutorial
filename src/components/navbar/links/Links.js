"use client"; //if we need a user interaction, the component has to be a user component, i.e. "use client"

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { Afacad } from "next/font/google";
import Image from "next/image";
const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  //temporary

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        src="/menu.png"
        width={30}
        height={30}
        onClick={() => setOpen((o) => !o)}
        className={styles.menuButton}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
