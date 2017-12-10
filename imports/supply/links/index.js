import base from './base'
import Todos from '/imports/api/todos/shared/collections/todos'

// subscribe meteor's publications into supply
export default {
  extends: base,

  data() {
    return {
      // allTodos: [],
    }
  },

  meteor: {
    $subscribe: {
      //'todos': [],
    },

    // allTodos() {
    //   return Todos.find({}, { sort: { createAt: -1 } })
    // },
  },
}
