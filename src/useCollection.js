import { useState, useEffect } from "react";
import { db } from "./firebase";

function useCollection(path, orderBy) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    return db
      .collection(path)
      .orderBy(orderBy)
      .onSnapshot(snapshot => {
        const docs = [];
        snapshot.forEach(doc => {
          docs.push({
            ...doc.data(),
            id: doc.id
          });
        });
        setDocs(docs);
      });
  }, []);

  return docs;
}

export default useCollection;
