import { create } from 'zustand';
//jsdoc by gpt
/**
 * Represents a generic state to be saved.
 * You should extend this interface with your actual data shape.
 */
interface istate {
  data: any;
}

interface iAutoSaveStore {
  /** Indicates if the current state has unsaved changes 
   * Mainly  for ui purpose like those dot if unsaved but you just do  !!updatingState
  */
  isChanged: boolean;

  /**
   * Set the `isChanged` flag
   * @param data - `true` if the current state has been modified
   */
  setIsChange: (data: boolean) => void;

  /** Indicates whether a save operation is in progress */
  isSaving: boolean;

  /** Response data returned from the last successful save operation */
  successData: any;

  /** Error data returned from the last failed save operation */
  errorData: any;

  /**
   * Set the saving state
   * @param val - `true` if saving is in progress
   */
  setIsSaving: (val: boolean) => void;

  /**
   * Set the success data after save
   * @param data - response from the server or mutation
   */
  setSuccessData: (data: any) => void;

  /**
   * Set the error data after save
   * @param data - error response or object
   */
  setErrorData: (data: any) => void;

  /**
   * The current state being saved
   * This should only be used internally by listeners or background operations.
   */
  updatingState: istate | null;

  /**
   * Update the state being saved (internal use only)
   * @param data - state to be saved
   */
  setUpdatingState: (data: istate | null) => void;

  /**
   * The next state queued to be saved (if a save is already in progress)
   */
  nextState: istate | null;

  /**
   * Use this to enqueue a state change for autosave
   * This automatically handles whether to apply immediately or wait.
   * @param data - the new state to save
   */
  setNextState: (data: istate | null) => void;
}

export const useAutoSaveDescriptionStore = create<iAutoSaveStore>((set, get) => ({
  isChanged: false,
  updatingState: null,
  nextState: null,

  setIsChange(data) {
    set({ isChanged: data });
  },

  setUpdatingState(data) {
    set({ updatingState: data });
  },

  setNextState(data) {
    const { updatingState } = get();

    if (updatingState) {
      // A save is in progress → queue for later
      set({ nextState: data, isChanged: true });
    } else {
      // No current save → apply immediately
      set({ updatingState: data, isChanged: true });
    }
  },

  isSaving: false,
  successData: null,
  errorData: null,

  setIsSaving: (val) => set({ isSaving: val }),
  setSuccessData: (data) => set({ successData: data }),
  setErrorData: (data) => set({ errorData: data }),
}));
