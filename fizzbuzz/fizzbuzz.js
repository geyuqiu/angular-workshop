const fizzbuzz = (zahlenListe) => {
    return zahlenListe.map(value => {
        if (value % 15 === 0) {
            return 'fizzbuzz'
        } else if (value % 5 === 0) {
            return 'buzz'
        } else if (value % 3 === 0) {
            return 'fizz'
        }
        return value;
    }).join(' ')
}

module.exports = fizzbuzz