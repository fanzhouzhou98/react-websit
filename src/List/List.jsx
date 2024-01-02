import "./List.css";
import React from "react";
import { Link } from "react-router-dom";

function List() {
    const listData = [
        {
            title: "副省长陈敏到东华理工大学调研",
            time: "2023-12-21",
            id: "0",
        },
        {
            title: "副省长陈敏到东华理工大学调研",
            time: "2023-12-21",
            id: "1",
        },
        {
            title: "副省长陈敏到东华理工大学调研",
            time: "2023-12-21",
            id: "2",
        },
        {
            title: "副省长陈敏到东华理工大学调研",
            time: "2023-12-21",
            id: "3",
        },
        {
            title: "副省长陈敏到东华理工大学调研",
            time: "2023-12-21",
            id: "4",
        },
        {
            title: "副省长陈敏到东华理工大学调研",
            time: "2023-12-21",
            id: "5",
        },
        {
            title: "副省长陈敏到东华理工大学调研",
            time: "2023-12-21",
            id: "6",
        },
    ];
    return (
        <>
            <Link to="/nameChange">第一题</Link>
            <ul className="newsUl">
                {listData.map((item, index) => {
                    return <li className="newsLi" key={index}>
                    <span>{item.title}</span>
                    <span>{item.time}</span>
                </li>
                }
            )}
            </ul>
        </>
    );
}

export default List;
