import * as api from "../../api/index";
import { addPost, loadPosts } from "../actionCreator/posts";
export const getPosts = () => {
        return async (dispatch, getState) => {
                try {
                        const { data } = await api.fetchPosts();
                       
                        if (data.length) {
                                dispatch(loadPosts(data));
                        }
                } catch (error) {
                  console.log(error.message)
                }
        };
};

export const createPost=(newPost)=>{
        return async(dispatch, getState)=>{
                try {
                        const {data}=await api.createPost(newPost)
                        console.log(data);
                       if(data){
                        dispatch(addPost(data))
                       }
                } catch (error) {
                        console.log(error)
                }
        }
}