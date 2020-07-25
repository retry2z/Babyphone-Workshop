export default (data, length) => {
    if (data.length >= length && !!data) {
        return false
    }

    return true
}