import { useState, useEffect } from 'react'

export function TypeAnimation({ strings, speed = 60, deleteSpeed = 40, repeat = Infinity }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  const currentString = strings[currentIndex % strings.length]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentString.length) {
            setDisplayText(currentString.slice(0, charIndex + 1))
            setCharIndex((prev) => prev + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentString.slice(0, charIndex - 1))
            setCharIndex((prev) => prev - 1)
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => prev + 1)
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentString, speed, deleteSpeed])

  return (
    <span>
      {displayText}
      <span className="cursor-blink" />
    </span>
  )
}