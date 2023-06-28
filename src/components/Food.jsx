import { useState } from 'react'
import { data, categories } from '../data/data'
import Footer from './Footer'
import Card from './Card'

const Food = () => {
  const [foods, setFoods] = useState(data)

  // Filter by category
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category))
  }

  // Filter by price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price))
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter  */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justify-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Chicken
            </button>
          </div>
        </div>
      </div>

      {/* Filter Price */}
      <div>
        <p className='font-bold text-gray-700'>Filter Price</p>
        <div className='flex justify-between max-w-[390px] w-full'>
          <button
            onClick={() => filterPrice('$')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
            $
          </button>
          <button
            onClick={() => filterPrice('$$')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
            $$
          </button>
          <button
            onClick={() => filterPrice('$$$')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
            $$$
          </button>
          <button
            onClick={() => filterPrice('$$$$')}
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
            $$$$
          </button>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
        {foods.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>

      {/* Display menus */}
      <div className='pt-12 lg:pb-2'>
        <h2 className='text-orange-600 text-3xl font-bold text-center pb-4'>
          Top Rated Menu Items
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3'>
          {categories.map((item, index) => (
            <Footer
              key={index}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Food
