"use client";
import { useRef } from "react";
import { useScramble } from "use-scramble";

export default function ScrambleText({
  text,
  settings = {},
  className = "",
  replayOn = true,
}) {
  const {
    speed = 0.8,
    tick = 1,
    step = 2.3,
    scramble = 10,
    chance = 0.8,
    overdrive = false,
  } = settings;

  const ref = useRef(null);
  const scrambleSettings = {
    text,
    speed,
    tick,
    step,
    scramble,
    chance,
    overdrive,
  };

  const { ref: scrambleRef, replay } = useScramble(scrambleSettings);

  const setRef = (node) => {
    scrambleRef.current = node;
    ref.current = node;
  };

  return (
    <p
      ref={setRef}
      onMouseOver={replayOn ? replay : undefined}
      onFocus={replayOn ? replay : undefined}
      className={`body ${className}`}
    />
  );
}
