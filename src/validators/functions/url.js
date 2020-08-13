export default (data) => {
    const pattern = /^(http|https):/g;
    if (!pattern.test(data) && !!data) {
        return false
    }
    return true
}