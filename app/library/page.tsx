import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Badge } from "../components/Badge";
import { ButtonLibrary } from "../components/library/ButtonLibrary";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Background />
      <Navbar />

      <div className="relative z-10 pt-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <Badge>Component Library</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-8">
              Beautiful
              <span className="block mt-2 text-purple-600">
                Button Components
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A collection of ready-to-use button components built with Tailwind CSS. 
              Click on any button to copy its code and use it in your project.
            </p>
          </div>

          {/* Button Library */}
          <div className="mb-20">
            <ButtonLibrary />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 