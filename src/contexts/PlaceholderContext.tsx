import React, { createContext, useContext } from 'react';

const PlaceholderContext = createContext<boolean>(true);

interface PlaceholderProviderProps {
  show: boolean;
  children: React.ReactNode;
}

export function PlaceholderProvider({ show, children }: PlaceholderProviderProps) {
  return <PlaceholderContext.Provider value={show}>{children}</PlaceholderContext.Provider>;
}

export function usePlaceholderMarkers(): boolean {
  return useContext(PlaceholderContext);
}