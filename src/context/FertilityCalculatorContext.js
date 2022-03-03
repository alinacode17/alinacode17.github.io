import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const FertilityCalculatorContext = createContext();

export const FertilityCalculatorProvider = ({ children }) => {
    const [value, setValue] = useState({ optage: '', optblasto: 'All', select_optfsh: '', select_optam: '', optattmpt: '' });
    const [patientsTotal, setTotalPatients] = useState('');
    const [treatmentCycle, setTreatmentCycle] = useState('');
    const [treatmentCyclePregancyRate, setTreatmentCyclePregancyRate] = useState('');
    const [treatmentCycleBirthRate, setTreatmentCycleBirthRate] = useState('');
    const [eggCollectionCycles, setEggCollectionCycles] = useState('');
    const [eggCollectionPregancyRate, setEggCollectionPregancyRate] = useState('');
    const [eggCollectionBirthRate, setEggCollectionBirthRate] = useState('');
    const [embrioTransferCycles, setEmbrioTransferCycles] = useState('');
    const [embrioTransferPregnancyRate, setEmbrioTransferPregnancyRate] = useState('');
    const [embrioTransferBirthRate, setEmbrioTransferBirthRate] = useState('');
    const [isPending, setIsPending] = useState(true);

    // fetching the data each time the values of any of select drop-downs change
    useEffect(() => {
        console.log(value);

        axios.get(`http://localhost:5000/fertilityCalculatorResults${value.optblasto}`)
            .then(resp => {
                displayData(resp.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [value]);

    const displayData = (data) => {
        setTotalPatients(data.totalPatients);
        setTreatmentCycle(data.treatmentsCyclesStarted.Cycles);
        setTreatmentCyclePregancyRate(data.treatmentsCyclesStarted.PregnancyRate);
        setTreatmentCycleBirthRate(data.treatmentsCyclesStarted.LiveBirthRate);
        setEggCollectionCycles(data.eggCollectionCycles.Cycles);
        setEggCollectionPregancyRate(data.eggCollectionCycles.PregnancyRate);
        setEggCollectionBirthRate(data.eggCollectionCycles.LiveBirthRate);
        setEmbrioTransferCycles(data.embrioTransferCycles.Cycles);
        setEmbrioTransferPregnancyRate(data.embrioTransferCycles.PregnancyRate);
        setEmbrioTransferBirthRate(data.embrioTransferCycles.LiveBirthRate);
    }

    return (
        <FertilityCalculatorContext.Provider
            value={{
                patientsTotal,
                value,
                setValue,
                treatmentCycle,
                treatmentCyclePregancyRate,
                treatmentCycleBirthRate,
                eggCollectionCycles,
                eggCollectionPregancyRate,
                eggCollectionBirthRate,
                embrioTransferCycles,
                embrioTransferPregnancyRate,
                embrioTransferBirthRate,
                isPending
            }}>
            {children}
        </FertilityCalculatorContext.Provider>
    )
}
