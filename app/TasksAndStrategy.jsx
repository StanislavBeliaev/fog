'use client'
import React, { useState, useEffect, useRef } from "react";
import classes from './TasksAndStrategy.module.css';
import useContentful from "./hooks/use-contentful";
import { ModalWindow } from "./modals/ModalTask";
const query = `
query taskCollectionQuery {
    taskCollection {
      items {
        sys{
            id
          }
        task,
        client,
        amount,
        complexity,
        taskStatus,
              rating,
              race,
              link1,
      }
    }
  }`;


export const TasksAndStrategy = ({ section4Ref }) => {
    const { dataTasks, errors } = useContentful(query);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filterText, setFilterText] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [raceFilter, setRaceFilter] = useState('');
    const containerHeight = 700; // Высота контейнера таблицы
    const rowHeight = 80; // Высота строки таблицы
    const itemsPerPage = Math.floor(containerHeight / rowHeight);




    if (errors) return <span>{errors.map(error => error.message).join(',')}</span>
    if (!dataTasks) return <span>Loading ...</span>

    const totalItems = dataTasks.taskCollection.items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item); // Обновляем состояние выбранного элемента при нажатии на ячейку
    };

    const handleFilterTextChange = (e) => {
        setFilterText(e.target.value);
        setCurrentPage(1)
    };

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
        setCurrentPage(1)
    };

    const handleRaceFilterChange = (e) => {
        setRaceFilter(e.target.value);
        setCurrentPage(1);
    }


    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        const middlePage = Math.ceil(maxVisiblePages / 2);
        let startPage = currentPage - middlePage + 1;
        let endPage = currentPage + middlePage - 1;

        if (startPage < 1) {
            startPage = 1;
            endPage = Math.min(totalPages, maxVisiblePages);
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? classes.active : classes.inactive}>
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataTasks.taskCollection.items.slice(
        indexOfFirstItem,
        indexOfLastItem
    )
    const filteredItems = dataTasks.taskCollection.items.filter(item =>
        (item.task.toLowerCase().includes(filterText.toLowerCase()) || item.client.toLowerCase().includes(filterText.toLowerCase())) &&
        ((statusFilter === '' || item.taskStatus === statusFilter) && (raceFilter === '' || item.race === raceFilter))

    ).slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    return (
        <div ref={section4Ref} className={classes.TasksAndStrategyContainer}>
            <div className={classes.Grid}>
                <div className={classes.titleContainer}>
                    <h1 className={classes.titleText}>ЗАВДАННЯ СТРАТЕГІЇ</h1>
                </div>
                <div className={classes.TableContainer}>
                    <ModalWindow selectedItem={selectedItem} setSelectedItem={setSelectedItem} classes={classes} />
                    <div className={classes.FilterContainer}>
                        <input
                            className={classes.FilterInput}
                            type="text"
                            value={filterText}
                            onChange={handleFilterTextChange}
                            placeholder="Ключове слово. Наприклад: раш"
                        />
                        <select
                            className={classes.FilterSelect}
                            style={{ color: '#ffffff' }}
                            onChange={handleRaceFilterChange}
                            value={raceFilter}
                        >
                            <option value="" onClick={() => setCurrentPage(1)}>Всі раси</option>
                            <option value="Альянс" onClick={() => setCurrentPage(1)}>Альянс</option>
                            <option value="Орда" onClick={() => setCurrentPage(1)}>Орда</option>
                            <option value="Неживі" onClick={() => setCurrentPage(1)}>Неживі</option>
                            <option value="Нічні Ельфи" onClick={() => setCurrentPage(1)}>Нічні Ельфи</option>
                            <option value="Випадкова" onClick={() => setCurrentPage(1)}>Випадкова</option>
                        </select>
                        <select
                            className={classes.FilterSelect}
                            value={statusFilter}
                            onChange={handleStatusFilterChange}
                            style={{ color: statusFilter === '' ? '#ffffff' : statusFilter === 'Done' ? '#39b54a' : '#ff0000' }}
                        >
                            <option value="" className={classes.FilterSelectOption1} onClick={() => setCurrentPage(1)}>Всі завдання</option>
                            <option value="Done" className={classes.FilterSelectOption2} onClick={() => setCurrentPage(1)}>Виконано</option>
                            <option value="Haven't started" className={classes.FilterSelectOption3} onClick={() => setCurrentPage(1)}>Не розпочато</option>
                        </select>
                    </div>
                    <table className={classes.Table}>
                        <thead>
                            {(filterText || statusFilter || raceFilter ? filteredItems : currentItems).length > 0 ?
                                <tr className={classes.TableTr}>
                                    <th className={classes.Th}>Назва та опис завдання</th>
                                    <th className={classes.Th}>Замовник</th>
                                    <th className={classes.Th}>Сума</th>
                                    <th className={classes.Th}>Складність</th>
                                    <th className={classes.Th}>Статус</th>
                                </tr> : ''}

                        </thead>
                        <tbody>
                            {(filterText || statusFilter || raceFilter ? filteredItems : currentItems).length > 0 ? (
                                (filterText || statusFilter || raceFilter ? filteredItems : currentItems).map((item, index) => (
                                    <tr key={index} className={classes.TableTr}>
                                        <td className={`${classes.Td} ${classes.Description}`} onClick={() => handleItemClick(item)}>
                                            <div className={classes.DescriptionText}>{item.task}</div>
                                        </td>
                                        <td className={classes.Td}>
                                            <div className={classes.DescriptionClient}>{item.client}</div>
                                        </td>
                                        <td className={classes.Td}>
                                            <div className={classes.DescriptionAmount}>{item.amount + ' грн'}</div>
                                        </td>
                                        <td className={classes.Td}>
                                            <div className={classes.DescriptionComplexity} style={{
                                                color:
                                                    item.complexity === 'Середній' ? '#f7941d' :
                                                        item.complexity === 'Легкий' ? '#39b54a' :
                                                            item.complexity === 'Складний' ? '#ff0000' : '#000000'
                                            }}>
                                                {item.complexity}
                                            </div>
                                        </td>
                                        <td className={classes.Td}>
                                            <div className={classes.DescriptionTaskStatus}>
                                                <p>{item.taskStatus === "Haven't started" ? 'Не розпочато' : 'Виконано'}</p>
                                                <p>{Array.from({ length: item.rating }, (_, index) => (
                                                    <img className={classes.DescriptionRating} key={index} src="/imgHeader/star.png" alt="star" />
                                                ))}</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Нет данных для отображения</td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>
            </div>
            <div className={classes.paginationContainer}>
                <div className={classes.PaginationButtonContainer}>
                    <button
                        className={classes.PaginationButton}
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                    >
                        <img src="/imgHeader/arrowLeft.png" />
                    </button>
                    {renderPageNumbers()}
                    <button
                        className={classes.PaginationButton}
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage >= totalPages}
                    >
                        <img src="/imgHeader/arrowRight.png" />
                    </button>
                </div>
            </div>
        </div>
    )
}
