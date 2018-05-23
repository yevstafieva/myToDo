const todos = (state = {}, action) => {

  switch (action.type) {

    case 'ADD_TODOS':
        return {
        ...state, // возьми все из...
        todos: action.todos
      }

    case 'ADD_TODO':
      const newItem=  {
          id: state.todos.length+1,
          description: action.description,
          checked: false
        }
      return {
        ...state,
        todos: [...state.todos, newItem]
      }

      case 'TODO_CHECKED':
        const todos = state.todos && state.todos.map( todo =>
           (todo.id === action.id) ? {...todo, checked:!todo.checked } : todo
         )

         return { ...state, todos: todos }

      case 'DELETE_TODO':
         const todos2 = state.todos && state.todos.filter( todo =>
            (todo.id !== action.id))

          return { ...state, todos: todos2 }

     case 'OPEN_TODO_POPUP':

        return { ...state, todoPopup: action.description}

     case 'CLOSE_TODO_POPUP':
        return { ...state, todoPopup: null}

    default:
      return state
  }
}

export default todos
