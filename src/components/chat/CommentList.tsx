import React, { FunctionComponent } from "react";

import { Comment } from "./comment.type";
import { CommentListItem } from "./CommentListItem";

import chatstyle from '../../styles/chatstyle.module.css'

interface Props {
  comments: Comment[];
  onDelete: (comment: Comment) => void;
}

export const CommentList: FunctionComponent<Props> = ({ comments, onDelete }) => (
  <>
    <div className={(`flex flex-col relative p-3 bg-gray-800 text-white ${chatstyle.listInner}`)}>
      {comments.length == 0 ? "-" : null}
      {comments.map((comment, _i) => (
        <CommentListItem key={_i} comment={comment} onDelete={onDelete} />
      ))}
      <div className="absolute left-3 right-3 top-3 bg-purple-700 rounded-lg shadow-lg">
        <div className="p-3 flex items-center">
          <span className="mr-2 text-4xl">👳‍♂️</span>
          <span>石油王<br /><b>¥5,000,000,000,000,000</b></span>
        </div>
        <div className="p-3 flex items-center rounded-b-lg bg-purple-500">
          <b>أبقه مرتفعا</b>
        </div>
      </div>
    </div>
  </>
);
