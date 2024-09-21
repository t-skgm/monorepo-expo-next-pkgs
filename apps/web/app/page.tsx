import Image from "next/image";
import styles from "./page.module.css";
import { appName } from "@repo/domain";
import { Message } from "./Message";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>Hello from {appName}</p>

        <Message />
      </main>
    </div>
  );
}
