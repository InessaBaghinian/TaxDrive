import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from 'use-debounce'

export default function SearchUser() {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParam = searchParams.get('search') ?? ''
  const [search, setSearch] = useState(searchParam)
  const [debouncedSearch] = useDebounce(search, 600)

  const handleSearch = () => {
    if (search) {
      setSearchParams({ search })
    } else {
      setSearchParams({})
    }
  }

  useEffect(() => {
    handleSearch()
  }, [debouncedSearch])

  return (
    <Input
      placeholder='Search'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSearch()
        }
      }}
      handleIconClick={handleSearch}
      iconButton={<Search />}
      containerClassName='max-w-80'
    />
  )
}
