import React from "react";
import * as SC from './styles'

export const Pagination = ({ changeCurrentPage, pages, currentPage }) => (
    <SC.Wrapper>
        {pages.map((page) => (
            <SC.Pages key={page}
                onClick={() => changeCurrentPage(page)}
                active={currentPage === page}>
                {page}
            </SC.Pages>
        ))}
    </SC.Wrapper>
)
