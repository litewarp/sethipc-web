import create from 'zustand'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface HeaderStore {
  isOpen: boolean
  setIsOpen: (b: boolean) => void
  toggle: () => void
}

const useHeaderStore = create<HeaderStore>((set) => ({
  isOpen: false,
  setIsOpen: (b) => set({ isOpen: b }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen }))
}))

export const useHeader = () => {
  const router = useRouter()
  const { isOpen, setIsOpen, toggle } = useHeaderStore()

  useEffect(() => {
    const handleChange = () => setIsOpen(false)
    router.events.on('routeChangeStart', handleChange)
    return () => {
      router.events.off('routeChangeStart', handleChange)
    }
  }, [setIsOpen, router.events])

  return { isOpen, setIsOpen, toggle }
}
