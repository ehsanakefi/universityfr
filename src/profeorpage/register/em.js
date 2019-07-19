// export function observe(receive) {
//     const randPos = () => Math.floor(Math.random() * 8)
//     setInterval(() => receive([randPos(), randPos()]), 500)
// }
let knightPosition = [1, 7]
export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y
    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}
let observer = null

function emitChange() {
    console.log("emitChange" + "  " + knightPosition)

    observer(knightPosition)
}

export function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.')
    }
    console.log("observe" + "  " + o)

    observer = o
    emitChange()
}

export function moveKnight(toX, toY) {
    knightPosition = [toX, toY]
    emitChange()
}