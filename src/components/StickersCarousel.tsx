import { useEffect, useState } from "react";
import sticker1 from "@/assets/stickers/sticker-1.png";
import sticker2 from "@/assets/stickers/sticker-2.png";
import sticker3 from "@/assets/stickers/sticker-3.png";
import sticker4 from "@/assets/stickers/sticker-4.png";
import sticker5 from "@/assets/stickers/sticker-5.png";
import sticker6 from "@/assets/stickers/sticker-6.png";
import sticker7 from "@/assets/stickers/sticker-7.png";
import sticker8 from "@/assets/stickers/sticker-8.png";
import sticker9 from "@/assets/stickers/sticker-9.png";

const stickersColumn1 = [sticker1, sticker2, sticker3, sticker4, sticker5];
const stickersColumn2 = [sticker6, sticker7, sticker8, sticker9, sticker1];

const StickersCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-12 bg-accent/30 rounded-3xl">
      <div className="flex gap-6 justify-center">
        {/* Column 1 - moves up */}
        <div className="flex flex-col gap-4 animate-scroll-up">
          {[...stickersColumn1, ...stickersColumn1].map((sticker, index) => (
            <div
              key={`col1-${index}`}
              className="w-32 h-32 md:w-40 md:h-40 bg-background rounded-2xl shadow-card flex items-center justify-center p-4 shrink-0"
            >
              <img
                src={sticker}
                alt={`Figurinha ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Column 2 - moves down */}
        <div className="flex flex-col gap-4 animate-scroll-down">
          {[...stickersColumn2, ...stickersColumn2].map((sticker, index) => (
            <div
              key={`col2-${index}`}
              className="w-32 h-32 md:w-40 md:h-40 bg-background rounded-2xl shadow-card flex items-center justify-center p-4 shrink-0"
            >
              <img
                src={sticker}
                alt={`Figurinha ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickersCarousel;
