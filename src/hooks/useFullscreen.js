/**
 * useFullscreen Hook
 *
 * Purpose: Toggle browser fullscreen mode with a single key press.
 * Location: src/hooks/useFullscreen.js
 *
 * What it does:
 * - Listens for the "f" key anywhere in the app
 * - Enters fullscreen when not in fullscreen
 * - Exits fullscreen when already in fullscreen
 * - Cleans up the key listener on unmount
 *
 * Why a hook?:
 * - Keeps side effects (event listeners) isolated
 * - Reusable across multiple components if needed
 * - Keeps App.jsx clean and focused on UI
 *
 * Behavior details:
 * - Ignores key presses while typing in inputs/textarea/contentEditable
 * - Ignores modified key presses (Ctrl/Alt/Meta)
 * - Uses Fullscreen API with safe checks
 * - Handles promise rejections silently (browser permissions/user gestures)
 */
import { useEffect } from "react";

const isEditableElement = (target) => {
  if (!target) return false;

  // Skip when user is typing in a form field or editable region.
  const tagName = target.tagName?.toLowerCase();
  const isInput =
    tagName === "input" || tagName === "textarea" || tagName === "select";
  const isContentEditable = Boolean(target.isContentEditable);

  return isInput || isContentEditable;
};

/**
 * useFullscreen
 *
 * Adds a keydown listener that toggles fullscreen on "f" press.
 */
const useFullscreen = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Only act on plain "f" key (no modifier keys).
      if (event.key.toLowerCase() !== "f") return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (isEditableElement(event.target)) return;

      // If already in fullscreen, exit. Otherwise, request fullscreen.
      if (document.fullscreenElement) {
        document.exitFullscreen?.().catch(() => {
          // Exit can fail if fullscreen isn't allowed; ignore silently.
        });
      } else {
        document.documentElement.requestFullscreen?.().catch(() => {
          // Request can fail if the browser blocks fullscreen without user gesture.
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useFullscreen;
