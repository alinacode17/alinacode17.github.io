
import { useContext } from 'react';
import { FertilityCalculatorContext } from '../context/FertilityCalculatorContext';
import { motion, AnimatePresence } from "framer-motion";

export default function Stats() {
    const { patientsTotal,
        treatmentCycle,
        treatmentCyclePregancyRate,
        treatmentCycleBirthRate,
        eggCollectionCycles,
        eggCollectionPregancyRate,
        eggCollectionBirthRate,
        embrioTransferCycles,
        embrioTransferPregnancyRate,
        embrioTransferBirthRate,
        isPending } = useContext(FertilityCalculatorContext);

    return (
        <>
            {/* {isPending && <div class="overlay"><img className="overlay-loader" src={spinner} /></div>} */}
            <div className="stats-top__conatiner">
                <div className="stats-top__conatiner-title">
                    <h2>From <span className="stats-top__patients">{patientsTotal}</span> Patients</h2>
                </div>
                <div className="cards__container">
                    <div className="card">
                        <div className="card__title">Treatments Cycles Started</div>
                        <div className="card__data">
                            <div className="card__cycle">
                                <div className="card__cycle-title">Cycles</div>
                                <div className="card__cycle-data">{treatmentCycle}</div>
                            </div>

                            <div className="card__rate">
                                <div className="card__rate-title">Pregnancy Rate</div>
                                <div className="card__rate-percentage">{treatmentCyclePregancyRate}</div>
                                <div className="card__rate-data-container">
                                    <AnimatePresence>
                                        <motion.main
                                            style={{ overflow: "hidden" }}
                                            initial={{ width: 0 }}
                                            animate={{ width: treatmentCyclePregancyRate }}
                                            exit={{ width: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <div className="card__rate-data"></div>
                                        </motion.main>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="card__rate cart__rate--border-bttm-0">
                                <div className="card__rate-title">Live Birth Rate</div>
                                <div className="card__rate-percentage">{treatmentCycleBirthRate}</div>
                                <div className="card__rate-data-container">
                                    <AnimatePresence>
                                        <motion.main
                                            style={{ overflow: "hidden" }}
                                            initial={{ width: 0 }}
                                            animate={{ width: treatmentCycleBirthRate }}
                                            exit={{ width: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <div className="card__rate-data card__rate-data--green"></div>
                                        </motion.main>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__title">Egg Collection Cycles</div>
                        <div className="card__data">
                            <div className="card__cycle">
                                <div className="card__cycle-title">Cycles</div>
                                <div className="card__cycle-data">{eggCollectionCycles}</div>
                            </div>

                            <div className="card__rate">
                                <div className="card__rate-title">Pregnancy Rate</div>
                                <div className="card__rate-percentage">{eggCollectionPregancyRate}</div>
                                <div className="card__rate-data-container">
                                    <AnimatePresence>
                                        <motion.main
                                            style={{ overflow: "hidden" }}
                                            initial={{ width: 0 }}
                                            animate={{ width: eggCollectionPregancyRate }}
                                            exit={{ width: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <div className="card__rate-data"></div>
                                        </motion.main>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="card__rate cart__rate--border-bttm-0">
                                <div className="card__rate-title">Live Birth Rate</div>
                                <div className="card__rate-percentage">{eggCollectionBirthRate}</div>
                                <div className="card__rate-data-container">
                                    <AnimatePresence>
                                        <motion.main
                                            style={{ overflow: "hidden" }}
                                            initial={{ width: 0 }}
                                            animate={{ width: eggCollectionBirthRate }}
                                            exit={{ width: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <div className="card__rate-data card__rate-data--green"></div>
                                        </motion.main>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card__title">Embryo Transfer Cycles</div>
                        <div className="card__data">
                            <div className="card__cycle">
                                <div className="card__cycle-title">Cycles</div>
                                <div className="card__cycle-data">{embrioTransferCycles}</div>
                            </div>

                            <div className="card__rate">
                                <div className="card__rate-title">Pregnancy Rate</div>
                                <div className="card__rate-percentage">{embrioTransferPregnancyRate}</div>
                                <div className="card__rate-data-container">
                                    <AnimatePresence>
                                        <motion.main
                                            style={{ overflow: "hidden" }}
                                            initial={{ width: 0 }}
                                            animate={{ width: embrioTransferPregnancyRate }}
                                            exit={{ width: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <div className="card__rate-data"></div>
                                        </motion.main>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="card__rate cart__rate--border-bttm-0">
                                <div className="card__rate-title">Live Birth Rate</div>
                                <div className="card__rate-percentage">{embrioTransferBirthRate}</div>
                                <div className="card__rate-data-container">
                                    <AnimatePresence>
                                        <motion.main
                                            style={{ overflow: "hidden" }}
                                            initial={{ width: 0 }}
                                            animate={{ width: embrioTransferBirthRate }}
                                            exit={{ width: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            <div className="card__rate-data card__rate-data--green"></div>
                                        </motion.main>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>






                </div>
            </div>
        </>
    )
}
