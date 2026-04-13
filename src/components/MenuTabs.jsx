import { useEffect, useRef } from 'react'

function MenuTabs({ categories, activeCategory, onCategoryChange }) {
  const tabsContainerRef = useRef(null)
  const tabButtonRefs = useRef({})

  useEffect(() => {
    const activeButton = tabButtonRefs.current[activeCategory]
    if (!activeButton) {
      return
    }

    activeButton.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [activeCategory])

  return (
    <div
      ref={tabsContainerRef}
      className="flex items-center gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {categories.map((category) => {
        const isActive = category === activeCategory

        return (
          <button
            key={category}
            ref={(node) => {
              tabButtonRefs.current[category] = node
            }}
            type="button"
            onClick={() => onCategoryChange(category)}
            aria-pressed={isActive}
            className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition ${
              isActive
                ? 'border-[#bc372b] bg-[#bc372b] text-[#ffffff] shadow-[0_8px_20px_rgba(188,55,43,0.35)] ring-2 ring-[#bc372b]/35'
                : 'border-[#725b52]/45 bg-[#261e19] text-[#f1e4de] hover:border-[#bc372b] hover:bg-[#332721]'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default MenuTabs