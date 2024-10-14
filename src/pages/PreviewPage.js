// src/pages/PreviewPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PreviewPage = () => {
  const { slug } = useParams();  // Capture dynamic slug from URL
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    // Load the published page data from localStorage by slug
    const savedPage = localStorage.getItem(slug);
    if (savedPage) {
      setPageData(JSON.parse(savedPage).content);
    }
  }, [slug]);

  return (
    <div>
      <h1>Page Preview</h1>
      <div>
        {pageData.map((component, index) => {
          if (component.type === 'text') {
            return <p key={index}>Text Component</p>;
          }
          if (component.type === 'image') {
            return <img key={index} src="https://via.placeholder.com/150" alt="Placeholder" />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default PreviewPage;
