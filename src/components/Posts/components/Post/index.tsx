import React from "react";
import { Link } from "../../../ui-components/Link";
import * as SC from './styles'

export const Post = ({ post }) => {
    const image = post.image || 'https://mir-s3-cdn-cf.behance.net/projects/404/e249b959879647.Y3JvcCwxNTM3LDEyMDMsMTk3LDA.png'

    return <SC.Post>
        <SC.Image src={image} alt={post.title} />
        <SC.Title>{post.title}</SC.Title>
        <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
}