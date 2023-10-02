import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editPost } from "../../../redux/slices/postsSlice";
import { PostForm } from "../components/PostForm";
import { AppDispatch, RootState } from "../../../redux/store";

interface DataFormValues {
    title: string,
    body: string
}

export const EditPostPage = () => {

    const { id } = useParams()
    const dispatch: AppDispatch = useDispatch<AppDispatch>()

    const { list } = useSelector((state: RootState) => state.posts.posts)

    const onSubmitForm = (formValues: DataFormValues) => {

        dispatch(editPost(formValues))

        alert('Изменения успешно внесены!')
    }

    if (!list) {
        return <>Пост не найден</>
    }

    const findedPost = list.find((item) => item.id === Number(id))

    return <PostForm title={`Редактирование поста - ${id}`}
        onSubmitForm={onSubmitForm}
    // defaultValues={findedPost}
    />
}