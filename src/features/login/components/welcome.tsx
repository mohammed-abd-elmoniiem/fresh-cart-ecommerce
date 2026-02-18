'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

export default function Welcome() {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Entrance animation
    tl.from(imageRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
    })
      .from(
        titleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        textRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      )
      .from(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.7,
        },
        "-=0.5"
      );

    // Floating illustration loop
    gsap.to(imageRef.current, {
      y: "-=15",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Background blob animations
    gsap.to(blob1Ref.current, {
      x: 30,
      y: -20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob2Ref.current, {
      x: -25,
      y: 25,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div className="relative w-full flex items-center justify-center px-8 overflow-hidden">

      {/* Animated Background Blobs */}
      {/* <div
        ref={blob1Ref}
        className="absolute w-72 h-72 bg-main/30 rounded-full blur-3xl top-10 left-10"
      ></div>

      <div
        ref={blob2Ref}
        className="absolute w-72 h-72 bg-main/30 rounded-full blur-3xl bottom-10 right-10"
      ></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 backdrop-blur-sm bg-white/30 p-10 rounded-2xl ">

        {/* Illustration */}
        <Image
          ref={imageRef}
          src="https://illustrations.popsy.co/blue/work-from-home.svg"
          alt="Welcome illustration"
          className="w-64 lg:w-80 drop-shadow-2xl"
          width={320}
          height={320}
        />

        {/* Title */}
        <h2
          ref={titleRef}
          className="text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-blue-600 via-main to-lime-700 bg-clip-text text-transparent"
        >
          Welcome Back 👋
        </h2>

        {/* Text */}
        <p
          ref={textRef}
          className="text-gray-700 text-lg max-w-md"
        >
          Sign in to access your dashboard, manage your projects,
          and explore powerful features built just for you.
        </p>

        {/* Animated Line */}
        <div
          ref={lineRef}
          className="w-24 h-1 bg-linear-to-r from-main to-lime-500 rounded-full"
        ></div>

      </div>
    </div>
  );
}
