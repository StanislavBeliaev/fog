import React, { useEffect} from "react";
import classes from './ModalTask.module.css'

export const ModalWindow = ({ selectedItem, setSelectedItem }) => {
    const closeModalOnEsc = (event) => {
        if (event.key === "Escape") {
            setSelectedItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", closeModalOnEsc);
        return () => {
            document.removeEventListener("keydown", closeModalOnEsc);
        };
    }, []);

    return (
        selectedItem && (
            <div className={classes.Modal} onKeyDown={closeModalOnEsc}>
                <div className={classes.ModalContent}>
                    <div className={classes.ModalName}>
                        <p>Назва та опис завдання</p>
                    </div>
                    <div className={classes.ModalTask}>
                        <p className={classes.ModalTaskText}>{selectedItem.task}</p>
                    </div>
                    <div className={classes.ModalClientAmount}>
                        <div className={classes.ModalClient}>
                            <p >Замовник:</p>
                            <p className={classes.ModalClientText}>{selectedItem.client}</p>
                        </div>
                        <div>
                            <p >Сума:</p>
                            <p className={classes.ModalAmount}> {selectedItem.amount + ' грн'}</p>
                        </div>
                    </div>
                    <div className={classes.ModalComplexityTaskStatus}>
                        <div>
                            <p className={classes.ModalComplexity}> Складність:</p>
                            <p style={{
                                color:
                                    selectedItem.complexity === 'Середній' ? '#f7941d' :
                                        selectedItem.complexity === 'Легкий' ? '#39b54a' :
                                            selectedItem.complexity === 'Складний' ? '#ff0000' : '#000000'
                            }}>{selectedItem.complexity}</p>
                        </div>
                        <div>
                            <p className={classes.ModalTaskStatus}>Статус:</p>
                            <p style={{ color: selectedItem.taskStatus === "Haven't started" ? 'red' : 'green' }}>{selectedItem.taskStatus === "Haven't started" ? 'Не розпочато' : 'Виконано'} </p>
                        </div>
                    </div>
                    <div className={classes.ModalStarsContainer}>
                        {Array.from({ length: selectedItem.rating }, (_, index) => (
                            <img className={classes.ModalStars} key={index} src="/imgHeader/starModal.png" alt="star" />
                        ))}
                    </div>
                    <button className={classes.CloseButton} onClick={() => setSelectedItem(null)}></button>
                    {selectedItem.link1 ? <div className={classes.ModalYouTubeButtonContainer}>
                        <a href={selectedItem.link1}>
                            <img src="/imgHeader/you-tube-Modal.png" alt=""/>
                        </a>
                    </div> : ''}
                </div>
            </div>
        )
    );
};
