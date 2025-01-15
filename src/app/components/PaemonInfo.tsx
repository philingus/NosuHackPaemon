'use client'

interface PaemonInfoProps {
  name: string;
  background: string;
  personality: string;
  specialAbilities: string[];
}

export default function PaemonInfo({
  name,
  background,
  personality,
  specialAbilities,
}: PaemonInfoProps) {
  return (
    <div className="gba-screen bg-[#9BBC0F]/20">
      <h3 className="text-xl font-bold text-[#2D1B2E] mb-4">About {name}</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-[#2D1B2E] mb-2">Background</h4>
          <p className="text-[#2D1B2E]">{background}</p>
        </div>
        
        <div>
          <h4 className="font-bold text-[#2D1B2E] mb-2">Personality</h4>
          <p className="text-[#2D1B2E]">{personality}</p>
        </div>

        <div>
          <h4 className="font-bold text-[#2D1B2E] mb-2">Special Abilities</h4>
          <ul className="list-disc list-inside space-y-1">
            {specialAbilities.map((ability, index) => (
              <li key={index} className="text-[#2D1B2E]">{ability}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
