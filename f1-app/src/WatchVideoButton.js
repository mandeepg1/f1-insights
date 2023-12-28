import React from 'react';

const WatchVideoButton = ({ videoId, videoTitle }) => {
  const handleButtonClick = () => {
    const youtubeVideoURL = `https://www.youtube.com/watch?v=${videoId}&ab_channel=TSN`;
    window.open(youtubeVideoURL, '_blank');
  };

  return (
    <button
      className='bg-[#E63946] w-[300px] rounded-md font-medium my-6 mx-auto px-6 py-3'
      onClick={handleButtonClick}
    >
      Watch Full Video - {videoTitle}
    </button>
  );
};

export default WatchVideoButton;
