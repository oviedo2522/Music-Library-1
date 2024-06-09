import { useEffect, useState } from 'react'
import Gallery from './Gallery'
import SearchBar from './SearchBar'

function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        document.title = `${search} Music`
        const response = await fetch(API_URL + search)
        const resData = await response.json()
        if (resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div style={{ 'display': 'flex', 'flexFlow': 'column', 'justifyContent': 'center', 'alignItems': 'center' }}>
      <SearchBar />
      {message}
      <Gallery data={data} />
    </div>
  )
}

export default App;
