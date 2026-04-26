import { useLayoutEffect, useState } from 'react'

export function useTabsOverflow(containerRef: React.RefObject<HTMLElement>) {
  // 左边/右边内容是否溢出
  const [tabsScrollState, setTabsScrollState] = useState({
    isLeftOverflow: false,
    isRightOverflow: false,
    isTabsOverflow: false
  })

  useLayoutEffect(() => {
    const root = containerRef.current
    if (!root) return

    const getEl = () => {
      const scrollWrapper = root.querySelector(
        '.semi-overflow-list-scroll-wrapper'
      ) as HTMLElement | null

      return scrollWrapper
    }
    const el = getEl()
    if (!el) return
    const check = () => {
      const { scrollLeft, clientWidth, scrollWidth } = el

      setTabsScrollState({
        isLeftOverflow: scrollLeft > 0,
        isRightOverflow: scrollLeft + clientWidth + 16 < scrollWidth,
        isTabsOverflow: scrollWidth > clientWidth
      })
    }

    check() as any

    // 实时滚动监听（关键）
    (el as HTMLElement).addEventListener('scroll', check)

    const resizeObserver = new ResizeObserver(check)
    resizeObserver.observe(el)

    return () => {
      (el as HTMLElement).removeEventListener('scroll', check)
      resizeObserver.disconnect()
    }
  }, [containerRef])

  return tabsScrollState
}