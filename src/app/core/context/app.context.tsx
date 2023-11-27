import React, {
	createContext,
	Dispatch,
	ReactElement,
	SetStateAction,
	useContext,
	useState,
} from 'react';

type ProviderProps = {
	children: ReactElement;
};

type AppContextProps = {
	sampleNumbers: number;
	setSampleNumbers: Dispatch<SetStateAction<number>>;
	sampleBoolean: boolean;
	setSampleBoolean: Dispatch<SetStateAction<boolean>>;
	isFirstUse: boolean;
	setIsFirstUse: Dispatch<SetStateAction<boolean>>;
	isRecurringTransaction: boolean;
	setIsRecurringTransaction: Dispatch<SetStateAction<boolean>>;
	optInReport: boolean;
	setOptInReport: Dispatch<SetStateAction<boolean>>;
	isAlertCreated: boolean;
	setIsAlertCreated: Dispatch<SetStateAction<boolean>>;
};

const appContextDefaultValues: AppContextProps = {
	sampleNumbers: 0,
	setSampleNumbers: () => {},
	sampleBoolean: false,
	setSampleBoolean: () => {},
	isFirstUse: true,
	setIsFirstUse: () => {},
	isRecurringTransaction: false,
	setIsRecurringTransaction: () => {},
	optInReport: false,
	setOptInReport: () => {},
	isAlertCreated: false,
	setIsAlertCreated: () => {},
};

const AppContext = createContext<AppContextProps>(appContextDefaultValues);

export function useAppContext() {
	return useContext(AppContext);
}

export function AppContextProvider({ children }: ProviderProps) {
	const [sampleNumbers, setSampleNumbers] = useState(0);
	const [sampleBoolean, setSampleBoolean] = useState(false);
	const [isFirstUse, setIsFirstUse] = useState(true);
	const [isRecurringTransaction, setIsRecurringTransaction] = useState(false);
	const [optInReport, setOptInReport] = useState(false);
	const [isAlertCreated, setIsAlertCreated] = useState(false);

	const value = {
		sampleNumbers,
		setSampleNumbers,
		sampleBoolean,
		setSampleBoolean,
		isFirstUse,
		setIsFirstUse,
		isRecurringTransaction,
		setIsRecurringTransaction,
		optInReport,
		setOptInReport,
		isAlertCreated,
		setIsAlertCreated,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
