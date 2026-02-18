'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Welcome() {


  gsap.registerPlugin(useGSAP)
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const blobsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Split title letters
      const letters = titleRef.current;

      tl.from(containerRef.current, {
        opacity: 0,
        duration: 1,
      })
        .from(
          letters,
          {
            y: 80,
            opacity: 0,
            stagger: 0.04,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          imageRef.current,
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.9"
        );

      // Floating illustration
      gsap.to(imageRef.current, {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animate background blobs
      // blobsRef.current.forEach((blob, i) => {
      //   gsap.to(blob, {
      //     x: i % 2 === 0 ? 40 : -40,
      //     y: i % 2 === 0 ? -30 : 30,
      //     duration: 8 + i,
      //     repeat: -1,
      //     yoyo: true,
      //     ease: "sine.inOut",
      //   });
      // });
    });

    return () => ctx.revert();
  });

  const titleText = "Create Your Account";

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden px-8"
    >
      {/* Animated Gradient Blobs */}
      {/* {[0, 1, 2].map((_, i) => (
        <div
          key={i}
          ref={blobsRef}
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-30 
            ${
              i === 0
                ? "bg-main top-10 left-10"
                : i === 1
                ? "bg-main bottom-10 right-10"
                : "bg-main top-1/2 left-1/3"
            }`}
        />
      ))} */}

      {/* Glass Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/30 border border-white/20  rounded-3xl p-12 flex flex-col items-center text-center space-y-8">

        {/* Illustration */}
        <img
          ref={imageRef}
          src="https://illustrations.popsy.co/blue/remote-work.svg"
          alt="Sign up illustration"
          className="w-72 drop-shadow-2xl"
        />

        {/* Animated Split Title */}
        <h2
          
          className="text-5xl font-extrabold bg-linear-to-r from-lime-600 via-main to-emerald-600 bg-clip-text text-transparent flex flex-wrap justify-center"
        >
          {titleText.split("").map((char, index) => (
            <span key={index}ref={titleRef} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-gray-700 text-lg max-w-md leading-relaxed"
        >
          Join our platform and unlock powerful tools designed to help you
          grow, manage, and scale effortlessly.
        </p>

        {/* Premium Accent Line */}
        <div className="w-28 h-2 bg-linear-to-r from-emerald-500 via-emerald-500 to-main rounded-full" />

      </div>
    </div>
  );
}
