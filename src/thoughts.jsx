import { useState, useEffect } from 'react';
import './style.css';

const Thoughts = () => {
  const [gistData, setGistData] = useState([]);

  useEffect(() => {
    const fetchGistContent = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/gists/e1f20cda4479fb2d62fc802d6ea7b964'
        );
        const data = await response.json();

        if (data.files && data.files['gistfile1.json']) {
          const content = data.files['gistfile1.json'].content;
          const parsedData = JSON.parse(content);

          if (Array.isArray(parsedData)) {
            const sortedData = parsedData.sort((a, b) => b.id - a.id);
            setGistData(sortedData);
          } else {
            console.error('wrong object :3');
          }
        } else {
          console.error('Unable to find the specified file in the Gist.');
        }
      } catch (error) {
        console.error('Error fetching Gist content:', error);
      }
    };

    fetchGistContent();
  }, []);

  return (
    <div className='card-article'>
      {gistData.length > 0 ? (
        gistData.map((item) => (
          <div className='card-thoughts' key={item.id}>
            <div className='card-header'>
              <h1>{item.title}</h1>
              <p>{item.tanggal}</p>
            </div>
            <p>{item.status}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Thoughts;
