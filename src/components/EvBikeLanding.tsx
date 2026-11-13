import { useState } from 'react'
import imgRectangle3 from '../assets/figma/01dff.svg'
import imgEllipse1 from '../assets/figma/0482c.svg'
import imgRectangle4 from '../assets/figma/12359.svg'
import imgEllipse2 from '../assets/figma/28604.svg'
import imgGroup from '../assets/figma/2970a.svg'
import imgEvBike11 from '../assets/figma/380f1.png'
import imgDownload1 from '../assets/figma/440be.png'
import imgVector1 from '../assets/figma/6433d.svg'
import imgVector2 from '../assets/figma/7f093.svg'
import imgEllipse4 from '../assets/figma/bc967.svg'
import imgVector from '../assets/figma/c41d9.svg'
import imgEllipse3 from '../assets/figma/d8cd7.svg'
import imgEllipse6 from '../assets/figma/e4b34.svg'
import imgEllipse5 from '../assets/figma/e57e0.svg'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', left: 'left-[401px]', weight: 'font-bold', nodeId: '1:25' },
  { id: 'products', label: 'Products', left: 'left-[522px]', weight: 'font-black', nodeId: '1:37' },
  { id: 'gallery', label: 'gallery', left: 'left-[694px]', weight: 'font-bold', nodeId: '1:38' },
  { id: 'contact', label: 'Contact', left: 'left-[845px]', weight: 'font-bold', nodeId: '1:39' },
] as const

const SPECS = [
  {
    id: 'speed',
    value: '50 km/hr',
    label: 'speed',
    left: 'left-[841.04px]',
    top: 'top-[819.78px]',
    nodeId: '9:10',
  },
  {
    id: 'range',
    value: '80km',
    label: 'battery range',
    left: 'left-[977.03px]',
    top: 'top-[815.72px]',
    nodeId: '9:11',
  },
  {
    id: 'charging',
    value: '3.5hr',
    label: 'charging time',
    left: 'left-[1113.02px]',
    top: 'top-[815.72px]',
    nodeId: '9:12',
  },
] as const

const PAGINATION_DOTS = [
  { index: 0, left: 'left-[700px]', nodeId: '9:46' },
  { index: 1, left: 'left-[721px]', nodeId: '9:47' },
  { index: 2, left: 'left-[742px]', nodeId: '9:48' },
  { index: 3, left: 'left-[763px]', nodeId: '9:49' },
] as const

