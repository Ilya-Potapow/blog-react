import { useState } from "react"

export const UseFetching = (cb) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setLoading(true)
            await cb()
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }
    return [fetching, loading, error]
}