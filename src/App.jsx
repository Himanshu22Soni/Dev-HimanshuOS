import React from "react";
import gsap from "gsap";
import useFullscreen from "./hooks/useFullscreen";
import { Navbar, Welcome, Dock } from "#components";
import { Draggable } from "gsap/Draggable";
import { Terminal } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  /**
   * Enable fullscreen toggle on "f" keypress.
   *
   * Why here?:
   * - App mounts once and stays alive for the whole SPA
   * - Hook sets up a single global listener
   * - Keeps fullscreen behavior consistent across routes/components
   */
  useFullscreen();

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  );
};

export default App;
