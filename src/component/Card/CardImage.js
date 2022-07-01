function CardImage({ src, title, by }) {
  return (
    <div className="w-56">
      <a href="/" onClick={(e) => e.preventDefault()} className="c-card block rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 rounded-xl h-full w-full object-cover"
            src={
              src ||
              'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
            }
            alt={title ?? ''}
          />
        </div>
        <div className="py-2">
          <span className="my-2 font-normal font-inter">{title || 'Purus Ullamcorper Inceptos Nibh'}</span>
        </div>
        <div className="flex items-center justify-start text-gray-700">
          <span className="font-inter text-xs font-normal">By</span>
          <span className="font-caveat text-xs font-normal">{by || 'Ermäßigung mit Karte'}</span>
        </div>
      </a>
    </div>
  );
}

export default CardImage;
