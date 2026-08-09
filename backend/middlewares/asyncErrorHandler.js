export default (Security) => (req, res, next) => {
  Promise.resolve(Security(req, res, next)).catch(next);
};
