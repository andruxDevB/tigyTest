import find from 'lodash/find'

export default (likeList, userId) => {
  return find(likeList, { user: { id: userId } })
}
