import React, { FunctionComponent, useState } from "react";

import { CONST_SITE_NAME, } from '../libs/constants'
import { ProfileApi, BookApi } from '../services'
import { ReactElement } from 'react'
import { publishRss } from '../services/rss'

import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'

import { Comment } from "../components/chat/comment.type";
import { CommentForm } from "../components/chat/CommentForm";
import { CommentList } from "../components/chat/CommentList";
import { CompletedCommentList } from "../components/chat/CompletedCommentList";

import chatstyle from '../styles/chatstyle.module.css'
interface State {
  newComment: Comment;
  comments: Comment[];
}

type HomeProps = {
  preview: boolean,
}

export default function Index({
  preview,
}: HomeProps): ReactElement {
  const [isCompletedListActive, setCompletedListActive] = useState(false);
  const [newComment, setNewComment] = useState({
    id: 1,
    name: "",
    completed: false
  });

  const [comments, setComments] = useState(new Array<Comment>());
  const [completedComments, setCompletedComments] = useState(new Array<Comment>());

  const addComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNewComment({
      id: newComment.id + 1,
      name: "",
      completed: false
    });
    setComments([...comments, newComment]);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment({
      ...newComment,
      name: event.target.value
    });
  };

  const deleteComment = (commentToDelete: Comment) => {
    setComments([...comments.filter(comment => comment.id !== commentToDelete.id)]);
    setCompletedComments([...completedComments, commentToDelete]);
  };

  const undoComment = (commentToUndo: Comment) => {
    setCompletedComments([
      ...completedComments.filter(comment => comment.id !== commentToUndo.id)
    ]);
    setComments([...comments, commentToUndo]);
  };

  const completeListActiveElement = (
    <div className="flex items-center p-3">
      <input
        onChange={() => setCompletedListActive(!isCompletedListActive)}
        type="checkbox"
        defaultValue={isCompletedListActive.toString()}
        id="completedListActive"
      />
      <label htmlFor="completedListActive">削除されたコメントを見る</label>
    </div>
  );

  return (
    <Layout preview={false} isBlack={true}>
      <Head>
        <title>{CONST_SITE_NAME}</title>
      </Head>
      <Container>
        <div className="flex flex-col sm:flex-row sm:justify-center">
          <div className={(`mb-4 flex justify-center ${chatstyle.screen}`)}>
            <video></video>
          </div>
          <div className="sm:ml-8 mb-10">
            <div className="p-2 bg-gray-900">コメント</div>
            <div className={(`flex flex-col-reverse content-end relative bg-gray-800 overflow-y-scroll overflow-x-hidden ${chatstyle.list}`)}>
              <CommentList comments={comments} onDelete={deleteComment} />
              {isCompletedListActive ? (
                <CompletedCommentList comments={completedComments} onDelete={undoComment} />
              ) : null}
              <div className="z-10 absolute left-3 right-3 top-3 bg-purple-700 rounded-lg shadow-xl">
                <div className="p-3 flex items-center">
                  <span className="mr-2 text-4xl">👳‍♂️</span>
                  <span>石油王<br /><b>¥5,000,000,000,000,000</b></span>
                </div>
                <div className="p-3 flex items-center rounded-b-lg bg-purple-500">
                  <b>أبقه مرتفعا</b>
                </div>
              </div>
            </div>
            <div className="">
              <CommentForm
                disabled={newComment.name.length == 0}
                comment={newComment}
                onAdd={addComment}
                onChange={handleCommentChange}
              />
            </div>
            {completeListActiveElement}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const bookApi = new BookApi()
  const profileApi = new ProfileApi()
  const allBooks = (await bookApi.fetchBookEntries()) ?? []
  const allProfiles = (await profileApi.fetchProfileEntries()) ?? []
  publishRss(allProfiles, allBooks);
  return {
    props: {
      allProfiles
    },
  };
}