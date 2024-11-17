import React from 'react'

export default function Roadmap() {
  return (
    <section className="container py-24">
      <h2 className="mb-16 text-5xl font-black tracking-tighter text-center text-white">
        Roadmap
      </h2>

      {/* Phase 1 */}
      <div className="grid items-center gap-12 mb-24 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h3 className="mb-4 text-3xl font-bold text-pink-400">Phase 1: The Pre-Game</h3>
          <ul className="space-y-3 text-xl text-white/90">
            <li>• Website Launch</li>
            <li>• Social Media Setup</li>
            <li>• Community Building</li>
            <li>• Initial Marketing Push</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="/images/pregame.png" 
            alt="Pre-game phase"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Phase 2 */}
      <div className="grid items-center gap-12 mb-24 md:grid-cols-2">
        <div>
          <img 
            src="/images/happy-hour.png" 
            alt="Happy hour phase"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
        <div>
          <h3 className="mb-4 text-3xl font-bold text-pink-400">Phase 2: Happy Hour</h3>
          <ul className="space-y-3 text-xl text-white/90">
            <li>• CoinGecko & CMC Listings</li>
            <li>• Trending on Twitter/X</li>
            <li>• NFT Collection Launch</li>
            <li>• CEX Listings</li>
          </ul>
        </div>
      </div>

      {/* Phase 3 */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h3 className="mb-4 text-3xl font-bold text-pink-400">Phase 3: After Party</h3>
          <ul className="space-y-3 text-xl text-white/90">
            <li>• $DPIG Merchandise</li>
            <li>• Mobile Game Development</li>
            <li>• Major Exchange Listings</li>
            <li>• Global Marketing Campaign</li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src="/images/after-party.png" 
            alt="After party phase"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
