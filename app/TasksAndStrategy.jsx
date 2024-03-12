'use client'
import React, { useState, useEffect, useRef } from "react";
import classes from './TasksAndStrategy.module.css';
import useContentful from "./hooks/use-contentful";
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
              rating
      }
    }
  }`;




export const TasksAndStrategy = ({ section4Ref }) => {
    const { dataTasks, errors } = useContentful(query);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filterText, setFilterText] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const containerHeight = 700; // Высота контейнера таблицы
    const rowHeight = 57; // Высота строки таблицы
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
    };



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
        (statusFilter === '' || item.taskStatus === statusFilter)
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
                    {selectedItem && (
                        <div className={classes.modal}>
                            <div className={classes.modalContent}>
                                <h2>Данные элемента</h2>
                                <p>Task: {selectedItem.task}</p>
                                <p>Client: {selectedItem.client}</p>
                                <p>Amount: {selectedItem.amount}</p>
                                <p>Complexity: {selectedItem.complexity}</p>
                                <p>Task Status: {selectedItem.taskStatus}</p>
                                <button onClick={() => setSelectedItem(null)}>Закрыть</button>
                            </div>
                        </div>
                    )}
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
                            value={statusFilter}
                            onChange={handleStatusFilterChange}
                            style={{ color: statusFilter === '' ? '#ffffff' : statusFilter === 'Done' ? '#39b54a' : '#ff0000' }}
                        >
                            <option value="" className={classes.FilterSelectOption1} onClick={() => setCurrentPage(1)}>Усе</option>
                            <option value="Done" className={classes.FilterSelectOption2} onClick={() => setCurrentPage(1)}>Виконано</option>
                            <option value="Haven't started" className={classes.FilterSelectOption3} onClick={() => setCurrentPage(1)}>Не розпочато</option>
                        </select>
                    </div>
                    <table className={classes.Table}>
                        <thead>
                            {(filterText || statusFilter ? filteredItems : currentItems).length > 0 ?
                                <tr className={classes.TableTr}>
                                    <th className={classes.Td}>Назва та опис завдання</th>
                                    <th className={classes.Td}>Замовник</th>
                                    <th className={classes.Td}>Сума</th>
                                    <th className={classes.Td}>Складність</th>
                                    <th className={classes.Td}>Статус</th>
                                </tr> : ''}

                        </thead>
                        <tbody>
                            {(filterText || statusFilter ? filteredItems : currentItems).length > 0 ? (
                                (filterText || statusFilter ? filteredItems : currentItems).map((item, index) => (
                                    <tr key={index} className={classes.TableTr}>
                                        <td className={`${classes.Td} ${classes.Description}`} onClick={() => handleItemClick(item)}>
                                            <div className={classes.DescriptionText}>{item.task}</div>
                                        </td>
                                        <td className={classes.Td}>{item.client}</td>
                                        <td className={classes.Td}>{item.amount}</td>
                                        <td className={classes.Td}>{item.complexity}</td>
                                        <td className={classes.Td}>{item.taskStatus}</td>
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
                        Prev
                    </button>
                    {renderPageNumbers()}
                    <button
                        className={classes.PaginationButton}
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage >= totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
