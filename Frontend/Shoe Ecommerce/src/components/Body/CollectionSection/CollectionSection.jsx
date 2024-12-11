import React from 'react'
import { collectionsection1, collectionsection2, collectionsection3, collectionsection4 } from '../../../assets/image'

const CollectionSection = () => {
  return (
    <>
        <div className='max-w-[100%]'>
            <div className='w-[90%] grid grid-cols-1 lg:grid-cols-3 mx-auto py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 col-span-2'>
                  <div>
                    <img src={collectionsection1} alt="" />
                  </div>
                  <div>
                    <img src={collectionsection2} alt="" />
                  </div>
                  <div>
                    <img src={collectionsection3} alt="" />
                  </div>
                  <div>
                    <img src={collectionsection4} alt="" />
                  </div>
                    
                </div>
            </div>
        </div>
      
    </>
  )
}

export default CollectionSection
