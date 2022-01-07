// eslint-disable-next-line no-unused-vars
const knex = require('../index.js');
const comments = require('../../db.json');
const dateISOtoMySQL = require('../utils/dateISOtoMySQL');

const commentsForDb = comments.comments.map((comment) => {
  return {
    comment: comment.comment,
    user_id: comment.userId,
    post_id: comment.postId,
    created_at: dateISOtoMySQL(comment.createdAt),
  };
});
// console.log(commentsForDb);

// const tipo = () => {
//   console.log(comments.comments);
// };
knex('comments')
  .insert(commentsForDb)
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    knex.destroy();
  });
