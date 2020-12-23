import React, { FunctionComponent, useState } from "react";

import { CONST_SITE_NAME, CONST_LEVELS } from '../libs/constants'
import { SkillApi, Skill, ProfileApi, Profile, BookApi } from '../services'
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
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="lg:flex-grow flex justify-center">
            <div className="w-64 h-full bg-white"></div>
          </div>
          <div className="flex-none">
          <h2>コメント</h2>
          <div className={(`my-3 overflow-scroll ${chatstyle.list}`)}>
            <CommentList comments={comments} onDelete={deleteComment} />
            {isCompletedListActive ? (
              <CompletedCommentList comments={completedComments} onDelete={undoComment} />
            ) : null}
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