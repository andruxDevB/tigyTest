import _ from 'lodash'

export default (groupId, data) => {
  return _.chain(data).flatten().find({ grupo_id: groupId }).value().motivos
}
