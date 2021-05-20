import { useState } from React;

export const useFetch = (initialValues) => {
  const [query, setQuery] = useState(initialValues)
  const [data, setData] = useState(initialValues)

  return 
}