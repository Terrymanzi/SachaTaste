// function placeholderFC() {
//   return (
//     <section className="min-h-screen bg-[var(--brand-orange)] text-[var(--brand-white)] flex items-center">
//       <div className="max-w-5xl bg-var(--brand-orange) mx-auto px-6">
//         <h1 className="text-6xl font-bold text-var(--brand-orange)">
//           NEXT LEVEL SHAWARMA
//         </h1>

//         <p className="mt-6 text-lg text-var(--brand-cream) max-w-xl">
//           Authentic flavours. No shortcuts. No compromises.
//         </p>

//         <button className="mt-8 bg-var(--brand-orange) text-var(--brand-black) px-6 py-3 font-semibold tracking-wide hover:opacity-90 transition">
//           View Menu
//         </button>
//       </div>
//     </section>
//   );
// }
/////////////////////////////////////////////////////////////////

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, FindUsPage } from "./pages";
import { MainLayout } from "./layouts";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route path="/find-us" element={<FindUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
