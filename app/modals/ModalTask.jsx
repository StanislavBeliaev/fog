import React, { useState, useEffect, useRef } from "react";
import classes from './ModalTask.module.css';

export const ModalWindow = ({ selectedItem, setSelectedItem }) => {
    const modalRef = useRef(null);
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);
    const closeModalOnEsc = (event) => {
        if (event.key === "Escape") {
            setSelectedItem(null);
        }
    };

    const closeModalOnClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setSelectedItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", closeModalOnEsc);
        document.addEventListener("mousedown", closeModalOnClickOutside);

        return () => {
            document.removeEventListener("keydown", closeModalOnEsc);
            document.removeEventListener("mousedown", closeModalOnClickOutside);
        };
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = "/imgHeader/bg-modal.png";
        img.onload = () => {
            setBackgroundLoaded(true);
        };
    }, []);
    return (
        selectedItem && backgroundLoaded && (
            <div className={classes.Modal} onKeyDown={closeModalOnEsc}>
                <div ref={modalRef} className={classes.ModalContent}>
                    <div className={classes.ModalName}>
                        {selectedItem.vip ?
                            <img className={classes.ModalNameStatus} src="/imgHeader/iconVip.png" />
                            :
                            <img className={classes.ModalNameStatus} src="/imgHeader/iconTask.png" />}
                        <p>Назва та опис завдання</p>
                    </div>
                    <div className={classes.ModalTask}>
                        <p className={classes.ModalTaskText}>{selectedItem.task}</p>
                    </div>
                    <div className={classes.ModalClientAmount}>
                        <div className={classes.ModalClient}>
                            <div className={classes.ModalClientContainer}>
                                <div className={classes.ModalClientFaceContainer}>
                                    <img src="/imgHeader/iconDonateFace.png" className={classes.ModalClientFaceImg}></img>
                                    <div className={classes.ModalClientAmountText}>
                                        <p >Замовник:</p>
                                        <p className={classes.ModalClientText}>
                                            {selectedItem.client.length > 20 ? `${selectedItem.client.slice(0, 20)}...` : selectedItem.client}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                            <div>
                                <div className={classes.ModalClientCoinContaienr}>
                                    <img src="/imgHeader/iconCoin.png" className={classes.ModalClientCoinIng}></img>
                                    <div>
                                        <p >Сума:</p>
                                        <p className={classes.ModalAmount}> {selectedItem.amount + ' грн'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ModalComplexityTaskStatus}>
                        <div>
                            <div className={classes.ModalComplexityTaskStatusContainer}>
                                <div>
                                    <img className={classes.ModalComplexityTaskStatusImg} src="/imgHeader/iconDifficult.png" alt="" />
                                </div>
                                <div className={classes.ModalComplexity}>
                                    <p > Складність:</p>
                                    <p style={{
                                        color:
                                            selectedItem.complexity === 'Середній' ? '#f7941d' :
                                                selectedItem.complexity === 'Легкий' ? '#39b54a' :
                                                    selectedItem.complexity === 'Складний' ? '#ff0000' : '#000000'
                                    }}>{selectedItem.complexity}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.ModalTaskStatusContainer}>
                                <div>
                                    {selectedItem.taskStatus === "Haven't started" ?
                                        <img className={classes.ModalTaskStatusImg} src="/imgHeader/not_icon.png" alt="" />
                                        :
                                        <img className={classes.ModalTaskStatusImg} src="/imgHeader/ok_icon.png" alt="" />}
                                </div>
                                <div className={classes.ModalTaskStatus}>
                                    <p>Статус:</p>
                                    <p style={{ color: selectedItem.taskStatus === "Haven't started" ? 'red' : 'green' }}>{selectedItem.taskStatus === "Haven't started" ? 'Не розпочато' : 'Виконано'} </p>
                                </div>
                            </div>
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
                            <img src="/imgHeader/you-tube-Modal.png" alt="" />
                        </a>
                    </div> : ''}
                </div>
            </div>
        )
    );
};
