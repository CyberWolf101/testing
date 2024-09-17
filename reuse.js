
export const useUpdateNFT = async (id) => {
    const [loading, setLoading] = useState(false)

    const updateNFT = async () => {
        setLoading(true)
        try {
            swal("success", "post deleted", 'success')
        } catch (error) {
            console.log(error)
            swal("error", "an error occured", 'error')
        } finally {
            setLoading(false)
        }


    }

    return { updateNFT, loading }

}