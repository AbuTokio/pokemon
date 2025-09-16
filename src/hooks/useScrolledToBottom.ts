import React, { useEffect } from "react"

export default function useScrolledToBottom(setOffset: React.Dispatch<React.SetStateAction<number>>) {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setOffset((prev) => prev + 20)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [setOffset])
}
