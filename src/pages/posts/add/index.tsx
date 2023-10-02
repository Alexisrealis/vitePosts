import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/slices/postsSlice";
import { PostForm } from "../components/PostForm";
import { AppDispatch } from "../../../redux/store";

interface DataFormValues {
    title: string,
    body: string
}

export const AddPostPage = () => {
    const dispatch: AppDispatch = useDispatch<AppDispatch>()

    const onSubmitForm = (formValues: DataFormValues) => {
        dispatch(addPost(formValues))
    }

    return <PostForm title='Добавление нового поста' onSubmitForm={onSubmitForm} />
}
