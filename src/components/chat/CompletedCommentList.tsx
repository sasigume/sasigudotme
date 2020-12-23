import React, { FunctionComponent } from "react";

import { Comment } from "./comment.type";
import { CompletedCommentListItem } from "./CompletedCommentListItem";

interface Props {
  comments: Comment[];
  onDelete: (comment: Comment) => void;
}

export const CompletedCommentList: FunctionComponent<Props> = ({
  comments,
  onDelete
}) => (
  <>
    <div className="p-3">
      <h3>削除されたコメント</h3>
      {comments.length == 0 ? "-" : null}
      <ul>
        {comments.map((comment, _i) => (
          <CompletedCommentListItem key={_i} comment={comment} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  </>
);
