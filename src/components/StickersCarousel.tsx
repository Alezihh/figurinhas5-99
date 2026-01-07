import sticker1 from "@/assets/stickers/sticker-1.png";
import sticker2 from "@/assets/stickers/sticker-2.png";
import sticker3 from "@/assets/stickers/sticker-3.png";
import sticker4 from "@/assets/stickers/sticker-4.png";
import sticker5 from "@/assets/stickers/sticker-5.png";
import sticker6 from "@/assets/stickers/sticker-6.png";
import sticker7 from "@/assets/stickers/sticker-7.png";
import sticker8 from "@/assets/stickers/sticker-8.png";
import sticker9 from "@/assets/stickers/sticker-9.png";

const stickersRow1 = [sticker1, sticker2, sticker3, sticker4, sticker5];
const stickersRow2 = [sticker6, sticker7, sticker8, sticker9, sticker1];

const StickersCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-12 bg-foreground rounded-3xl">
      <div className="flex flex-col gap-6">
        {/* Row 1 - moves left */}
        <div className="flex gap-8 animate-scroll-left">
          {[...stickersRow1, ...stickersRow1, ...stickersRow1].map((sticker, index) => (
            <div
              key={`row1-${index}`}
              className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4 shrink-0"
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
        <div className="flex gap-8 animate-scroll-right">
          {[...stickersRow2, ...stickersRow2, ...stickersRow2].map((sticker, index) => (
            <div
              key={`row2-${index}`}
              className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center p-4 shrink-0"
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
