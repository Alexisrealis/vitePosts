import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { postApi } from '../../api/postApi'

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string;
  image?: string
}

export interface postsSlice {
  posts: {
    list: Post[] | null,
    loading: boolean
  },
  postForView: {
    post: Post | null,
    loading: boolean
  },
  freshPosts: {
    posts: Post[] | null,
    loading: boolean
  },
  postsForMainPage: {
    postsForMain: Post[] | null,
    loading: boolean
  },
}

const initialState: postsSlice = {
  posts: {
    list: null,
    loading: false,
  },
  postForView: {
    post: null,
    loading: false
  },
  freshPosts: {
    posts: null,
    loading: false
  },
  postsForMainPage: {
    postsForMain: null,
    loading: false,
  }
}

export const getfetchPosts = createAsyncThunk(
  'post/getfetchPosts',
  async () => {
    return await postApi.fetchPosts()
  }
)

export const getPostById = createAsyncThunk(
  'post/fetchById',
  async (postId: number | undefined) => {
    return await postApi.fetchById(postId)
  }
)

export const getFreshPosts = createAsyncThunk(
  'posts/fetchFreshPosts',
  async (limit: number) => {
    return await postApi.fetchFreshPosts(limit)
  }
)

export const getPostsPagin = createAsyncThunk(
  'postsPagin/fetchPosts',
  async (currentPage: number | undefined) => {
    return await postApi.fetchPostsPagin(currentPage)
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState,

  reducers: {
    sortPostBySelect: (state) => {
      state.posts.list = state.posts.list!.sort((a, b) => a.title > b.title ? 1 : -1)
    },
    sortPostsInput: (state, action) => {
      state.posts.list = action.payload &&
        state.posts.list!.filter((post: Post) =>
          post.title.toLowerCase().includes(action.payload.toLowerCase()))
    },
    editPost: (state, action) => {
      state.posts.list = state.posts.list!.map((post: Post) => {
        if (post.id === action.payload.id) {
          return action.payload
        }
        return post
      })
    },
    addPost: (state, action) => {
      const newPost = { ...action.payload }
      newPost.id = new Date().getTime()
      state.posts.list = state.posts.list ? [newPost, ...state.posts.list] : [newPost]
    },
    showPost: (state, action) => {
      state.postForView = {
        post: action.payload,
        loading: false
      }
    },
    deletePost: (state, action) => {
      state.posts.list = state.posts.list!.filter((post: Post) => post.id !== action.payload.id)
      state.postForView = {
        post: null,
        loading: false
      }
    }
  },

  extraReducers: (builder) => {

    builder.addCase(getPostById.pending, (state) => {
      state.postForView = {
        post: null,
        loading: true
      }
    })

    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.postForView = {
        post: action.payload,
        loading: false
      }
    })

    builder.addCase(getPostsPagin.pending, (state) => {
      state.posts = {
        list: null,
        loading: true
      }
    })

    builder.addCase(getPostsPagin.fulfilled, (state, action) => {
      state.posts = {
        list: action.payload,
        loading: false
      }
    })

    builder.addCase(getFreshPosts.pending, (state) => {
      state.freshPosts = {
        posts: null,
        loading: true
      }
    })

    builder.addCase(getFreshPosts.fulfilled, (state, action) => {
      state.freshPosts = {
        posts: action.payload,
        loading: false
      }
    })

    builder.addCase(getfetchPosts.pending, (state) => {
      state.postsForMainPage = {
        postsForMain: null,
        loading: true
      }
    })

    builder.addCase(getfetchPosts.fulfilled, (state, action) => {
      state.postsForMainPage = {
        postsForMain: action.payload,
        loading: false
      }
    })
  },
})

export const { editPost, addPost, showPost, deletePost, sortPostBySelect, sortPostsInput } = postsSlice.actions

export default postsSlice.reducer