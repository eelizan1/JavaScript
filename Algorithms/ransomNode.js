const harmlessRansomNote = (noteText, magazineText) => {
    // change string into an array of words
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');

    // key: word, value: # of times it occurs
    const magazineObj = {};

    magazineArr.forEach(word => {
        // check if word is in the magazine object
        if (!magazineObj[word]) magazineObj[word] = 0;
            magazineObj[word]++;
    });

    let noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) {
                noteIsPossible = false;
            }
        } else {
            noteIsPossible = false;
        }
    });

    return noteIsPossible;
}