import { SolutionCard } from "./SolutionCard";
import { activeSolutions, comingSoonSolutions } from "../../lib/solutions-data";

export function SolutionsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeSolutions.map((solution) => (
          <SolutionCard 
            key={solution.title}
            {...solution}
          />
        ))}

        {comingSoonSolutions.map((solution) => (
          <SolutionCard 
            key={solution.title}
            {...solution}
            isComingSoon
          />
        ))}
      </div>
    </div>
  );
} 