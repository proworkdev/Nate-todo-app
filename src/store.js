import { Container } from 'unstated'

const defaultState = {
  list: [
    {
      id: 1,
      completed: false,
      inprogress:true,
      text: 'Read README'
    },
    {
      id: 2,
      completed: false,
      inprogress:true,
      text: 'Add one todo'
    },
    {
      id: 3,
      completed: false,
      inprogress:true,
      text: 'Add filters'
    },
    {
      id: 4,
      completed: false,
      inprogress:true,
      text: 'Add multiple lists'
    },
    {
      id: 5,
      completed: false,
      inprogress:true,
      text: 'Optional: add tests'
    }
  ],
 
}

class TodosContainer extends Container {
  constructor (props) {
    super(props)
    !localStorage.getItem('items')&&localStorage.setItem('items', JSON.stringify(defaultState.list))
    const data = localStorage.getItem('items') 
    this.state = {
      list:  JSON.parse(data),
      showInput:false, 
      text:'',
      showProgresslist:false,
      showcompletelist:false,
    }    
  }
  
  // function to set list in sync storage
  syncStorage (list) {
    localStorage.setItem('items', JSON.stringify(list));
  }


 // function to set progress list in sync storage
  syncProgressList = () => {
    localStorage.setItem('showProgresslist', JSON.stringify(true));
    localStorage.setItem('showCompleteList', JSON.stringify(false));
  }

  // function to set complete list in sync storage
  syncCompleteList = () =>{
    localStorage.setItem('showProgresslist', JSON.stringify(false));
    localStorage.setItem('showCompleteList', JSON.stringify(true));
  }

  // function on click progress button
  onProgressList = () => {
    this.syncProgressList() 
    this.setState({showProgresslist:true, showcompletelist:false})
 }

   // function on click complete button
 onCompleteList = () => {
  this.syncCompleteList() 
  this.setState({showcompletelist:true, showProgresslist:false})
 }

   // function on complete task
  toggleComplete = async id => {
    const item = this.state.list.find(i => i.id === id)
    const completed = !item.completed
    const inprogress = false   
      const list = this.state.list.map(item => {
        if (item.id !== id) return item
        return {
          ...item,
          completed,
          inprogress
        }
    })
    this.setState({list:list})
    this.syncStorage(list)   
  }

   // function to create new iten in a list
  createTodo = async text => {
      const item = {
        completed: false,
        inprogress:true,
        text,
        id: this.state.list.length + 1
      }
      const dataId = this.state.list
      dataId.push(item)
      this.setState({text:''})
      this.syncStorage(dataId)
  }

  // function to show input
  showInput = ()=> {
    localStorage.setItem('showProgresslist', JSON.stringify(false));
    localStorage.setItem('showCompleteList', JSON.stringify(false));
    this.setState({ showInput:!this.state.showInput})
  }
  
  // function on change text 
  onChangeText = (e)=> {
    this.setState({ text:e})
  }

// function on click progress button
  onProgress = async id => {
    const inprogress = true
    const completed = false
    // We're using await on setState here because this comes from unstated package, not React
    // See: https://github.com/jamiebuilds/unstated#introducing-unstated
   
      const list = this.state.list.map(item => {
        if (item.id !== id) return item
        return {
          ...item,
          inprogress,
          completed
        }
    })
    this.setState({list:list})
    this.syncStorage(list)   
  }
}

export default TodosContainer
