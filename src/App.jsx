function placeholderFC() {
  return (
    <section className="min-h-screen bg-[var(--brand-orange)] text-[var(--brand-white)] flex items-center">
      <div className="max-w-5xl bg-var(--brand-orange) mx-auto px-6">
        <h1 className="text-6xl font-bold text-var(--brand-orange)">
          NEXT LEVEL SHAWARMA
        </h1>

        <p className="mt-6 text-lg text-var(--brand-cream) max-w-xl">
          Authentic flavours. No shortcuts. No compromises.
        </p>

        <button className="mt-8 bg-var(--brand-orange) text-var(--brand-black) px-6 py-3 font-semibold tracking-wide hover:opacity-90 transition">
          View Menu
        </button>
      </div>
    </section>
  );
}
/////////////////////////////////////////////////////////////////
function Nav() {
  return (
    <section className="flex items-start text-[var(--brand-white)] text-sm">
      {/* !--Nav Bar */}
      <div className="mt-8 flex flex-row justify-around gap-24">
        {/* !--logo */}
        <div className=" w-auto h-auto px-12 py-3 bg-var(--brand-black)">
          Logo placeholder
        </div>

        <button className=" bg-var(--brand-black) text-var(--brand-white) px-12 py-3 font-semibold tracking-wide hover:opacity-90 transition border-2 border-[--brand-black] rounded-lg">
          OPENING TIMES
        </button>
        <button className=" bg-var(--brand-black) text-var(--brand-white) px-12 py-3 font-semibold tracking-wide hover:opacity-90 transition border-2 border-[--brand-black] rounded-lg">
          FIND US
        </button>
        <button className=" bg-var(--brand-black) text-var(--brand-white) px-12 py-3 font-semibold tracking-wide hover:opacity-90 transition border-2 border-[--brand-black] rounded-lg">
          ORDER NOW
        </button>

        {/* !--humburger button  */}
        <div className=" w-auto h-auto px-12 py-3 bg-var(--brand-black)">
          hamburg button placeholder
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <body className="mx-24 bg-[var(--brand-orange)]">
      <Nav />
    </body>
  );
}
