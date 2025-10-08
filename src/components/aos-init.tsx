"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 100,
    });
  }, []);

  return null;
}
