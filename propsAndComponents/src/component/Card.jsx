import React from 'react'

function Card({Article,image}) {
  return (
    <div>
       <div className="flex max-w-2xl flex-col items-center rounded-xl border md:flex-row">
        <div className="h-full w-full md:h-[200px] md:w-[300px] ">
          <img
            src={image}
            alt="Laptop"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
            Article: { Article}

            </h1>
            <p className="mt-3 text-sm text-gray-600">
              ReadGriiint (the eligant look of red women)
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #MetGala
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #NewYorkFashion
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Dress
              </span>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <img
                className="inline-block h-8 w-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGTnHb6FErit1zMvFdu2XZeLg63tgV4bGiw&usqp=CAU"
                alt="Dan_Abromov"
              />
              <span className="flex flex-col">
                <span className="text-[10px] font-medium text-gray-900">
                  Dan Abromov
                </span>
                <span className="text-[8px] font-medium text-gray-500">
                  @dan_abromov
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Card
