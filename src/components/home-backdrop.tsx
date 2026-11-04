import type { ReactElement } from "react"

// A slow vertical S-curve, drawn as an engraved groove
const WAVE_PATH = "M 40 12 C 72 70, 8 120, 40 180 S 72 290, 40 340 S 16 392, 34 408"

// Ring radii for the corner ripples, widening apart like real water rings
const RIPPLE_RADII = [96, 176, 268]

// Soft-UI shapes scattered down the home page for the cursor light to play across.
// Every shape is a different form; top offsets assume the hero fills one screen (100svh).
export const HomeBackdrop = (): ReactElement => (
  <>
    {/* Hero, top-left: raised dial with an engraved ring */}
    <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full container-neumorphic-outset p-0">
      <div className="absolute inset-14 rounded-full neu-well" />
    </div>

    {/* Hero, bottom-right: wide sunken bowl */}
    <div className="absolute -right-24 top-[calc(100svh-18rem)] h-[26rem] w-[26rem] rounded-full neu-well" />

    {/* About, left: eclipse, a raised disc resting off-centre in a sunken bowl.
        At most 96px shows, so it stays inside the 112px lg content margin. */}
    <div className="absolute -left-32 top-[calc(100svh+14rem)] h-56 w-56 rounded-full neu-well">
      <div className="absolute left-10 top-[4.5rem] h-32 w-32 rounded-full container-neumorphic-outset p-0" />
    </div>

    {/* About, right: wave engraved into the surface. Its rims shift with --lx / --ly like the shadows do.
        It spans 16-96px from the edge, inside the 112px lg content margin. */}
    <svg
      viewBox="0 0 80 420"
      className="absolute right-4 top-[calc(100svh+24rem)] h-[26rem] w-20 overflow-visible"
      fill="none"
      strokeLinecap="round"
    >
      <defs>
        <filter id="wave-soften" x="-50%" y="-10%" width="200%" height="120%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <g filter="url(#wave-soften)">
        <path
          d={WAVE_PATH}
          stroke="#9E96C4"
          strokeOpacity="0.6"
          strokeWidth="18"
          className="[transform:translate(calc(var(--lx)*-2.5px),calc(var(--ly)*-2.5px))]"
        />
        <path
          d={WAVE_PATH}
          stroke="#FFFFFF"
          strokeWidth="18"
          className="[transform:translate(calc(var(--lx)*2.5px),calc(var(--ly)*2.5px))]"
        />
      </g>
      <path d={WAVE_PATH} stroke="#E6E3F0" strokeWidth="15" />
    </svg>

    {/* Contact, right edge: raised half-moon pressing out of the wall */}
    <div className="absolute -right-2 bottom-12 h-72 w-36 rounded-l-full container-neumorphic-outset p-0" />

    {/* Page end, bottom-left corner: rings engraved into the surface, spreading from the corner */}
    <svg viewBox="0 0 320 320" className="absolute bottom-0 left-0 h-80 w-80" fill="none">
      <defs>
        <filter id="ripple-soften" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
      </defs>
      <g filter="url(#ripple-soften)">
        {RIPPLE_RADII.map((radius) => (
          <circle
            key={`shadow-${radius}`}
            cx="0"
            cy="320"
            r={radius}
            stroke="#9E96C4"
            strokeOpacity="0.6"
            strokeWidth="14"
            className="[transform:translate(calc(var(--lx)*-2px),calc(var(--ly)*-2px))]"
          />
        ))}
        {RIPPLE_RADII.map((radius) => (
          <circle
            key={`light-${radius}`}
            cx="0"
            cy="320"
            r={radius}
            stroke="#FFFFFF"
            strokeWidth="14"
            className="[transform:translate(calc(var(--lx)*2px),calc(var(--ly)*2px))]"
          />
        ))}
      </g>
      {RIPPLE_RADII.map((radius) => (
        <circle key={`floor-${radius}`} cx="0" cy="320" r={radius} stroke="#E6E3F0" strokeWidth="11" />
      ))}
    </svg>
  </>
)
