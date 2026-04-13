import { useEffect, useRef } from 'react'
import fromOvenIcon from '../assets/tabslogo/From the oven.webp'
import coldIcon from '../assets/tabslogo/cold.webp'
import hotIcon from '../assets/tabslogo/Hot aptiezer.webp'
import signatureIcon from '../assets/tabslogo/Signatur sandwish.webp'
import charcoalIcon from '../assets/tabslogo/Charcol grill.webp'
import ustaSpecialIcon from '../assets/tabslogo/Usta special dishes.webp'
import traditionalIcon from '../assets/tabslogo/Traditional oven dishis .webp'
import sideIcon from '../assets/tabslogo/Side dish.webp'
import dessertIcon from '../assets/tabslogo/Kunafa.webp'
import beveragesIcon from '../assets/tabslogo/Bavareg.webp'

const tabIcons = {
  'From the Stone Oven': fromOvenIcon,
  'Cold Appetizers': coldIcon,
  'Hot Appetizers': hotIcon,
  'Signature Sandwiches': signatureIcon,
  'Charcoal Grills': charcoalIcon,
  'Usta Special Dishes': ustaSpecialIcon,
  'Traditional Oven Dishes': traditionalIcon,
  'Side Dishes': sideIcon,
  'Turkish Desserts': dessertIcon,
  Beverages: beveragesIcon,
}

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
        const icon = tabIcons[category]

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
            <span className="inline-flex items-center gap-2">
              {icon ? (
                <img
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : null}
              {category}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default MenuTabs