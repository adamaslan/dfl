"use client"
import React, { useState } from 'react';
import Papa from 'papaparse';

const ArticlesHashmap = () => {
  const [hashMap, setHashMap] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          if (result.data) {
            const map = new Map();

            result.data.forEach((row, index) => {
              if (row.articles) {
                map.set(index, row.articles);
              }
            });

            setHashMap(Object.fromEntries(map));
            saveJsonToFile(Object.fromEntries(map));
          }
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
        },
      });
    }
  };

  const saveJsonToFile = (data) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `articles-${timestamp}.json`;
    const jsonBlob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(jsonBlob);
    link.download = filename;
    link.click();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Articles Hashmap</h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {hashMap && (
        <div>
          <h2>JSON Representation</h2>
          <pre>{JSON.stringify(hashMap, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ArticlesHashmap;
