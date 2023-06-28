const Card = ({ name, image, price }) => {
  return (
    <div className='rounded-md shadow-xl hover:scale-105 duration-300 cursor-pointer'>
      <img
        className='h-[200px] w-full object-cover rounded-t-md'
        src={image}
        alt={name}
      />
      <div className='flex flex-row justify-between my-2 mx-1'>
        <p className='font-bold'>{name}</p>
        <p>
          <span className='bg-orange-500 text-white rounded-lg p-1'>
            {price}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Card
