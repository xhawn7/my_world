import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
const ScrollToTop = () => {
  const wrapper =
    'sticky bottom-5 w-full cursor-pointer flex items-center justify-center z-20'
  const iconWrapper =
    'h-10 w-10 rounded-full bg-darkGreen dark:bg-lightGreen text-lightBackground dark:text-darkBackground flex items-center justify-center'
  return (
    <Link href="#hero">
      <footer className={wrapper}>
        <div className={iconWrapper}>
          <HomeIcon className="animate-pulse" />
        </div>
      </footer>
    </Link>
  )
}

export default ScrollToTop
