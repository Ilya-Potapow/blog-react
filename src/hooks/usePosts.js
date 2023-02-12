import { useMemo } from "react"


export const useSortedPosts = (postsData, sort) => {
    const sortedPosts = useMemo(() => sort
        ? [...postsData].sort((a, b) => a[sort].localeCompare(b[sort]))
        : postsData, [sort, postsData])
    return sortedPosts
}


export const usePosts = (postsData, sort, search) => {
    const sortedPosts = useSortedPosts(postsData, sort)

    const seachedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedPosts])

    return seachedAndSortedPosts
}