// Particle configuration
const PARTICLE_TYPES = [
  // Circles (40% of particles)
  { type: 'circle' as const, size: 'w-1 h-1', color: 'bg-white/40' },
  { type: 'circle' as const, size: 'w-1.5 h-1.5', color: 'bg-white/35' },
  { type: 'circle' as const, size: 'w-2 h-2', color: 'bg-white/30' },
  
  // Stars (30% of particles)  
  { type: 'star' as const, size: 8, color: 'bg-cyan-300/40' },
  { type: 'star' as const, size: 10, color: 'bg-cyan-300/35' },
  
  // Diamonds (20% of particles)
  { type: 'diamond' as const, size: 'w-1.5 h-1.5', color: 'bg-purple-300/40' },
  { type: 'diamond' as const, size: 'w-2 h-2', color: 'bg-purple-300/35' },
  
  // Triangles (10% of particles)
  { type: 'triangle' as const, size: 8, color: 'rgba(147, 197, 253, 0.4)' },
];

// Star component
const StarParticle = ({ size, rotation }: { size: number; rotation: number }) => (
  <div 
    className="relative drop-shadow-sm" 
    style={{ 
      width: `${size}px`, 
      height: `${size}px`,
      transform: `rotate(${rotation}deg)`
    }}
  >
    <div className="absolute bg-cyan-300/40" style={{ width: `${size}px`, height: '2px', top: `${size/2-1}px`, left: '0' }} />
    <div className="absolute bg-cyan-300/40" style={{ width: '2px', height: `${size}px`, top: '0', left: `${size/2-1}px` }} />
    <div className="absolute bg-cyan-300/40 rotate-45" style={{ width: `${size*0.75}px`, height: '1.5px', top: `${size/2-0.75}px`, left: `${size*0.125}px` }} />
    <div className="absolute bg-cyan-300/40 -rotate-45" style={{ width: `${size*0.75}px`, height: '1.5px', top: `${size/2-0.75}px`, left: `${size*0.125}px` }} />
  </div>
);

// Triangle component
const TriangleParticle = ({ size, color, rotation }: { size: number; color: string; rotation: number }) => (
  <div 
    className="drop-shadow-sm"
    style={{ 
      transform: `rotate(${rotation}deg)`,
      width: 0, 
      height: 0,
      borderLeft: `${size/2}px solid transparent`,
      borderRight: `${size/2}px solid transparent`,
      borderBottom: `${size}px solid ${color}`,
    }}
  />
);

// Main component
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base radial gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(88, 28, 135, 0.3) 0%, rgba(30, 58, 138, 0.2) 40%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
      
      {/* Layered glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[500px] md:h-[600px] rounded-full blur-3xl animate-pulse bg-gradient-to-r from-purple-500/25 to-blue-500/25" style={{ animationDuration: '5s' }} />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[400px] h-[250px] md:h-[300px] rounded-full blur-2xl animate-pulse bg-gradient-to-r from-white/15 to-cyan-300/20" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1000px] h-[600px] md:h-[700px] rounded-full blur-3xl animate-pulse bg-gradient-to-r from-purple-400/15 to-indigo-400/15" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => {
          const particle = PARTICLE_TYPES[i % PARTICLE_TYPES.length];
          const x = 20 + Math.random() * 60;
          const y = 20 + Math.random() * 60;
          const rotation = Math.random() * 360;
          const duration = 2 + Math.random() * 4;
          const delay = Math.random() * 3;
          
          const commonStyle = {
            left: `${x}%`,
            top: `${y}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          };
          
          return (
            <div key={i} className="absolute animate-ping" style={commonStyle}>
              {particle.type === 'circle' && (
                <div className={`${particle.size} rounded-full ${particle.color} shadow-sm shadow-white/20`} style={{ transform: `rotate(${rotation}deg)` }} />
              )}
              
              {particle.type === 'diamond' && (
                <div className={`${particle.size} ${particle.color} shadow-sm shadow-white/20`} style={{ transform: `rotate(${rotation + 45}deg)` }} />
              )}
              
              {particle.type === 'star' && (
                <StarParticle size={particle.size} rotation={rotation} />
              )}
              
              {particle.type === 'triangle' && (
                <TriangleParticle size={particle.size} color={particle.color} rotation={rotation} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}