import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/ui-components/container";
import { Posts } from '../../components/Posts';
import { Typo } from "../../components/ui-components/Typo";
import Loader from "../../components/ui-components/Loader/loader";
import { getPostsPagin } from "../../redux/slices/postsSlice";
import { Pagination } from "../../components/Pagination";
import { AppDispatch } from "../../redux/store";

export const PostsPage = () => {
  const { list, loading, } = useSelector((state) => state.posts.posts)
  const dispatch: AppDispatch = useDispatch<AppDispatch>()

  const [currentPage, setCurrentPage] = useState(1)
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const changeCurrentPage = (page:number) => {
    setCurrentPage(page)
    dispatch(getPostsPagin(currentPage))
  }

  useEffect(() => {
    if (!list) {
      dispatch(getPostsPagin(currentPage))
    }
  }, [currentPage, list, dispatch])

  if (!list && loading) {
    return <Loader />
  }

  if (!list) {
    return <>404</>
  }

  return <Container>
    <Typo>Публикации</Typo>
    <Posts posts={list} />
    <Pagination changeCurrentPage={changeCurrentPage}
      currentPage={currentPage}
      pages={pages} />
  </Container>
}

