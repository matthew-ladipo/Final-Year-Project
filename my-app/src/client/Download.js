import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';

const DownloadDocument = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await db.collection('images/').get();
      const documents = querySnapshot.docs.map((doc) => doc.data());
      setDocuments(documents);
    };
    fetchDocuments();
  }, []);

  const handleDownload = (document) => {
    const storageRef = document.storageRef;
    storageRef.getDownloadURL().then((downloadURL) => {
      const link = document.createElement('a');
      link.href = downloadURL;
      link.click();
    });
  };

  return (
    <div>
      <h2>Available Documents:</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.name}>
            {document.name}{' '}
            <button onClick={() => handleDownload(document)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadDocument;