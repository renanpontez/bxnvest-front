import React from 'react';

const InvestmentsResultsContext = React.createContext({});
export const InvestmentsResultsProvider = InvestmentsResultsContext.Provider;
export const InvestmentsResultsConsumer = InvestmentsResultsContext.Consumer;

export default InvestmentsResultsContext;