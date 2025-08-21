"use client";

import { useState, useEffect } from "react";
import styles from "./writePage.module.css";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Quill from "quill";
// import "quill/dist/quill.core.css";


const WritePage = () => {
  //   const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState();
  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const [media, setMedia] = useState();
  const [value, setValue] = useState();
  const [catSlug, setCatSlug] = useState();

  return (
    <div className={styles.container}>
      {/* <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onCanPlay={(e) => setTitle(e.target.value)}
      /> */}

      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
{/* 
        <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
        /> */}
      </div>
      <button className={styles.publish} >
        Publish
      </button>
    </div>
  );
};

export default WritePage;