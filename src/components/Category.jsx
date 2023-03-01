import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Category = () => {
  const [dataCategory, setDataCategory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://requestly.dev/api/mockv2/getAllCategory?username=user1673281842743')
      .then((response) => {
        setDataCategory(response.data);
      })
      .catch((error) => {
        setError(error);
      })
  }, []);

  if (error) {
    return <div>Error: ${error}</div>;
  }

  return (
    <div className='absolute flex w-full bottom-0 sm:absolute md:hidden lg:hidden xl:hidden overflow-y-scroll'>
      <div
        className='flex'
      >
        <div className={`bg-[#1E1F26] flex items-center justify-center py-5 text-white font-mulish font-[600] w-[120px]`} style={{ boxShadow: "inset 0px -3px 0px #DF4949" }}>
          <button>All</button>
        </div>
        {dataCategory.result?.map((item, index) => (
          <div key={item.categoryId} className={`bg-[#1E1F26] flex items-center justify-center py-5 text-[#B1B2B3] font-mulish font-[600] w-[120px]`} style={{ boxShadow: "inset 0px -3px 0px #68696A" }}>
            <button>{item.categoryName}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category