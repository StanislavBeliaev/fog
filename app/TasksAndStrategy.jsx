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
    const itemsPerPage = 900 / 50; // Предположим, что высота каждой строки таблицы равна 50 пикселям




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

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageChange(i)} className={currentPage === i ? classes.active : ''}>
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
                    <table className={classes.Table}>
                        <thead>
                            <tr>
                                <td className={classes.Td}><th>Назва та опис завдання</th></td>
                                <td className={classes.Td}><th>Замовник</th></td>
                                <td className={classes.Td}><th>Сума</th></td>
                                <td className={classes.Td}><th>Складність</th></td>
                                <td className={classes.Td}><th>Статус</th></td>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index}>
                                    <td className={`${classes.Td} ${classes.Description}`} onClick={() => handleItemClick(item)}>
                                        <div className={classes.DescriptionText}>{item.task}</div>
                                    </td>
                                    <td className={classes.Td}>{item.client}</td>
                                    <td className={classes.Td}>{item.amount}</td>
                                    <td className={classes.Td}>{item.complexity}</td>
                                    <td className={classes.Td}>{item.taskStatus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={classes.pagination}>
                    <button
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}