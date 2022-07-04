const initialState = {
    budget: 2000,
    expense: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 14, name: 'car service', cost: 50 },
    ],
};

export const AppContext = createContext();