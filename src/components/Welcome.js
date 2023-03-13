import React, { useState, useEffect } from 'react';
// import photoGalleryData from './data/photo_gallery.json';

const Welcome = () => {
  const [photoGalleryData, setPhotoGalleryData] = useState([]);

  const loadPhotoGalleryData = async () => {
    //Query the API Gateway
    const resp = await fetch(
      'https://lnjwalz4e8.execute-api.ca-central-1.amazonaws.com/Production/photo-gallery'
    );

    const jsonData = await resp.json();

    //Assign the response data to state variable
    setPhotoGalleryData(jsonData);
  };

  useEffect(() => {
    //Load the photo gallery data from the API Gateway
    loadPhotoGalleryData();
  }, []);
  return (
    <div className='scene' id='welcome'>
      <article className='content'>
        <div className='gallery'>
          {photoGalleryData.map((image) => (
            <img src={image.src} alt={image.alt} className={image.className} />
          ))}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{' '}
          <a href='files/landon_information_sheet_London.pdf'>
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;
