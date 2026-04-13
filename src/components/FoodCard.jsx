function FoodCard({ item }) {
  return (
    <article className="group animate-fade-in w-full max-w-[340px] overflow-hidden rounded-2xl border border-[#725b52]/30 bg-[#241c18] shadow-[0_10px_28px_rgba(0,0,0,0.38)] transition hover:-translate-y-1 hover:border-[#bc372b]/80">
      <div className="relative h-56 overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#725b52] via-[#bc372b] to-[#513428] text-xs font-semibold uppercase tracking-[0.15em] text-[#ffffff]">
            Photo Coming Soon
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-[#fefdfe]">{item.name}</h3>
        {item.description ? (
          <p className="mt-2 text-sm leading-5 text-[#d5c4bb]">{item.description}</p>
        ) : null}

        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="rounded-full bg-[#3a2c24] px-3 py-1 text-xs font-medium text-[#f1e4de]">
            {item.category}
          </span>
          <span className="rounded-full bg-[#bc372b]/95 px-3 py-1 text-xs font-semibold text-[#ffffff]">
            {item.price}
          </span>
        </div>
      </div>
    </article>
  )
}

export default FoodCard