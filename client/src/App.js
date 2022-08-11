import React, {useState, useEffect} from 'react'
import Header from './components/Header.jsx'
import NewPost from './components/NewPost.jsx'
import CardLists from './components/CardLists.jsx'
import MyMap from './components/MyMap.jsx'
import axios from 'axios'

function App() {
  const [lists, setLists] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async() => {
    try{
      const res = await axios.get('http://localhost:3005/diary')
      setLists(res.data)
    } catch(e) {
      console.log('err in fetching data', e)
    }

  }

  const handleNewPost = async(data) => {
    try{
      await axios.post('http://localhost:3005/diary', data);
      fetchData();
    } catch(e) {
      console.log('err in posting', e)
    }

  }

  const handleDelete = async(id) => {
    try {
      await axios.delete(`http://localhost:3005/diary/${id}`);
      fetchData();
    } catch (e) {
      console.log('err in deleting', e)
    }

  }

  return (
    <div>
      <div className='row'>
        <Header/>

        <div className='col-3'>
          <NewPost handleNewPost={handleNewPost}/>
        </div>
        <div className='col'>
          <MyMap lists={lists}/>
        </div>
        <CardLists lists={lists} handleDelete={handleDelete}/>

      </div>
    </div>
  );
}

export default App;