export default function EvBikeLanding() {
  const [activeNav, setActiveNav] = useState<string>('products')
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + PAGINATION_DOTS.length) % PAGINATION_DOTS.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % PAGINATION_DOTS.length)
  }

  return (
    <main
      className="relative h-[982px] w-[1512px] shrink-0 overflow-clip rounded-[30px] select-none"
      data-node-id="1:2"
      data-name="EV Bike"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 982' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(132.9 123.8 -190.62 204.63 355 -10.5)'><stop stop-color='rgba(235,243,245,1)' offset='0.10457'/><stop stop-color='rgba(197,226,240,1)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(129.4014173920212deg, rgb(238, 255, 255) 4.2848%, rgb(110, 169, 168) 106.09%)",
      }}
    >
      {/* Background Large Ellipses on Right */}
      <div
        className="pointer-events-none absolute top-[-586px] left-[661px] size-[1516px]"
        data-node-id="1:7"
      >
        <img alt="" className="block max-w-none" src={imgEllipse1} />
      </div>

      <div
        className="pointer-events-none absolute top-[-535px] left-[644px] h-[1487px] w-[1458px]"
        data-node-id="9:32"
      >
        <img alt="" className="block max-w-none" src={imgEllipse2} />
      </div>

      {/* Right Sidebar Strip - Bottom Half ("ELECTRIC - B") */}
      <div
        className="absolute top-[491px] left-[1406px] h-[491px] w-[106px] bg-gradient-to-b from-[#89c8dd] to-[#73adc1]"
        data-node-id="9:29"
      />
      <div
        className="pointer-events-none absolute top-[605px] left-[1450px] flex h-[242px] w-[18px] items-center justify-center"
        data-node-id="9:30"
      >
        <div className="flex-none rotate-90">
          <p className="relative font-['Inter',sans-serif] text-[15px] leading-[1.18] font-medium tracking-[13.125px] whitespace-nowrap text-white uppercase not-italic">
            ELECTRIC - B
          </p>
        </div>
      </div>

      {/* Right Sidebar Strip - Top Half ("THE CONCEPT" + Search Icon) */}
      <div
        className="absolute top-0 left-[1406px] h-[491px] w-[106px]"
        data-node-id="9:25"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 106 491' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(8.8463 47.9 -40.643 12.356 17.537 12)'><stop stop-color='rgba(154,224,211,1)' offset='0'/><stop stop-color='rgba(103,195,186,1)' offset='0.48037'/><stop stop-color='rgba(78,181,173,1)' offset='0.72056'/><stop stop-color='rgba(53,167,160,1)' offset='0.96075'/></radialGradient></defs></svg>\")",
        }}
      />
      <button
        type="button"
        aria-label="Search"
        className=" absolute top-[59px] left-[1445px] h-[28px] w-[28px] cursor-pointer border-0 bg-transparent p-0 transition-opacity hover:opacity-80"
        data-node-id="9:26"
        data-name="Vector"
      >
        <img alt="" className="block max-w-none" src={imgVector} />
      </button>
      <div
        className="pointer-events-none absolute top-[178px] left-[1450px] flex h-[239px] w-[18px] items-center justify-center"
        data-node-id="9:27"
      >
        <div className="flex-none rotate-90">
          <p className="relative font-['Inter',sans-serif] text-[15px] leading-[1.18] font-medium tracking-[13.125px] whitespace-nowrap text-white uppercase not-italic">
            THE CONCEPT
          </p>
        </div>
      </div>

      {/* Large Background Watermark Text "EV-B" */}
      <p
        className="font-neumatic pointer-events-none absolute top-[221px] left-[1004px] text-[252.099px] leading-[1.18] tracking-[-3.7815px] whitespace-nowrap text-white uppercase not-italic [text-shadow:54px_61px_90px_rgba(108,198,188,0.51)]"
        data-node-id="9:38"
      >
        ev-b
      </p>

      {/* Main Electric Scooter Hero Image */}
      <div
        className="pointer-events-none absolute top-[22px] left-[622px] h-[937px] w-[747px] rounded-[373.5px] mix-blend-darken"
        data-node-id="1:22"
        data-name="EV-Bike-1 1"
      >
        <img
          alt="EV-B Electric Scooter"
          className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[373.5px] object-cover"
          src={imgEvBike11}
        />
      </div>

      <div
        className="pointer-events-none absolute top-[160px] left-[600px] h-[613px] w-[747px]"
        data-node-id="9:34"
        data-name="image"
      />

      {/* Specifications Glassmorphism Card */}
      <div className=" absolute contents top-[773px] left-[778px]" data-node-id="9:8">
        <div
          className="absolute top-[773px] left-[778px] h-[95.463px] w-[453px] rounded-[17.111px] border-[1.5px] border-solid border-[rgba(0,0,0,0.36)] bg-[rgba(70,207,255,0)] backdrop-blur-[13.059px]"
          data-node-id="9:9"
        />
        {SPECS.map((spec) => (
          <div
            key={spec.id}
            className={`absolute ${spec.left} ${spec.top} flex w-[81.183px] -translate-y-1/2 flex-col justify-center font-['Inter',sans-serif] leading-[0] font-semibold text-[#3b3b3b] not-italic`}
            data-node-id={spec.nodeId}
          >
            <p className="mb-0 text-[16.237px] leading-[16.744px]">{spec.value}</p>
            <p className="text-[12.177px] leading-[16.744px]">{spec.label}</p>
          </div>
        ))}
      </div>

      {/* Top-Left Brand Motorcycle Silhouette Logo */}
      <div
        className="pointer-events-none absolute top-[-17px] left-[-17px] h-[174px] w-[224px]"
        data-node-id="1:24"
        data-name="download 1"
      >
        <img
          alt="EV-B Brand Logo"
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover mix-blend-multiply"
          src={imgDownload1}
        />
      </div>

      {/* Top Navigation Links */}
      <nav aria-label="Main Navigation">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveNav(item.id)}
              className={`absolute top-[69px] ${item.left} cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[20px] leading-[normal] ${
                isActive ? 'font-black' : item.weight
              } tracking-[3px] whitespace-nowrap text-[#363543] uppercase not-italic transition-opacity hover:opacity-75`}
              data-node-id={item.nodeId}
            >
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* LogIn Button */}
      <div
        className="pointer-events-none absolute top-[56px] left-[1119px] h-[60px] w-[150px]"
        data-node-id="1:40"
      >
        <img alt="" className="block max-w-none" src={imgRectangle3} />
      </div>
      <button
        type="button"
        className="absolute top-[74px] left-[1157px] cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[20px] leading-[normal] font-bold tracking-[3px] whitespace-nowrap text-white uppercase not-italic transition-opacity hover:opacity-85"
        data-node-id="1:41"
      >
        LogIn
      </button>

      {/* Pre-order Button */}
      <div
        className="pointer-events-none absolute top-[677px] left-[59px] h-[60px] w-[208px]"
        data-node-id="2:51"
      >
        <img alt="" className="block max-w-none" src={imgRectangle4} />
      </div>
      <button
        type="button"
        className="absolute top-[695px] left-[97px] cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[20px] leading-[normal] font-bold tracking-[3px] whitespace-nowrap text-black uppercase not-italic transition-opacity hover:opacity-80"
        data-node-id="2:52"
      >
        Pre-order
      </button>

      {/* Hero Headline & Copy */}
      <p
        className=" absolute top-[370px] left-[59px] font-['Inter',sans-serif] text-[32px] leading-[normal] font-medium tracking-[16px] whitespace-nowrap text-black uppercase not-italic"
        data-node-id="1:44"
      >
        Let’s ride the
      </p>
      <h1
        className="absolute top-[433px] left-[59px] m-0 font-['Inter',sans-serif] text-[96px] leading-[normal] font-bold tracking-[9.6px] whitespace-nowrap text-black uppercase not-italic"
        data-node-id="1:45"
      >
        FUTURE
      </h1>
      <p
        className="absolute top-[573px] left-[59px] font-['Inter',sans-serif] text-[16px] leading-[normal] font-medium tracking-[1.6px] whitespace-nowrap text-black uppercase not-italic"
        data-node-id="1:46"
      >
        Simple and sleek design to make your ride easy
      </p>
      <p
        className="absolute top-[597px] left-[59px] font-['Inter',sans-serif] text-[16px] leading-[normal] font-medium tracking-[1.6px] whitespace-nowrap text-black uppercase not-italic"
        data-node-id="2:47"
      >
        Make your journey fast and easy
      </p>

      {/* Decorative Floating Orbs */}
      <div
        className="pointer-events-none absolute top-[105px] left-[-134px] h-[249px] w-[268px]"
        data-node-id="9:2"
      >
        <div className="absolute inset-[-11.65%_-53.73%_-60.64%_-13.43%]">
          <img alt="" className="block max-w-none" src={imgEllipse3} />
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-[-90px] left-[943px] h-[179.501px] w-[176px]"
        data-node-id="9:4"
      >
        <div className="absolute inset-[-17.27%_-56.25%_-83.01%_-46.02%]">
          <img alt="" className="block max-w-none" src={imgEllipse4} />
        </div>
      </div>

      {/* Feature Plus Hotspot on Scooter Front Wheel */}
      <div
        className="absolute inset-[64.15%_57.47%_33.4%_40.94%]"
        data-node-id="9:55"
        data-name="Group"
      >
        <img alt="" className="block max-w-none" src={imgGroup} />
      </div>

      {/* Bottom Concentric Decorative Orbs */}
      <div
        className="pointer-events-none absolute top-[876px] left-[282px] h-[249px] w-[268px]"
        data-node-id="9:59"
      >
        <div className="absolute inset-[-11.65%_-53.73%_-60.64%_-13.43%]">
          <img alt="" className="block max-w-none" src={imgEllipse3} />
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-[911px] left-[329px] h-[179.501px] w-[176px]"
        data-node-id="9:61"
      >
        <div className="absolute inset-[-17.27%_-56.25%_-83.01%_-46.02%]">
          <img alt="" className="block max-w-none" src={imgEllipse4} />
        </div>
      </div>

      {/* Bottom Bar Controls: Prev, Dots, Next, Floating Plus Action */}
      <div className="absolute contents top-[898px] left-[105px]" data-node-id="9:40">
        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-[925px] left-[128px] cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[18px] leading-[0.88] font-semibold whitespace-nowrap text-[rgba(0,0,0,0.6)] capitalize not-italic transition-opacity hover:opacity-80"
          data-node-id="9:41"
        >
          Prev
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute top-[925px] left-[1249px] cursor-pointer border-0 bg-transparent p-0 font-['Inter',sans-serif] text-[18px] leading-[0.88] font-semibold whitespace-nowrap text-[rgba(0,0,0,0.6)] capitalize not-italic transition-opacity hover:opacity-80"
          data-node-id="9:42"
        >
          Next
        </button>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={handlePrev}
          className="absolute inset-[93.79%_92.33%_3.71%_6.94%] cursor-pointer border-0 bg-transparent p-0"
          data-node-id="9:43"
          data-name="Vector"
        >
          <div className="absolute inset-[-4.73%_-10.57%]">
            <img alt="" className="block max-w-none" src={imgVector1} />
          </div>
        </button>

        <button
          type="button"
          aria-label="Next slide"
          onClick={handleNext}
          className="absolute inset-[93.83%_13.36%_3.67%_85.91%] flex cursor-pointer items-center justify-center border-0 bg-transparent p-0"
          data-node-id="9:44"
          style={{ containerType: 'size' }}
        >
          <div className="h-[100cqh] w-[100cqw] flex-none rotate-180">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-4.73%_-10.57%]">
                <img alt="" className="block max-w-none" src={imgVector2} />
              </div>
            </div>
          </div>
        </button>

        {/* Bottom-Right Floating Action Circle & Plus Icon */}
        <div
          className="pointer-events-none absolute top-[898px] left-[1386px] size-[70px]"
          data-node-id="9:45"
        >
          <img alt="" className="block max-w-none" src={imgEllipse5} />
        </div>
        <button
          type="button"
          aria-label="More details"
          className="absolute inset-[93.89%_5.22%_3.66%_93.19%] cursor-pointer border-0 bg-transparent p-0"
          data-node-id="9:51"
          data-name="Group"
        >
          <img alt="" className="block max-w-none" src={imgGroup} />
        </button>

        {/* Pagination Dots */}
        {PAGINATION_DOTS.map((dot) => (
          <button
            key={dot.index}
            type="button"
            aria-label={`Slide ${dot.index + 1}`}
            aria-current={currentSlide === dot.index ? 'true' : undefined}
            onClick={() => setCurrentSlide(dot.index)}
            className={`absolute top-[928px] ${dot.left} size-[10px] cursor-pointer border-0 bg-transparent p-0 transition-transform ${
              currentSlide === dot.index ? 'scale-110' : 'opacity-85 hover:opacity-100'
            }`}
            data-node-id={dot.nodeId}
          >
            <img alt="" className="block max-w-none" src={imgEllipse6} />
          </button>
        ))}
      </div>
    </main>
  )
}

