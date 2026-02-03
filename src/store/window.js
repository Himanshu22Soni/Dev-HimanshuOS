// Import initial z-index and window metadata used to seed the store.
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";
// Import Zustand's create helper to build a global store.
import { create } from "zustand";
// Import Immer middleware to allow mutating draft state safely.
import { immer } from "zustand/middleware/immer";

// Create the window store hook that components can call.
export const useWindowStore = create(
  // Wrap the store with Immer to allow convenient mutation syntax.
  immer((set) => ({
    // Track all windows and their current state (open, z-index, data).
    windows: WINDOW_CONFIG,
    // The next z-index to assign, starting above the initial layer.
    nextZIndex: INITIAL_Z_INDEX + 1,

    // Open a window and optionally attach data (e.g., file info).
    openWindow: (windowKey, data = null) =>
      // Use set() to update Zustand state through Immer.
      set((state) => {
        // Look up the target window by its key.
        const win = state.windows[windowKey];
        // Mark the window as visible.
        win.isOpen = true;
        // Bring it to the front by assigning the latest z-index.
        win.zIndex = state.nextZIndex;
        // Store new data if provided; otherwise keep existing data.
        win.data = data ?? win.data;
        // Increment z-index so the next window stacks above.
        state.nextZIndex += 1;
      }),

    // Close a window and reset its state.
    closeWindow: (windowKey) =>
      // Use set() to mutate the store with Immer drafts.
      set((state) => {
        // Find the window instance to close.
        const win = state.windows[windowKey];
        // Hide the window from the UI.
        win.isOpen = false;
        // Reset its stacking order to the base level.
        win.zIndex = INITIAL_Z_INDEX;
        // Clear any data associated with that window.
        win.data = null;
      }),

    // Bring a window to the foreground without reopening it.
    focusWindow: (windowKey) =>
      // Update only the z-index for stacking order.
      set((state) => {
        // Retrieve the window by its key.
        const win = state.windows[windowKey];
        // Assign and increment z-index in one step for efficiency.
        win.zIndex = state.nextZIndex++;
      }),
  })),
);

// Export default for convenient imports elsewhere in the app.
export default useWindowStore;
