import React, { ChangeEvent } from "react";
import { Input } from "../ui-components/Input";
import * as SC from './styles'

export const Filter = ({selectByFilterName,filterByInputValue,} : {
    selectByFilterName: (event: ChangeEvent<HTMLSelectElement>, currentPage?: number) => void,
    filterByInputValue: (event: ChangeEvent<HTMLInputElement>) => void,
  }) => {
    return (
        <SC.Filter>
            <SC.Select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => selectByFilterName(event)}>
                <option value="0">By relevance</option>
                <option value="1">Sort by name</option>
            </SC.Select>
            <SC.Wrapper>
                <Input onChange={(event: ChangeEvent<HTMLInputElement>) => filterByInputValue(event)}
                    placeholder='Filter by name'
                />
            </SC.Wrapper>
        </SC.Filter>
    )
}