import { useEffect, useState } from "react";
import "./Hero.css";
export default function Hero() {
  const heroImg = ["/images/1.jpg", "/images/3.jpg", "/images/4.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImg.length);
    }, 3000);

    return () => clearInterval(intervalId); // 
  }, []);

  return (
    <div className="hero">
      <img src={heroImg[currentIndex]} alt="hero" />
    </div>
  );
}
