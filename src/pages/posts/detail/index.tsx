import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../../components/ui-components/container";
import { Link } from "../../../components/ui-components/Link/index";
import { Typo } from "../../../components/ui-components/Typo/index";
import Loader from "../../../components/ui-components/Loader/loader"
import { Modal } from "../../../components/ui-components/Modal";
import { Button } from "../../../components/ui-components/Button";
import { useSelector, useDispatch } from "react-redux";
import { Post, deletePost, getPostById, showPost } from "../../../redux/slices/postsSlice";
import * as SC from './styled'
import { AppDispatch, RootState } from "../../../redux/store";

export const DetailPostPage = () => {
    const dispatch: AppDispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const { id } = useParams()
    const { list } = useSelector((state: RootState) => state.posts.posts)
    const { user } = useSelector((state: RootState) => state.auth)
    const postForView = useSelector((state: RootState) => state.posts.postForView)
    const [postForDelete, setPostForDelete] = useState<Post | null>(null)

    const intId = Number(id)
    const findedPosts = list ? list.find((item) => item.id === intId) : undefined

    useEffect(() => {
        if (findedPosts) {
            dispatch(showPost(findedPosts))
        } else {
            dispatch(getPostById(intId))
        }

    }, [id, list, findedPosts, intId, dispatch])

    if (postForView.loading) {
        return <Container>
            <Loader />
        </Container>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }

    const onDeletePost = () => {
        dispatch(deletePost(postForDelete))
        setPostForDelete(null)
        navigate('/posts')
    }

    const { post } = postForView
    const image = post.image || 'https://mir-s3-cdn-cf.behance.net/projects/404/e249b959879647.Y3JvcCwxNTM3LDEyMDMsMTk3LDA.png'
    const showEditAndDeleteBtn = list && user

    return <Container>
        {postForDelete &&
            <SC.ModalWrapper>
                <Modal>
                    <SC.Modaltext>Вы точно уверены, что хотите удалить публикацию?</SC.Modaltext>
                    <SC.ModalContent>
                        <Button onClick={onDeletePost} >Да</Button>
                        <Button onClick={() => setPostForDelete(null)}>Нет</Button>
                    </SC.ModalContent>
                </Modal>
            </SC.ModalWrapper>
        }
        <Container>
            <Typo>{post.title}</Typo>
            <SC.Image src={image} alt={post.title} />
            <SC.Text>{post.body}</SC.Text>
        </Container>

        <SC.LinkWrapper>
            <Link to='/posts/'>Вернуться к постам</Link>
            {showEditAndDeleteBtn && <Link to={`/posts/${post.id}/edit`}>Редактировать пост</Link>}
            {showEditAndDeleteBtn && <Button onClick={() => setPostForDelete(post)}>Удалить пост</Button>}
        </SC.LinkWrapper>

    </Container>
}