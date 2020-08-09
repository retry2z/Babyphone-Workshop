export default (data) => {
    const pattern = /^(http|https):/g;
    if (!pattern.test(data)) {
        return false
    }
    return true
}