export default (data, length) => {
    if (data.length > Number(length)) {
        return false
    }

    return true
}