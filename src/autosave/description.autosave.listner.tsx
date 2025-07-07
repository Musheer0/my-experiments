"use client";

import { useEffect } from "react";
import { useAutoSaveDescriptionStore } from "./autosave.description.store";
//jsdoc by gpt
/**
 * DescriptionAutoSaveListner is a background React component that listens
 * for changes to the autosave state (like `updatingState` and `isChanged`)
 * and triggers a simulated async save operation.
 *
 * This component does not render anything in the UI but ensures that
 * changes are saved in the background with proper success/error handling
 * and debounced state transitions.
 *
 * - If a save is already in progress, it skips.
 * - If a save completes and `nextState` exists, it queues the next save.
 * - Simulates failure/success randomly (for testing).
 *
 * Place this component anywhere inside the client tree to activate autosave.
 */
const DescriptionAutoSaveListner = () => {
  const {
    isChanged,
    setIsChange,
    setNextState,
    setUpdatingState,
    updatingState,
    nextState,
    setErrorData,
    setIsSaving,
    setSuccessData,
    isSaving,
  } = useAutoSaveDescriptionStore();

  /**
   * Simulates an asynchronous server-side save operation.
   * - Skips if already saving or no changes detected.
   * - Uses a random chance to simulate success/failure.
   * - Automatically enqueues the next state if one is pending.
   */
  const server_action = async () => {
    if (!isChanged || !updatingState || isSaving) return;

    setSuccessData(null);
    setErrorData(null);
    setIsSaving(true);

    setTimeout(() => {
      const chance = Math.floor(Math.random() * 100);

      if (chance > 69) {
        // Simulated success
        console.log("Saved data:", updatingState.data);
        setSuccessData({ response: "success" });
      } else {
        // Simulated failure
        setErrorData({ response: "failure" });
      }

      setIsSaving(false);

      if (nextState) {
        setUpdatingState(nextState);
        setNextState(null);
      } else {
        setIsChange(false);
      }
    }, 300); // simulate 300ms delay
  };

  /**
   * Reactively trigger `server_action` whenever saving state or
   * update-related state changes.
   */
  useEffect(() => {
    server_action();
  }, [updatingState, isChanged, isSaving]);

  return null;
};

export default DescriptionAutoSaveListner;
