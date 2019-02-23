export default {
  async createPost(parent, { title, category }, ctx, info) {
    const post = await ctx.db.mutation.createPost(
      {
        data: {
          title,
          category: {
            create: {
              title: category.create.title
            }
          }
        }
      },
      info
    )
    return post
  },
  updatePost(parent, { id, title, updateAt, category }, ctx, info) {
    const updateData = {
      title: `my updated ${title}`,
      // category,
      updateAt,
      category: {
        connect: {
          id: category.connect.id
        }
      }
    }
    const updatedPost = ctx.db.mutation.updatePost(
      {
        where: { id },
        data: updateData
      },
      info
    )
    console.log('after update', updatedPost)

    return updatedPost
  },
  deletePost(parent, { id }, ctx, info) {
    return ctx.db.mutation.deletePost({ where: { id } }, info)
  },

  async createPostCategory(parent, { title, post }, ctx, info) {
    const postCategory = await ctx.db.mutation.createPostCategory(
      {
        data: {
          title
          // post: {
          //   create: {
          //     title: category.create.title
          //   }
          // }
        }
      },
      info
    )
    return postCategory
  },
  updatePostCategory(parent, { id, title, post }, ctx, info) {
    const updateData = {
      title
      // category,
      // post: {
      //   connect: {
      //     id: post.connect.id
      //   }
      // }
    }
    const updatedPostCategory = ctx.db.mutation.updatePostCategory(
      {
        where: { id },
        data: updateData
      },
      info
    )
    console.log('after update', updatedPostCategory)

    return updatedPostCategory
  },
  deletePostCategory(parent, { id }, ctx, info) {
    return ctx.db.mutation.deletePostCategory({ where: { id } }, info)
  },

  async createPostTag(parent, { name, post }, ctx, info) {
    const postTag = await ctx.db.mutation.createPostTag(
      {
        data: {
          name
        }
      },
      info
    )
    return postTag
  },
  updatePostTag(parent, { id, name, post }, ctx, info) {
    const updateData = {
      name
    }
    const updatedPostTag = ctx.db.mutation.updatePostTag(
      {
        where: { id },
        data: updateData
      },
      info
    )
    console.log('after update', updatedPostTag)

    return updatedPostTag
  },
  deletePostTag(parent, { id }, ctx, info) {
    return ctx.db.mutation.deletePostTag({ where: { id } }, info)
  },

  createCoin(parent, { name, startAt, finishAt, symbol }, ctx, info) {
    return ctx.db.mutation.createCoin(
      {
        data: {
          name,
          startAt,
          finishAt,
          symbol
        }
      },
      info
    )
  },
  updateCoin(parent, { id, name, startAt, finishAt, symbol }, ctx, info) {
    const updateData = {
      name,
      startAt,
      finishAt,
      symbol
    }
    const updatedCoin = ctx.db.mutation.updateCoin(
      {
        where: { id },
        data: updateData
      },
      info
    )
    console.log('after update', updatedCoin)

    return updatedCoin
  },
  deleteCoin(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteCoin({ where: { id } }, info)
  },

  createCoinTag(parent, { name }, ctx, info) {
    return ctx.db.mutation.createCoinTag(
      {
        data: {
          name
        }
      },
      info
    )
  },
  updateCoinTag(parent, { id, name }, ctx, info) {
    const updateData = {
      name
    }
    const updatedCoinTag = ctx.db.mutation.updateCoinTag(
      {
        where: { id },
        data: updateData
      },
      info
    )
    console.log('after update', updatedCoinTag)

    return updatedCoinTag
  },
  deleteCoinTag(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteCoinTag({ where: { id } }, info)
  },

  createChat(parent, { imageURL, title }, ctx, info) {
    return ctx.db.mutation.createCoinTag(
      {
        data: {
          imageURL,
          title
        }
      },
      info
    )
  },
  updateChat(parent, { imageURL, title }, ctx, info) {
    const updateData = {
      imageURL,
      title
    }
    const updatedChat = ctx.db.mutation.updateChat(
      {
        where: { id },
        data: updateData
      },
      info
    )
    console.log('after update', updatedChat)

    return updatedChat
  },
  deleteChat(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteChat({ where: { id } }, info)
  },

  createMessage(parent, { user, text, createdAt, updateAt }, ctx, info) {
    return ctx.db.mutation.createMessage(
      {
        data: {
          user,
          text,
          createdAt,
          updateAt
        }
      },
      info
    )
  },
  updateMessage(parent, { user, text, createdAt, updateAt }, ctx, info) {
    const updateData = {
      user,
      text,
      createdAt,
      updateAt
    }
    const updatedMessage = ctx.db.mutation.updateMessage(
      {
        where: { id },
        data: updateData
      },
      info
    )
    console.log('after update', updatedMessage)

    return updatedMessage
  },
  deleteMessage(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteMessage({ where: { id } }, info)
  }
}
