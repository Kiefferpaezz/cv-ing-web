const getYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
        <footer className='w-full flex justify-center bg-white py-4 px-3'>
            <span color="#2B2B2B">{getYear()} All Rights Reserved - Kieffer Paez</span>
        </footer>
  )
}

export { Footer }
