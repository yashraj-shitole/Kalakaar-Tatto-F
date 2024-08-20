import React, { useState } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import ReactPaginate from 'react-paginate';

const InstagramVideos = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const videolink = [
    "https://www.instagram.com/reel/C73zYSJMgvl",
    "https://www.instagram.com/reel/C6f5cjCPAOw",
    "https://www.instagram.com/reel/C50D29hPHBg",
    "https://www.instagram.com/reel/C1Q-E36CP2a"
  ];

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected); 
  };

  return (
    <div className="h-fit lg:h-[100vh] flex flex-col items-center justify-evenly w-full p-10 bg-black text-white">
    

      <div className='bg-black flex justify-center gap-5'>
        <InstagramEmbed key={currentPage} url={videolink[currentPage]} width={328} /> {/* Using key to force re-render */}
      </div>

      <ReactPaginate
        className="m-5 px-5 py-3 rounded-full bg-secondary flex gap-5 border border-[#38383820]"
        pageCount={videolink.length}
        pageRangeDisplayed={1}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        initialPage={currentPage}
      />

      <style>{`
        .active {
          background-color: #383838;
          padding: 0px 10px;
          border-radius: 100px;
          color: white;
        }
      `}</style>
    </div>
  );
}

export default InstagramVideos;
