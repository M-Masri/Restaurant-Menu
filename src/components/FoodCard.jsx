function FoodCard({ item }) {
  return (
    <article className="group animate-fade-in flex min-h-[230px] w-full max-w-none overflow-hidden rounded-2xl border border-[#725b52]/30 bg-[#241c18] shadow-[0_10px_28px_rgba(0,0,0,0.38)] transition hover:-translate-y-1 hover:border-[#bc372b]/80 sm:min-h-0 sm:max-w-[340px] sm:flex-col">
      <div className="relative h-auto w-[48%] shrink-0 self-stretch overflow-hidden sm:h-56 sm:w-full">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#725b52] via-[#bc372b] to-[#513428] px-2 text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#ffffff]">
            Photo Coming Soon
          </div>
        )}
      </div>

      <div className="flex-1 p-3 sm:p-4">
        <h3 className="text-base font-bold text-[#fefdfe] sm:text-lg">{item.name}</h3>
        {item.description ? (
          <p className="mt-2 max-h-[3.8rem] overflow-hidden text-sm leading-5 text-[#d5c4bb] sm:max-h-none">
            {item.description}
          </p>
        ) : null}

        <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
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