/**
 * Enum for the range of the item
 * 
 * @enum {number}
 * @readonly
 * @property {number} SELF - the item can only be used on the player
 * @property {number} SINGLE - the item can only be used on a single target
 * @property {number} ALL - the item can be used on all the targets
*/
enum itemRange {
    SELF,
    SINGLE
}

export default itemRange