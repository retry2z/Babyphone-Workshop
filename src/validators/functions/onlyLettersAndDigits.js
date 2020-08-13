export default (data) => {
    const pattern = /^([A-Za-z0-9\s]+)$/g;
    if (!pattern.test(data) && !!data) {
        return false
    }
    return true
}