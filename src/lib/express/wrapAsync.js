/**
 * Wraps express router handlers.
 *
 * Tries to execute an asyncronous function and send the result to the end
 * user as JSON.
 *
 * If it anything goes wrong, the error will be sent to the error handlers
 * defined on src/server.js
 */
module.exports = (funk) => {
  return (req, res, next) => {
    funk(req, res, next)
      .then((response) => {
        res.json(response)
      })
      .catch(next)
  };
}
