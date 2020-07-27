export default (data, param) => {
    const [field1, field2] = param;

    if (data[field1] !== data[field2] && !!data) {
        return false
    }

    return true
}

