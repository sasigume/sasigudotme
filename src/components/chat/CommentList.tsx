import React, { FunctionComponent } from "react";

import { Comment } from "./comment.type";
import { CommentListItem } from "./CommentListItem";

interface Props {
  comments: Comment[];
  onDelete: (comment: Comment) => void;
}

export const CommentList: FunctionComponent<Props> = ({ comments, onDelete }) => (
  <>
    <div className="p-3 bg-gray-800 text-white">
      {comments.length == 0 ? "-" : null}
      {comments.map((comment, _i) => (
        <CommentListItem key={_i} comment={comment} onDelete={onDelete} />
      ))}
    </div>
  </>
);
