"use client";
import { useState, useEffect } from "react";
import { useAutoSaveDescriptionStore } from "./autosave.description.store";
import DescriptionAutoSaveListner from "./description.autosave.listner";
//example ui by gpt 
export default function AutoSaveForm() {
  const {
    setNextState,
    isSaving,
    successData,
    errorData,
    isChanged,
  } = useAutoSaveDescriptionStore();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Simulate update trigger on typing
    const delayDebounce = setTimeout(() => {
      if (inputValue.trim()) {
        setNextState({ data: inputValue });
      }
    }, 500); // debounce input for 500ms

    return () => clearTimeout(delayDebounce);
  }, [inputValue, setNextState]);

  return (
    <div className="max-w-md mx-auto p-4 space-y-4 border rounded-xl shadow-md">
      <h1 className="text-xl font-bold">AutoSave Description</h1>

      <textarea
        className="w-full border p-2 rounded resize-none min-h-[100px]"
        placeholder="Type your description..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="text-sm text-gray-600">
        {isSaving && <span className="text-blue-600">Saving...</span>}
        {!isSaving && successData && (
          <span className="text-green-600">Saved ✔️</span>
        )}
        {!isSaving && errorData && (
          <span className="text-red-600">Save Failed ❌</span>
        )}
        {!isSaving && isChanged && !errorData && !successData && (
          <span className="text-yellow-600">Unsaved Changes ⏳</span>
        )}
      </div>

      <DescriptionAutoSaveListner />
    </div>
  );
}
