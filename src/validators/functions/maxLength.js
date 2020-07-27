export default (data, length) => {
    if (data.length >= Number(length) && !!data) {
        return false
    }

    return true
}