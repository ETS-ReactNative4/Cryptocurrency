export default {
  post(parent, { id }, ctx, info) {
    return ctx.db.query.post({ where: { id } }, info)
  },
  posts(parent, args, ctx, info) {
    return ctx.db.query.posts(null, info)
  },
  postCategory(parent, { id }, ctx, info) {
    return ctx.db.query.postCategory({ where: { id } }, info)
  },
  postCategories(parent, args, ctx, info) {
    return ctx.db.query.postCategories(null, info)
  },
  postTag(parent, { id }, ctx, info) {
    return ctx.db.query.postTag({ where: { id } }, info)
  },
  postTags(parent, args, ctx, info) {
    return ctx.db.query.postTags(null, info)
  },
  coin(parent, { id }, ctx, info) {
    return ctx.db.query.coin({ where: { id } }, info)
  },
  coins(parent, args, ctx, info) {
    return ctx.db.query.coins(null, info)
  },
  coinTag(parent, { id }, ctx, info) {
    return ctx.db.query.coinTag({ where: { id } }, info)
  },
  coinTags(parent, args, ctx, info) {
    return ctx.db.query.coinTags(null, info)
  }
}
