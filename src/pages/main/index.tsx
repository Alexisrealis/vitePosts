import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/ui-components/container";
import { Posts } from '../../components/Posts';
import { Typo } from "../../components/ui-components/Typo";
import Loader from "../../components/ui-components/Loader/loader";
import { getPostsPagin } from "../../redux/slices/postsSlice";
import { AppDispatch, RootState } from "../../redux/store";

export const MainPage = () => {
  const { post } = useSelector((state: RootState) => state.posts.postForView)
  const { list, loading } = useSelector((state: RootState) => state.posts.posts)
  const dispatch: AppDispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (!list) {
      dispatch(getPostsPagin(1))
    }
  }, [dispatch, list])

  if (!list && loading) {
    return <Loader />
  }

  return <>
    <Container>
      <Typo>Свежие публикации</Typo>
      {list &&
        <Posts posts={list} />
      }

      {post && <>
        <Typo>Последний просмотренный пост</Typo>
        <Posts posts={[post]} />
      </>}
    </Container>
  </>
}



