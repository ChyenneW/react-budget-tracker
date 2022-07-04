import { useReducer } from "react";

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 14, name: 'car service', cost: 50 },
    ],
};

export const AppContext = createContext();

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ budget: state.budget, expenses: state.expenses, dispatch }}>
            {props.cildren}
        </AppContext.Provider>
    );
};