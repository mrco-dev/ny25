import React, { useImperativeHandle, useRef, forwardRef } from "react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

interface Conductor {
  run: (options: { speed: number; duration: number }) => void;
}

export interface ConfettiRef {
  fireConfetti: () => void;
}

const Confetti = forwardRef<ConfettiRef>((_, ref) => {
  const controller = useRef<Conductor | null>(null);
  const onInitHandler = ({ conductor }: { conductor: Conductor }) => {
    controller.current = conductor;
  };

  const fireConfetti = () => {
    if (controller.current) {
      controller.current.run({ speed: 3, duration: 2000 });
    } else {
      console.warn("Controller is not initialized yet!");
    }
  };

  useImperativeHandle(ref, () => ({
    fireConfetti,
  }));

  return (
    <>
      <Fireworks onInit={onInitHandler} />
    </>
  );
});
export default Confetti;
