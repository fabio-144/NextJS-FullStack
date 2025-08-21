"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const {data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  if (status === "authenticated") {
    console.log(data,status);
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("apple")}>
          Sign in with Apple
        </div>
        <div className={styles.socialButton} onClick={() => signIn("twitter")}>
          Sign in with X
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
