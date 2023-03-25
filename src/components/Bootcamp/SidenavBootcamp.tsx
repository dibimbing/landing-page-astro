import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useEffect, useRef, useState } from "react";
import { gotoElementByIdAdjusted } from "../../utils/scroll";
import {
  getIsNotReachingBottomBootcamp,
  getPosition,
  getShouldStick,
  getShouldUnstickBottom,
} from "../../utils/sidebar";

function SidenavBootcamp() {
  const contents = [
    {
      id: "about",
      title: "Tentang Program",
    },
    {
      id: "curriculum",
      title: "Kurikulum",
    },
    {
      id: "flow",
      title: "Alur Bootcamp",
    },
    {
      id: "method",
      title: "Metode Belajar",
    },
    {
      id: "mentor",
      title: "Mentor",
    },
    {
      id: "alumni",
      title: "Testimoni Alumni",
    },
    {
      id: "price",
      title: "Biaya Pendidikan",
    },
    {
      id: "faq",
      title: "FAQ",
    },
  ];

  const stickDistanceToTop = 103;
  const triggerScriptAds = () => {
    // @ts-ignore
    window.lintrk("track", { conversion_id: 5875388 });
    // @ts-ignore
    // window.fbq('track', 'Add payment info new');
    // hitFBServer({ event: "Add payment info new" });
  };

  const sideNavRef = useRef(null);
  const sideNavWrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const [navStyle, setNavStyle] = useState({
    top: "0",
    border: "2px solid #E1E7EC",
    p: "16px",
    borderRadius: "16px",
    minWidth: "225px",
    maxWidth: "225px",
  });

  const [navStyle2, setNavStyle2] = useState("");

  useScrollPosition(
    ({ currPos }) => {
      const isNotReachingBottomBootcamp = getIsNotReachingBottomBootcamp(
        // @ts-ignore
        document.querySelector("#BootcampSection").getBoundingClientRect()
          .bottom,
        window.innerHeight
      );
      const shouldStick = getShouldStick(
        currPos.y,
        stickDistanceToTop,
        isNotReachingBottomBootcamp
      );
      const shouldUnstickBottom = getShouldUnstickBottom(
        shouldStick,
        currPos.y
      );

      const getTop = () => {
        if (shouldUnstickBottom) {
          return (
            window.pageYOffset +
            // @ts-ignore
            document.querySelector("#BootcampSection").getBoundingClientRect()
              .bottom -
            window.innerHeight +
            stickDistanceToTop +
            200
          );
        }
        return stickDistanceToTop;
      };

      // setNavStyle((prev) => {
      //   return {
      //     ...prev,
      //     position: getPosition(shouldStick, shouldUnstickBottom),
      //     top: `${getTop()}px`,
      //   };
      // });
      const top = getTop();
      const position = getPosition(shouldStick, shouldUnstickBottom);
      setNavStyle2(`${position} top-[${top}px]`);
    },
    [],
    // @ts-ignore
    sideNavWrapperRef
  );

  const handleScroll = () => {
    // check position and update nav
    const current =
      contents.length -
      [...contents].reverse().findIndex((item) => {
        const el = document.getElementById(item?.id);
        if (!el) return false;
        return window.scrollY >= el.offsetTop - stickDistanceToTop;
      }) -
      1;
    setActiveIndex(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const SideNavList = () => {
    return (
      <div className="flex flex-col gap-6">
        <p className="text-black text-xl font-bold">
          Bootcamp UI UX Design Batch 13
        </p>
        <div className="flex flex-col">
          {contents.map((content, index) => (
            <div
              key={content.id}
              className={`
              px-4 
              py-2.5 
              hover:bg-[#0BB1CB1A] 
              rounded-r-lg 
              ${
                content.id + "-" + activeIndex === content.id + "-" + index
                  ? "side-item-box-shadow-active"
                  : "side-item-box-shadow"
              }
              duration-500
            `}
              onClick={() => gotoElementByIdAdjusted(content.id, 100)}
            >
              <p className="font-semibold text-black">{content.title}</p>
            </div>
          ))}
        </div>
        <button className="bg-primary text-white w-full py-3.5 rounded-md font-bold">
          DAFTAR SEKARANG
        </button>
      </div>
    );
  };

  return (
    <div ref={sideNavWrapperRef}>
      <div
        className={`top-0 border-2 border-[#E1E7EC] p-4 rounded-xl min-w-[225px] max-w-[225px] mb-10 md:mb-0 ${navStyle2} hidden md:block`}
        ref={sideNavRef}
      >
        <SideNavList />
      </div>

      <div
        className={`top-0 border-2 border-[#E1E7EC] p-4 rounded-xl mb-10 md:mb-0 block md:hidden w-full`}
      >
        <SideNavList />
      </div>
    </div>
  );
}

export default SidenavBootcamp;
