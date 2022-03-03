import { useContext } from 'react';
import uuid from 'react-uuid';
import { FertilityCalculatorContext } from '../context/FertilityCalculatorContext';

export default function Select() {
    const { value, setValue } = useContext(FertilityCalculatorContext);
    const selectOptions =
        [
            {
                options: [
                    {
                        text: "All ages",
                        value: "0"
                    },
                    {
                        text: "35 - 37 yrs",
                        value: "1"
                    },
                    {
                        text: "38-39 yrs",
                        value: "2"
                    },
                    {
                        text: "40 - 42 yrs",
                        value: "3"
                    },
                    {
                        text: "43 - 44 yrs",
                        value: "4"
                    },
                    {
                        text: "38-39 yrs",
                        value: "5"
                    },
                    {
                        text: "45 yrs +",
                        value: "6"
                    }
                ],
                buttonLabel: "Refresh"
            },
            {
                options: [
                    {
                        text: "All",
                        value: "All"
                    },
                    {
                        text: "Blastocyst Transfer",
                        value: "Obs"
                    },
                    {
                        text: "Non Blastocyst",
                        value: "Obs2"
                    }
                ],
                buttonLabel: "Refresh"
            },
            {
                options: [
                    {
                        text: "All",
                        value: "0"
                    },
                    {
                        text: "No FSH data",
                        value: "1"
                    },
                    {
                        text: "FSH < 10",
                        value: "2"
                    },
                    {
                        text: "FSH 10 - 14.99",
                        value: "3"
                    },
                    {
                        text: "FSH 15 - 19.9",
                        value: "4"
                    },
                    {
                        text: "FSH 20 - 29.9",
                        value: "5"
                    },
                    {
                        text: "FSH 30 +",
                        value: "6"
                    }
                ],
                buttonLabel: "Refresh"
            },
            {
                options: [
                    {
                        text: "All",
                        value: "0"
                    },
                    {
                        text: "No AMH",
                        value: "1"
                    },
                    {
                        text: "AMH  0.1 to 1.0",
                        value: "2"
                    },
                    {
                        text: "AMH  1.1 to 3.0",
                        value: "3"
                    },
                    {
                        text: "AMH  3.1 to 7.0",
                        value: "4"
                    },
                    {
                        text: "AMH  7.1 to 15",
                        value: "5"
                    },
                    {
                        text: "AMH  15.1 to 35",
                        value: "6"
                    },
                    {
                        text: "AMH > 35",
                        value: "7"
                    }
                ],
                buttonLabel: "Refresh"
            },
            {
                options: [
                    {
                        text: "All",
                        value: "0"
                    },
                    {
                        text: "Fresh attempt 1",
                        value: "1"
                    },
                    {
                        text: "Fresh attempt 2",
                        value: "2"
                    },
                    {
                        text: "Fresh attempt 3",
                        value: "3"
                    },
                    {
                        text: "Fresh attempt 4",
                        value: "4"
                    },
                    {
                        text: "Fresh attempt 5",
                        value: "5"
                    },
                    {
                        text: "Fresh attempt 6",
                        value: "6"
                    },
                    {
                        text: "Fresh attempt 7",
                        value: "7"
                    },
                    {
                        text: "Fresh attempt 8",
                        value: "8"
                    },
                    {
                        text: "Fresh attempt 9",
                        value: "9"
                    },
                    {
                        text: "Fresh attempt 10",
                        value: "10"
                    },
                    {
                        text: "Fresh attempt 11",
                        value: "11"
                    }
                ],
                buttonLabel: "Refresh"
            }
        ]


    const handleOnChange = (e) => {
        const valueSelected = e.target.value;
        setValue({
            ...value,
            [e.target.name]: valueSelected
        });
    }

    const resetAllSelections = (e) => {
        e.preventDefault();
        setValue({ optage: '', optblasto: 'All', select_optfsh: '', select_optam: '', optattmpt: '' });
    }

    const resetSelection = (e) => {
        e.preventDefault();
        setValue({
            ...value,
            [e.target.dataset.selectName]: ''
        });
    }

    return (
        <form className="select-container">
            <div>
                <div className="g-select__label">Age Group</div>
                <div className="g-select__container">
                    <label>
                        <select name="optage" value={value.optage} onChange={handleOnChange}>
                            {selectOptions[0].options.map(option => (
                                <option value={option.value} key={uuid()}>{option.text}</option>
                            ))}
                        </select>
                        <span className="g-select__arrow" aria-label="Select menu arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 8.47873L18.59 7L12.7066 13.161C12.3162 13.5698 11.6838 13.5698 11.2934 13.161L5.41 7.00016L4 8.47889L10.5858 15.3857C11.3668 16.2048 12.6332 16.2048 13.4142 15.3856L20 8.47873Z" fill="#1F2532" />
                            </svg>
                        </span>
                    </label>
                </div>
                <button data-select-name="optage" onClick={resetSelection}>Reset</button>
            </div>

            <div>
                <div className="g-select__label">Blastocyst</div>
                <div className="g-select__container">
                    <label>
                        <select name="optblasto" value={value.optblasto} onChange={handleOnChange}>
                            {selectOptions[1].options.map(option => (
                                <option value={option.value} key={uuid()}>{option.text}</option>
                            ))}
                        </select>
                        <span className="g-select__arrow" aria-label="Select menu arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 8.47873L18.59 7L12.7066 13.161C12.3162 13.5698 11.6838 13.5698 11.2934 13.161L5.41 7.00016L4 8.47889L10.5858 15.3857C11.3668 16.2048 12.6332 16.2048 13.4142 15.3856L20 8.47873Z" fill="#1F2532" />
                            </svg>
                        </span>
                    </label>
                </div>
                <button data-select-name="optblasto" onClick={resetSelection}>Reset</button>
            </div>

            <div>
                <div className="g-select__label">FSH Level</div>
                <div className="g-select__container">
                    <label>
                        <select name="select_optfsh" value={value.select_optfsh} onChange={handleOnChange}>
                            {selectOptions[2].options.map(option => (
                                <option value={option.value} key={uuid()}>{option.text}</option>
                            ))}
                        </select>
                        <span className="g-select__arrow" aria-label="Select menu arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 8.47873L18.59 7L12.7066 13.161C12.3162 13.5698 11.6838 13.5698 11.2934 13.161L5.41 7.00016L4 8.47889L10.5858 15.3857C11.3668 16.2048 12.6332 16.2048 13.4142 15.3856L20 8.47873Z" fill="#1F2532" />
                            </svg>
                        </span>
                    </label>
                </div>
                <button data-select-name="select_optfsh" onClick={resetSelection}>Reset</button>
            </div>

            <div>
                <div className="g-select__label">AMH Level</div>
                <div className="g-select__container">
                    <label>
                        <select name="select_optamh" value={value.select_optamh} onChange={handleOnChange}>
                            {selectOptions[3].options.map(option => (
                                <option value={option.value} key={uuid()}>{option.text}</option>
                            ))}
                        </select>
                        <span className="g-select__arrow" aria-label="Select menu arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 8.47873L18.59 7L12.7066 13.161C12.3162 13.5698 11.6838 13.5698 11.2934 13.161L5.41 7.00016L4 8.47889L10.5858 15.3857C11.3668 16.2048 12.6332 16.2048 13.4142 15.3856L20 8.47873Z" fill="#1F2532" />
                            </svg>
                        </span>
                    </label>
                </div>
                <button data-select-name="select_optamh" onClick={resetSelection}>Reset</button>
            </div>

            <div>
                <div className="g-select__label">Fresh Attempt</div>
                <div className="g-select__container">
                    <label>
                        <select name="optattmpt" value={value.optattmpt} onChange={handleOnChange}>
                            {selectOptions[4].options.map(option => (
                                <option value={option.value} key={uuid()}>{option.text}</option>
                            ))}
                        </select>
                        <span className="g-select__arrow" aria-label="Select menu arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 8.47873L18.59 7L12.7066 13.161C12.3162 13.5698 11.6838 13.5698 11.2934 13.161L5.41 7.00016L4 8.47889L10.5858 15.3857C11.3668 16.2048 12.6332 16.2048 13.4142 15.3856L20 8.47873Z" fill="#1F2532" />
                            </svg>
                        </span>
                    </label>
                </div>
                <button data-select-name="optattmpt" onClick={resetSelection}>Reset</button>
            </div>



            <button onClick={resetAllSelections}>Reset All</button>
        </form >
    )
}
