import { useState, useEffect } from 'react';
import './style.css';

const Portfolio = () => {
  const [gistData, setGistData] = useState([]);

  useEffect(() => {
    const fetchGistContent = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/gists/139a8f37b36aa9034c9f7e4b595f461d'
        );
        const data = await response.json();

        if (data.files && data.files['journal.json']) {
          const content = data.files['journal.json'].content;
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
                <p>Keren</p>
              <h1>{item.title}</h1>
              <p>{item.tanggal}</p>
            </div>
            <p>{item.journal}</p>
          </div>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Portfolio;
