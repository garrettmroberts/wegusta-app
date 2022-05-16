const capitalize = string => {
    return string
        .split(' ')
        .map((word, idx) => {
            if (['is', 'the', 'in', 'at'].includes(word) && idx !== 0) {
                return word
            } else {
                return word[0].toUpperCase() + word.slice(1).toLowerCase()
            }
        })
        .join(' ')
}

export default capitalize
