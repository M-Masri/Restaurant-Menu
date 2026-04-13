import { useEffect, useMemo, useRef, useState } from 'react'
import MenuTabs from './components/MenuTabs'
import FoodCard from './components/FoodCard'
import { menuCategories, menuItems } from './data/menuData'
import logoImage from './assets/logo.jpeg'

function App() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])
  const sectionRefs = useRef({})

  const groupedItems = useMemo(() => {
    return menuCategories.map((category) => ({
      category,
      items: menuItems.filter((item) => item.category === category),
    }))
  }, [])

  useEffect(() => {
    const updateActiveCategoryOnScroll = () => {
      const activationOffset = 60
      const scrollPosition = window.scrollY + activationOffset
      const reachedPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2

      if (reachedPageBottom) {
        const lastCategory = menuCategories[menuCategories.length - 1]
        setActiveCategory((prevCategory) =>
          prevCategory === lastCategory ? prevCategory : lastCategory,
        )
        return
      }

      let currentCategory = menuCategories[0]

      menuCategories.forEach((category) => {
        const section = sectionRefs.current[category]
        if (!section) {
          return
        }

        if (section.offsetTop <= scrollPosition) {
          currentCategory = category
        }
      })

      setActiveCategory((prevCategory) =>
        prevCategory === currentCategory ? prevCategory : currentCategory,
      )
    }

    updateActiveCategoryOnScroll()
    window.addEventListener('scroll', updateActiveCategoryOnScroll, {
      passive: true,
    })
    window.addEventListener('resize', updateActiveCategoryOnScroll)

    return () => {
      window.removeEventListener('scroll', updateActiveCategoryOnScroll)
      window.removeEventListener('resize', updateActiveCategoryOnScroll)
    }
  }, [])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)

    const target = sectionRefs.current[category]
    if (!target) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="relative overflow-x-clip px-4 pb-4 pt-10 text-[#fefdfe] sm:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-120px] h-72 w-72 rounded-full bg-[#bc372b]/30 blur-3xl" />
        <div className="absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-[#725b52]/30 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-[1500px]">
        <section className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-4 border-[#bc372b] bg-gradient-to-b from-[#ffffff] to-[#f3ece8] shadow-[0_0_0_12px_rgba(188,55,43,0.2)]">
            <img
              src={logoImage}
              alt="Usta Grill logo"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <h1 className="mt-8 text-balance text-4xl font-black uppercase tracking-[0.04em] text-[#fefdfe] sm:text-5xl">
            USTA GRILL MENU
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[#d5c4bb] sm:text-base">
            Fresh grill flavors, bold spices, and daily prepared plates inspired by
            your brand style.
          </p>
        </section>

        <div className="sticky top-3 z-50 mt-10 rounded-3xl border border-[#725b52]/40 bg-[#120f0d]/88 px-2 py-3 backdrop-blur sm:px-3">
          <MenuTabs
            categories={menuCategories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <section className="mt-5 rounded-3xl border border-[#725b52]/40 bg-[#1b1613]/78 p-4 shadow-[0_14px_38px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-7">

          <div className="mt-7 space-y-16">
            {groupedItems.map(({ category, items }) => (
              <section
                key={category}
                data-category={category}
                ref={(node) => {
                  sectionRefs.current[category] = node
                }}
                className="scroll-mt-36"
              >
                <h2 className="sr-only">{category}</h2>
                <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {items.map((item) => (
                    <FoodCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>

        </section>
      </div>
    </main>
  )
}

export default App
