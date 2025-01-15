'use client'

interface Move {
  name: string;
  description: string;
  attack?: number;
}

interface PaemonCardProps {
  name: string;
  hp: number;
  type: string;
  moves: Move[];
  weakness: string;
  flavorText: string;
  imageUrl: string;
}

export default function PaemonCard({
  name,
  hp,
  type,
  moves,
  weakness,
  flavorText,
  imageUrl,
}: PaemonCardProps) {
  return (
    <div className="gba-screen mb-6 overflow-hidden">
      <div className="bg-[#E0757C] p-4 rounded-t-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{name}</h2>
          <span className="font-bold text-white">HP{hp}</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-[#7BA1A8] p-4">
        <div className="relative w-full h-64 border-4 border-[#5A8087] rounded-lg overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-contain w-full h-full pixelated"
          />
        </div>
      </div>

      {/* Type and Weakness */}
      <div className="bg-[#7BA1A8] p-4 flex justify-between items-center border-t-2 border-[#5A8087]">
        <div className="flex items-center gap-2">
          <span className="text-[#2D1B2E] font-bold">Type:</span>
          <span className="gba-button px-2 py-1 text-sm">{type}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#2D1B2E] font-bold">Weakness:</span>
          <span className="gba-button px-2 py-1 text-sm">{weakness}</span>
        </div>
      </div>

      {/* Moves */}
      <div className="bg-[#7BA1A8] p-4 border-t-2 border-[#5A8087]">
        <h3 className="text-[#2D1B2E] font-bold mb-2">Moves:</h3>
        <div className="space-y-3">
          {moves.map((move, index) => (
            <div 
              key={move.name}
              className="bg-[#5A8087] p-3 rounded-lg"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white">{move.name}</span>
                {move.attack && (
                  <span className="text-white">×{move.attack}</span>
                )}
              </div>
              <p className="text-sm text-white/90">{move.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Flavor Text */}
      <div className="bg-[#7BA1A8] p-4 border-t-2 border-[#5A8087] rounded-b-lg">
        <p className="text-sm text-[#2D1B2E] italic">{flavorText}</p>
      </div>
    </div>
  );
}
