import sticker1 from "@/assets/stickers/sticker-1.png";
import sticker2 from "@/assets/stickers/sticker-2.png";
import sticker3 from "@/assets/stickers/sticker-3.png";
import sticker4 from "@/assets/stickers/sticker-4.png";
import sticker5 from "@/assets/stickers/sticker-5.png";
import sticker6 from "@/assets/stickers/sticker-6.png";
import sticker7 from "@/assets/stickers/sticker-7.png";
import sticker8 from "@/assets/stickers/sticker-8.png";
import sticker9 from "@/assets/stickers/sticker-9.png";
import sticker10 from "@/assets/stickers/sticker-10.png";
import sticker11 from "@/assets/stickers/sticker-11.png";
import sticker12 from "@/assets/stickers/sticker-12.png";
import sticker13 from "@/assets/stickers/sticker-13.png";
import sticker14 from "@/assets/stickers/sticker-14.png";
import sticker15 from "@/assets/stickers/sticker-15.png";
import sticker16 from "@/assets/stickers/sticker-16.png";
import sticker17 from "@/assets/stickers/sticker-17.png";
import sticker18 from "@/assets/stickers/sticker-18.png";
import sticker19 from "@/assets/stickers/sticker-19.png";

const stickersRow1 = [sticker1, sticker4, sticker11, sticker13, sticker15, sticker16, sticker12, sticker19, sticker5];
const stickersRow2 = [sticker6, sticker10, sticker14, sticker17, sticker8, sticker18, sticker9, sticker2, sticker3];

const StickersCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-12 bg-foreground rounded-3xl">
      <div className="flex flex-col gap-6">
        {/* Row 1 - moves left */}
        <div className="flex gap-6 md:gap-8 animate-scroll-left">
          {[...stickersRow1, ...stickersRow1, ...stickersRow1].map((sticker, index) => (
            <div
              key={`row1-${index}`}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 flex items-center justify-center p-3 md:p-4 shrink-0"
            >
              <img
                src={sticker}
                alt={`Figurinha ${index + 1}`}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - moves right */}
        <div className="flex gap-6 md:gap-8 animate-scroll-right">
          {[...stickersRow2, ...stickersRow2, ...stickersRow2].map((sticker, index) => (
            <div
              key={`row2-${index}`}
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 flex items-center justify-center p-3 md:p-4 shrink-0"
            >
              <img
                src={sticker}
                alt={`Figurinha ${index + 1}`}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StickersCarousel;
