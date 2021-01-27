import { createContext } from 'react';

const SavedItemsContext = createContext<string[] | null>(null);

export { SavedItemsContext };
