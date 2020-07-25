export default (data) => {
    const patternLength = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
    if (!patternLength.test(data) && !!data) {
        return false
    }

    return true
}

