import { Container } from 'unstated'

const defaultState = {
  list: [
    {
      id: 1,
      completed: false,
      text: 'Read README',
      details:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
      id: 2,
      completed: false,
      text: 'Add one todo',
      details:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      id: 3,
      completed: false,
      text: 'Add filters',
      details:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters'
    },
    {
      id: 4,
      completed: false,
      text: 'Add multiple lists',
      details:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model tex'
    },
    {
      id: 5,
      completed: false,
      text: 'Optional: add tests',
      details:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }
  ]
}

class TodosContainer extends Container {
  constructor (props) {
    super(props)

    this.state = this.readStorage()
  }


  readStorage () {
    if (window && window.localStorage) {
      const state = window.localStorage.getItem('appState')
      if (state) {
        return JSON.parse(state)
      }
    }

    return defaultState
  }

  syncStorage () {
    if (window && window.localStorage) {
      const state = JSON.stringify(this.state)
      window.localStorage.setItem('appState', state)
    }
  }

  getList () {
    return this.state.list
  }

  toggleComplete = async id => {
    const item = this.state.list.find(i => i.id === id)
    const completed = !item.completed

    // We're using await on setState here because this comes from unstated package, not React
    // See: https://github.com/jamiebuilds/unstated#introducing-unstated
    await this.setState(state => {
      const list = state.list.map(item => {
        if (item.id !== id) return item
        return {
          ...item,
          completed
        }
      })
      return { list }
    })

    this.syncStorage()
  }

  createTodo = async text => {
    await this.setState(state => {
      const item = {
        completed: false,
        text,
        id: state.list.length + 1,
        details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old'
      }

      const list = state.list.concat(item)
      return { list }
    })

    this.syncStorage()
  }

}

export default TodosContainer
