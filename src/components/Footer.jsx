const Footer = ({ name, image }) => {
  return (
    <div className='flex flex-col justify-center items-center hover:bg-slate-200 hover:rounded-xl cursor-pointer'>
      <img
        className='w-full h-[50px] md:h-[70px] lg:h-[90px] object-contain'
        src={image}
        alt={name}
      />
      <p className='text-center'>{name}</p>
    </div>
  )
}

export default Footer
