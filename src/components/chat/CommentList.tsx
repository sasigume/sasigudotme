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
    <div className={(`p-3 text-white`)}>
      {comments.length == 0 ? "-" : null}
      {comments.map((comment, _i) => (
        <CommentListItem key={_i} comment={comment} onDelete={onDelete} />
      ))}
    </div>
  </>
);
