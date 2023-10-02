import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../ui-components/container/index";
import { logout } from "../../redux/slices/authSlice";
import { getPostsPagin, sortPostsInput, sortPostBySelect } from "../../redux/slices/postsSlice";
import { Filter } from "../Filter";
import { Button } from "../ui-components/Button";
import * as SC from "./styles";
import { AppDispatch, RootState } from "../../redux/store";

export const Root = () => {
  const { user } = useSelector((state: RootState) => state.auth)
  const dispatch: AppDispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onClickExitBtn = () => {
    dispatch(logout())
    navigate('/auth')
  }

  const selectByFilterName = (event: React.ChangeEvent<HTMLSelectElement>, currentPage: number | undefined) => {
    if (event.target.value === "0") {
      dispatch(getPostsPagin(currentPage))
      return
    }
    dispatch(sortPostBySelect())
  }

  const filterByInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(sortPostsInput(event.target.value))
  }

  return (<>
    <Container>
      <SC.Menu>
        <SC.MenuItem to="/">Главная страница</SC.MenuItem>
        <SC.MenuItem to="posts">Список постов</SC.MenuItem>
        {user && <SC.MenuItem to="/posts/add">Добавление поста</SC.MenuItem>}
        {!user && <SC.MenuItem to="auth">Авторизация</SC.MenuItem>}
        {!user && <SC.MenuItem to="registration">Регистрация</SC.MenuItem>}
        {user && <Button onClick={onClickExitBtn}>Выход</Button>}
      </SC.Menu>

      <Filter selectByFilterName={selectByFilterName} filterByInputValue={filterByInputValue} />
      <Outlet />
    </Container>
  </>)
}