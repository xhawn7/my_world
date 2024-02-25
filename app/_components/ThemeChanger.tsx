import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useState } from 'react'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
  const [darkSide, setDarkSide] = useState(
    theme === 'light' || theme === 'system' ? false : true
  )
  console.log(theme)
  const toggleDarkMode = (isDark: boolean) => {
    if (theme === 'light') {
      setDarkSide(true)
      setTheme('dark')
    } else {
      setDarkSide(false)
      setTheme('light')
    }
  }
  return (
    <div>
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={24}
        moonColor="#EEE"
        sunColor="#6C6C6C"
      />
    </div>
  )
}

export default ThemeChanger
