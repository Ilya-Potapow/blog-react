import { useMemo } from "react"


export const useSortedPosts = (postsData, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...postsData].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return postsData;
    }, [sort, postsData])
    return sortedPosts
}


export const usePosts = (postsData, sort, search) => {
    const sortedPosts = useSortedPosts(postsData, sort)

    const seachedAndSortedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, sortedPosts])

    return seachedAndSortedPosts
}