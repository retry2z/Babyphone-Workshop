export default (field1, field2) => {
    if (!field1.localeCompare(field2)) {
        return false
    }

    return true
}

