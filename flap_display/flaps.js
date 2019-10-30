// You notice that each flap character is on some kind of a rotor and the order of characters on each rotor is:

// ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789

// And after a long while you deduce that the display works like this:

// Starting from the left, all rotors (from the current one to the end of the line) flap together until the left-most rotor character is correct.
// Then the mechanism advances by 1 rotor to the right...
// ...REPEAT this rotor procedure until the whole line is updated
// ...REPEAT this line procedure from top to bottom until the whole display is updated

const flapDisplay = (lines, rotors) => {
    // Your code here!
    return lines
  }



module.exports = { flapDisplay };