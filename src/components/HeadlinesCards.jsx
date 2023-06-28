const HeadlinesCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-white flex flex-col bg-black/50 rounded-xl'>
          <p className='text-2xl font-bold px-2 pt-2'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/1278773/pexels-photo-1278773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>

      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-white flex flex-col bg-black/50 rounded-xl'>
          <p className='text-2xl font-bold px-2 pt-2'>New Restaurant</p>
          <p className='px-2'>New food every week</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>

      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-white flex flex-col bg-black/50 rounded-xl'>
          <p className='text-2xl font-bold px-2 pt-2'>Tacos Manuel</p>
          <p className='px-2'>Is in the town!</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/5454019/pexels-photo-5454019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
    </div>
  )
}

export default HeadlinesCards
