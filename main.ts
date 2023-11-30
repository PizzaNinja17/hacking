namespace SpriteKind {
    export const Gmail = SpriteKind.create()
    export const Email1 = SpriteKind.create()
    export const Email2 = SpriteKind.create()
    export const phish = SpriteKind.create()
    export const duck = SpriteKind.create()
    export const VR = SpriteKind.create()
    export const VRPLAYER = SpriteKind.create()
    export const GUNlazer = SpriteKind.create()
    export const hologuykind = SpriteKind.create()
    export const popup = SpriteKind.create()
    export const worker = SpriteKind.create()
    export const powerButton = SpriteKind.create()
    export const whiteHat = SpriteKind.create()
}
function reallife (sene: number) {
    if (sene == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.duck)
        sprites.destroyAllSpritesOfKind(SpriteKind.Mouse)
        scene.setBackgroundImage(img`
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcfffffffff5ffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecf5fffff5fffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffff5ffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcf5ffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecff5ffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffff5ffffffcfffffff5ffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecf5fffffffffffcf5ffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffff5ffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffff5fcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcfffffff5ffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeee999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeffff1ddddddddddddde99999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcd22222222222d999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcd22222222252d999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcd22222222222d999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcd2f222f2222fd999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcd2f2f2f22f22d999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcd2ff22f2ff2fd999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcd22222222222d999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcd22222222222d999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeefffffcdddddddd54ddd999999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeffffbcccccccccceeeeeee99999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeefffffffffffeeeeeeeeeee9999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeffccccccccffeeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeccbdddddddddddeeeeeeeeeeeeeeeeeee9999999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeccdcdcddcccccddeeeeeeeeeeeeeeeeeeeeee999eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeccddddddcdddcddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeecd1cd1d1d1d1d1deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeecdd1dddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeecccbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
        playerspritereal = sprites.create(img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            . . c c f f f c c f f c f 
            . . f f f e f f f f c c f 
            . . f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f b b f 1 e b e f . 
            . . . f b b b b e f f f . 
            . . . f f e e e e e f . . 
            . . . f b b b e 4 4 e . . 
            . . . f b b b e 4 4 e . . 
            . . . f c c c f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `, SpriteKind.Player)
        Vrgogglessprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 7 1 1 1 1 1 1 1 7 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . f . . . . . . . . . . . . f . 
            f 1 f . . . . . . . . . . f 1 f 
            f 1 1 f . . . . . . . . f 1 1 f 
            f 1 f . . . . . . . . . . f 1 f 
            . f . . . . . . . . . . . . f . 
            `, SpriteKind.VR)
        Vrgogglessprite.setPosition(136, 100)
        playerspritereal.setPosition(43, 96)
        pause(2000)
        playerspritereal.sayText("shoot!", 1000, true)
        pause(2000)
        playerspritereal.sayText("...", 1000, true)
        if (bugbontyreadd == true) {
            pause(1000)
            playerspritereal.sayText("!!!", 500, true)
            pause(500)
            scene.setBackgroundImage(img`
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcfffffffff5ffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecf5fffff5fffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffff5ffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcf5ffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecff5ffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffff5ffffffcfffffff5ffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecf5fffffffffffcf5ffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffff5ffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffff5fcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcfffffff5ffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecfffffffffffffcffffffffffffceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeffff1dddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdfffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdfffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdfffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdfffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdfffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdfffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdfffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdfffffffffffdeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeefffffcdddddddd54dddeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeffffbcccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeffccccccccffeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeccbdddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeccdcdcddcccccddeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeccddddddcdddcddeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeecd1cd1d1d1d1d1deeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeecdd1dddddddddddeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeecccbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefcccccccccccccccccccccccccceeeeeeeeeeeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefcccccccccccccccccccccccccceeeeeeeeffffffffffffcccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefcccccccccccccccccccccccccceeeeeeeeffffffffffffcccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeeefffffffffffffcccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeeffffffffffffffcccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeeffffffffffffffcccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccccccccccccccccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccfeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccfeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccfeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccfeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccfeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccfeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccfeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eefccceeeeeeeeeeeeeeeeeeffccceeeeeecccfeeeeeeeeeecccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                ddfcccddddddddddddddddddffcccddddddcccfddddddddddcccfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddfcccddddddddddddddddddffcccddddddcccfddddddddddcccfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddfcccddddddddddddddddddffcccddddddcccfddddddddddcccfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                ddfcccddddddddddddddddddffcccddddddcccfddddddddddcccfddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                `)
            playerspritereal.sayText("I'll do the bug bounty", 2000, true)
            playerspritereal.setImage(img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b d d d d b f e f . 
                e 4 f d d d d d d f 4 e . 
                e e f c c c c c c f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `)
            pause(2000)
            playerspritereal.y += -10
            playerspritereal.vy = 38
            pause(700)
            playerspritereal.vy = 0
            playerspritereal.setStayInScreen(true)
            controller.moveSprite(playerspritereal, 70, 0)
            realplayerwalking = true
            story.printText("move with arrow keys", 75, 20, 15, 14, story.TextSpeed.Fast)
        } else {
            game.gameOver(false)
        }
    }
    if (sene == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.duck)
        sprites.destroyAllSpritesOfKind(SpriteKind.Mouse)
        tiles.setCurrentTilemap(tilemap`level12`)
        playerspritereal = sprites.create(img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            . . c c f f f c c f f c f 
            . . f f f e f f f f c c f 
            . . f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f b b f 1 e b e f . 
            . . . f b b b b e f f f . 
            . . . f f e e e e e f . . 
            . . . f b b b e 4 4 e . . 
            . . . f b b b e 4 4 e . . 
            . . . f c c c f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `, SpriteKind.Player)
        scene.cameraFollowSprite(playerspritereal)
        tiles.placeOnTile(playerspritereal, tiles.getTileLocation(3, 12))
        playerspritereal.setImage(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b d d d d b f e f . 
            e 4 f d d d d d d f 4 e . 
            e e f c c c c c c f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `)
        realplayerwalking = true
        controller.moveSprite(playerspritereal, 70, 0)
        playerspritereal.sayText("Now to sell the data that I found back to Google.", 5000, true)
        googleWorker = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f e e f f f . . . . 
            . . . f f f e e e e f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e e e e e e e e e f . . 
            . . f e e f f f f f f e e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f d d f b f e f f . 
            . f e e d 1 f d d f 1 d e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.worker)
        tiles.placeOnTile(googleWorker, tiles.getTileLocation(13, 12))
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lazergunequiped == true) {
        if (platfomerguy.isHittingTile(CollisionDirection.Bottom) && lazergunequiped == true) {
            platfomerguy.vy = -120
        }
    }
})
sprites.onOverlap(SpriteKind.Mouse, SpriteKind.popup, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.VRPLAYER, SpriteKind.Ball, function (sprite, otherSprite) {
    lazergunequiped = false
    Faceingright = true
    controller.moveSprite(platfomerguy, 0, 0)
    platfomerguy.vy = 50
    platfomerguy.startEffect(effects.spray)
    platfomerguy.vx = 0
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    for (let index = 0; index < 10; index++) {
        platfomerguy.setImage(img`
            ...........cccc11111111111111...........
            ..........cccccc1999999999991...........
            ..........cccccc1999999999991...........
            ..........cccccc1999999999991...........
            ..........cccccc1999999999661...........
            ..........ccccc99999999996991...........
            ..........ccc99c1999999966991...........
            ..........cc9ccc6999999699991...........
            ..........c9cccc1699996699991...........
            ..........c9cccc1611116154111...........
            ...........ccccdb6bbb6bbbb..............
            ...............9cc6ccc6ccc..............
            .......66.....cc9bb66666ccc.............
            .........66...c119111111666.............
            ...........6..c11911116111c.......66....
            ...........66.c11191116111c.......6.....
            ............66c11119161111cc.....6......
            ............6166666916111111c....6......
            ........c6cc6111cc666ccc6cc11cccc6......
            .......cb6b16111c291881561c11111c6......
            ......cb16116611cc9ccccc6cc1111166......
            .....cb116cbb6111911111916111166cccc....
            ..55c111c6.c66111911119916111bbc........
            .555c11c.6..6cb191ccc99c9c61bcc.........
            55...cc..6...cb191cdd9cd9c61bc..........
            5....55..6.9.cb911cdddcdd916bc..........
            .....55....99cb16666cccddc9166..6.......
            ....55......99b611cd666ccc191c666.......
            ...55........69b11cddc66dc119c..........
            ......66.....6b9b1cddcd66c119c..........
            ........6....c6b9999cccccc1196666.......
            .........6...c66bb11111111699c..........
            ..........66.cb66b11111116611c..........
            ............66cc66ccccccc6ccccc.........
            ...........c16611666666..611111c........
            ..........cccc6ccc.......6ccccccc.......
            ..........c111111c.......c111111c.......
            ..........cccccccc.......cccccccc.......
            ..........c111111c.......c111111c.......
            ..........cccccccc.......cccccccc.......
            `)
        pause(100)
        platfomerguy.setImage(img`
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd69666666666d...........
            ..........fffffcd96666666666d66.........
            ..........fffffcd9666666666666..........
            ..........fffffc99dddd6d54dd6...........
            ...........ffffb9ccccccccc.66...........
            ...............f9fffffffff.6............
            ..............ff9cccccccff66.66.........
            ..............fdd9ddddddd6666...........
            ...........6..fdd9dddddd66f.............
            ...........6..fdd9dddd66ddf....999......
            ...........6.99dd9996699ddff..99........
            ............6d99ddd6dddddddd99..........
            ........9fff6dd9ff6ffffffffd9ffff.......
            .......fc9cd6dd9f26d88d5adf99dddf.......
            ......fcd9dd6dd9fff6ffffff99dddddf......
            .....fcdd9fccdd9ddd6dddddd9ddddcffff....
            ..22fdddf.9fccd96ddd6ddddddddccf........
            .222fddf..9.ffc96dff6fffffddcff.........
            22...ff..9...fc9d66d6dc9999999999.......
            2....22..9...fcddd66d69ddfddcf...6......
            .....22.9....fcdddf6c6cddfddcf.66.......
            ....22.......9cdddf696cccfddd66.........
            ...22........f9cddfd96dddfdd6f..........
            .............fc9cdfd9c6dd666df..........
            .............fcc9dffff66f6dddf..........
            .........9...fccc9dddddddddddf.99.......
            ..........9..fcccc9ddddddddddf.9........
            ...........9cffffff99fffffffff9.........
            ...........99dd9999999...cddd9dc........
            ..........cc999ccc....999cccc9ccc.......
            ..........cddddddc......9cddd9ddc.......
            ..........cccccccc......9cccc9ccc.......
            ..........cddddddc......9cddd9ddc.......
            ..........cccccccc.......ccc99ccc.......
            `)
    }
    pause(100)
    info.changeLifeBy(-1)
    effects.clearParticles(platfomerguy)
    controller.moveSprite(platfomerguy, 90, 0)
    platfomerguy.vy = 0
    platfomerguy.vx = 0
    lazergunequiped = true
})
sprites.onOverlap(SpriteKind.Mouse, SpriteKind.Gmail, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        MouseSprite.setPosition(134, 100)
        controller.moveSprite(MouseSprite, 0, 0)
        signed_in()
    }
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile49`, function (sprite, location) {
    platfomerguy.sayText("press B to interact", 1000, false)
    if (controller.B.isPressed()) {
        controller.moveSprite(platfomerguy, 0, 0)
        queston(3)
    }
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile33`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
        hologuy = sprites.create(img`
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 8 6 6 8 8 8 . . . . 
            . . . 8 8 8 6 6 6 6 8 8 8 . . . 
            . . 8 8 8 9 9 9 9 9 9 8 8 8 . . 
            . . 8 8 9 6 6 6 6 6 6 9 9 8 . . 
            . . 8 9 6 8 8 8 8 8 8 6 9 8 . . 
            . . 8 8 8 8 9 9 9 9 8 8 8 8 . . 
            . 8 8 9 8 9 f 9 9 f 9 8 9 8 8 . 
            . 8 9 9 9 1 f 9 9 f 1 9 9 9 8 . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . . . 8 9 9 8 8 8 8 9 9 8 . . . 
            . . 6 6 8 6 6 6 6 6 6 8 6 6 . . 
            . . 6 9 8 6 6 6 6 6 6 8 9 6 . . 
            . . 6 6 8 6 6 9 9 6 6 8 6 6 . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 . . 8 8 . . . . . 
            `, SpriteKind.hologuykind)
        tiles.placeOnTile(hologuy, value)
        hologuy.y += -10
        hologuy.sayText("hey! you're not suppost to be here!", 5000, true)
    }
})
sprites.onOverlap(SpriteKind.Mouse, SpriteKind.Email2, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.phish)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        scammail = textsprite.create("do you want", 1, 15)
        scammail.setPosition(120, 10)
        scammail = textsprite.create("Free", 1, 15)
        scammail.setPosition(102, 20)
        scammail = textsprite.create("Money?", 1, 7)
        scammail.setPosition(135, 20)
        Phisinglink = sprites.create(img`
            1999919111191999191119111
            1911119111111911191191111
            1911119111191911191911111
            1911119111191911199111111
            1911119111191911191911111
            1911119111191911191191111
            1911119111191911191119111
            1999919999191999191111911
            1111111111111111111111111
            1911919999199911999911111
            1911919111191191911111111
            1911919999199911911111111
            1999919111199111999911111
            1911919111191911911111111
            1911919111191911911111111
            1911919999191911999911111
            `, SpriteKind.phish)
        Phisinglink.setPosition(126, 80)
    }
})
sprites.onOverlap(SpriteKind.duck, SpriteKind.Mouse, function (sprite, otherSprite) {
    otherSprite.follow(sprite, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.worker, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        realplayerwalking = false
        controller.moveSprite(playerspritereal, 0, 0)
        tiles.placeOnTile(playerspritereal, tiles.getTileLocation(12, 12))
        animation.stopAnimation(animation.AnimationTypes.All, playerspritereal)
        playerspritereal.setImage(img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c . . 
            f c c f f f f e f f f . . 
            f f f f f f f e e f f . . 
            f f e e f b f e e f f . . 
            . f e b e 1 f b b f . . . 
            . f f f e b b b b f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e b b b f . . . 
            . . e 4 4 e b b b f . . . 
            . . f e e f c c c f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `)
        googleWorker.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f e f e e e e f f . . . . 
            . . f e e e f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e e e e e e e f f f f . . . 
            . f e e f f f f e e e e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e d d f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        playerspritereal.sayText("I am here for the bug bounty", 2000, true)
        pause(2000)
        googleWorker.sayText("Ok, what did you find?", 2000, true)
        pause(2000)
        playerspritereal.sayText("Valuable Data", 2000, true)
        pause(2000)
        googleWorker.sayText("Oh gosh, I'll pay good money to know how you did it", 5000, true)
        pause(5000)
        playerspritereal.sayText("*Explains*", 2000, true)
        pause(2000)
        googleWorker.sayText("Thanks for showing me, I I'll fix it right now", 5000, true)
        pause(5000)
        googleWorker.sayText("Here is your money", 2000, true)
        googleWorker.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . . f e f e e e e f f . . 
            . . . . f e e e f e e e e f f . 
            . . . . f e e e e f f e e e f . 
            . . . f e e e e e e e f f f f . 
            . . . f e e f f f f e e e e f . 
            . . . f f f e e e f f f f f f f 
            . . . f e e d d f b e 4 4 e f f 
            . . . . f e d d f 1 4 d 4 e e f 
            . . 3 3 . f d d d d 4 e e e f . 
            . 3 7 7 3 f e 4 4 4 e e f f . . 
            . 3 7 7 7 e e 2 2 2 2 2 4 . . . 
            . 3 7 7 7 d d e 2 2 2 2 4 . . . 
            . . 3 3 7 d d e 4 4 4 4 f . . . 
            . . . . 3 e e f f f f f . . . . 
            . . . . . . . . f f f . . . . . 
            `)
        pause(2000)
        googleWorker.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f e f e e e e f f . . . . 
            . . f e e e f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e e e e e e e f f f f . . . 
            . f e e f f f f e e e e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e d d f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        playerspritereal.setImage(img`
            . . . f f f f f . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f f f f f f c f f f . . . . . 
            f f f f c f f f c f f . . . . . 
            f c f f c c f f f c c . . . . . 
            f c c f f f f e f f f . . . . . 
            f f f f f f f e e f f . . . . . 
            f f e e f b f e e f f . . . . . 
            . f e b e 1 f b b f . . . 3 3 . 
            . f f f e b b b b f . . 3 7 7 3 
            . . f b b b b b f e e 3 7 7 7 3 
            . . f b b b b b e 4 4 7 7 7 7 3 
            . . f b b b b b e 4 4 7 7 7 3 . 
            . . f c c c c c c e e 3 3 3 . . 
            . . . f f f f f f . . . . . . . 
            . . . . f f f . . . . . . . . . 
            `)
        playerspritereal.sayText("Thanks", 2000, true)
        pause(4000)
        sprites.destroy(playerspritereal)
        sprites.destroy(googleWorker)
        sprites.destroyAllSpritesOfKind(SpriteKind.powerButton)
        tiles.setCurrentTilemap(tilemap`level13`)
        scene.setBackgroundImage(img`
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55b22222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bbbbbb22222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55555bb2222222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555bbbbb222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55555555b5db222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222f4d5f1d5b55b2222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222c445ff1b55db2222222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b4444bfd555bdbb22222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b4444445b55dcddb22222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555bccdddc22222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555dddddbc22222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bd55555ddddddc222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bb555dddddbc2222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bbcccccccc22222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222ff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222222ff22222222222222222f222222222222222222222222222222222fff22222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222f2222222222222222222f22222222222222222222222222222222f222fffff222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222ff22222222222222222222f22222222222222222222222222222222f22222222f22222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222f222222222222222222222f2222222222222222222222222222222f222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222ff2222222222222222222222f22222222222222222222222f2222222f2222222222f2222222222222222222222222222f22222222222222222222222222222222222222222222222
            2222222222222222f22222222222222222222222222222222222222222222222f2222222f22222222222f222222222222222222222222222ff2222222222222222222222222222222222222222222222
            2222222222222222f22222222222222222222222222222222222222222222222f2222222f22222222222f22222222222222222222f22222f2ff222222222222222222222222222222222222222222222
            222222222222222f222222222222222222222222222222222222222222222222f2222222f22222222222ff2222222222222222222f22222f22f222222222222222222222222222222222222222222222
            222222222222222f222222222222222222222222222222222222222222222222f2222222f222222222222f2222222222222222222f2222f2222f22222222222222222222222222222222222222222222
            222222222222222f22222222222222222222222222222222222f22222222222f22222222f222222222222f2222222222222222222f2222f2222f222222fff222222222222ff222222222222222222222
            22222222222222f222222222222222222222222222222222222ff2222222222f22222222f22222222222ff2222222222222222222f222f22222f222222f2f22222222222fff222222222222222222222
            22222222222222f2222222222222222222222222222222222222f222222222f222222222f22222222222f22222222222222222222f222f222222f2222f22f222222222ff22f222222222222222222222
            2222222222222f22222222222222222222222222222222222222f222222222f222222222f22222222222f22222222222222222222f222f222222f222f222f22222222f2222f222222222222222222222
            2222222222222f22222222222222222222222222222222222222f222222222f222222222f2222222222f222222222222222222222f22f2222222f22f2222f2222222f2222f2222222222222222222222
            2222222222222f22222222222222222222222222222222222222f222222222f222222222f222222222ff222222222222222222222f22f2222222f22f22222f222222f2222f2222222222222222222222
            2222222222222f22222222222222222222222222f222222222222f2222222f2222222222f22222ffff22222222222222222222222f2f222222222ff222222f222222f222ff2222222222222222222222
            222222222222f222222222222222222222222222f222222222222f222222f22222222222f2222f222222222222222222222222222f2f222222222ff222222f222222f2ff222222222222222222222222
            222222222222f222222222222222222222222222f222222222222f222222f22222222222f22222222222222222222222222222222f2f22222222222222222f222222f222222222222222222222222222
            222222222222f2222222222222222222222222222f22222222222f222222f22222222222f22222222222222222222222222222222f2f22222222222222222f222222f222222222222222222222222222
            222222222222f2222222222222222222222222222f22222222222f22222f222222222222f22222222222222222222222222222222fff22222222222222222f222222ff22222222222222222222222222
            222222222222f22222222222222fffff222222222f22222222222f22222f222222222222f222222222222222222222222222222222ff22222222222222222f22222222ff222222222222222222222222
            222222222222f222222222fffff2222ff22222222f22222222222f2222f2222222222222ff22222222222222222222222222222222ff2222222222222222222222222222fffffff222222ff222222222
            222222222222f222222222f222222222ff2222222f22222222222f222f222222222222222ff2222222222222222222222222222222f222222222222222222222222222222222222ffffffff222222222
            222222222222f2222222222222222222ff2222222f222222222222f22f2222222222222222f2222222222222222222222222222222f22222222222222222222222222222222222222222222222222222
            222222222222f222222222222222222ff22222222f222222222222f22f22222222222222222ff22222222222222222222222222222f22222222222222222222222222222222222222222222222222222
            222222222222f222222222222222222f222222222f222222222222f22f2222222222222222222ff2222222fffffff2222222222222222222222222222222222222222222222222222222222222222222
            222222222222f222222222222222222f222222222f222222222222f2f2222222222222222222222fffffff22222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f22222222222222222f2222222222f222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f22222222222222222f2222222222f222222222222f222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f22222222222222222f2222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f2222222222222222f22222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f2222222222222222f22222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f222222222222222f222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222ff22222222222222f222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222ff222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222fff222222ffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222ffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222f2222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222ffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222fff2f2222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222f222f2222f22222222222ffffff22222222222222222222222222222222222222222222222222fffff2222222222222222222222222222222222222222222222222222222222222222222222222
            22222f222f2222f2222222222f222222fffffff2222222222222222222222222222222222222222222f2222fff2222222222222222222222222222222222222222222222222222222222222222222222
            22222f222f22222f22222222222222222222222ffff2222222222222222222222222222222222222222f22222ffff2222222222222222222222222222222222222222222222222222222222222222222
            22222f222f22222f222222222222222222222222222ff22222222222222222222222222222222222222f222222222f222222222222222222222222222222222222222222222222222222222222222222
            22222ff22f22222f2222222222222222222222222222f2222222222222222222222222222222222222f22222222222f22222222222222222222222222222222222222222222222222222222222222222
            222222f22f22222f22222222222222222222222222222f22222222222222222222ff22222222222222f222222222222ff222222222222222222222222222222222222222222222222222222222222222
            2222222f2f22222f22222222222222222222222222222f2222222222222222222f2fff222222222222f22222222222222f22222222222222222222222222222222222222222222222222222222222222
            22222222ff22222f22222222222222222222222222222f222222222222222222ff2222f2222222222f2222222222222222ff222222222222222222222222222222222222222222222222222222222222
            222222222fff222f22222222222222222222222222222f22222222222222222f222222ff222222222f22222222222222222f222222222222222222222222222222222222222222222222222222222222
            222222222f22ff2f22222222222222222222222222222f2222222222222222f22222222f22222222f2222222222222222222f22222222222222222222222222222222222222222222222222222222222
            222222222f2222ff2222222222222222222222222222ff222222222222222f222222222f22222222f22222222222222222222f2222222222222222222222222222222222222222222222222222222222
            222222222f22222ff222222222222222222222222222f222222222222222f22222222222f222222f2222222222222222222222f222222222222222222222222222222222222222222222222222222222
            222222222f2222f2f22222222222222222222222222f2222222222222222f22222222222f22222f22222222222222222222222f222222222222222222222222222222222222222222222222222222222
            222222222f2222f2f2222222222222222222222222f2222222222222222f222222222222ff2222f222222222222222222222222f22222222222222222222222222222222222222222222222222222222
            222222222f2222f2f222222222222222222222222f22222222222222222f2222222222222f2222f2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f2222f2f22222222222222222222222f222222222222222222f2222222222222f222ff2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f2222f2f222222222222222222222ff2222222222222222222f2222222222222f222f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f2222f2f2222222222222222222222fffff222222222222222f22222222222222f22f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f22222f2222222222222222222222222222ffff22222222222f22222222222222f22f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f22222f2222222222222222222222222222222f22222222222f22222222222222f222f2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f22222f222222222222222222222222222222ff22222222222f22222222222222f222f222222222222222222222222ff2222222222222222222222222222222222222222222222222222222
            222222222f2222ff222222222222222222222222222222f2222222222222f2222222222222f222ff2222222222222222222222ff22222222222222222222222222222222222222222222222222222222
            222222222f222fff22222222222222222222222222222ff22222222222222f222222222222f2222f22222222222222222222ff2222222222222222222222222222222222222222222222222222222222
            ffff22222fffff2f2222222222222222222222222222ff2222222222222222f22222222222f22222f222222222222222222f222222222222222222222222222222222222222222222222222222222222
            2222ffffff22222f222222222222222222222222ffff2222222222222222222f222222222ff222222f222222222222222ff2222222222222222222222222222222222222222222222222222222222222
            222222222f22222f222222222222222222222fff222222222222222222222222fffffffff222222222ff222222222222f222222222222222222222222222222222222222222222222222222222222222
            222222222f22222f22222222222222222222222222222222222222222222222222222222222222222222ff222222222f2222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222ff22222ff22222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffff2222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `)
        scene.centerCameraAt(0, 0)
        pause(2000)
        story.printText("When you get hacked should you meet the hackers demands?", 75, 0, 1, 15)
        story.showPlayerChoices("Yes", "No")
        if (story.checkLastAnswer("No")) {
            story.printText("Correct... ", 75, 0, 15, 1)
            story.printText("You must hire somebody to unhack your computer", 75, 0, 15, 1, story.TextSpeed.Slow)
            scene.setBackgroundImage(img`
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                `)
            tiles.setCurrentTilemap(tilemap`level14`)
            googleWorker = sprites.create(img`
                . . 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 . . 
                . . 9 9 9 9 9 9 9 9 9 9 . . 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                . f f e e e e e e e e f f . 
                . f f f b f e e f b f f f . 
                . f f e 1 f e e f 1 e f f . 
                . . f f e e e e e e f f . . 
                . . e f e e f f e e f e . . 
                . e 4 f 1 1 1 1 1 1 f 4 e . 
                . 4 d f 1 1 1 1 1 1 f d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `, SpriteKind.whiteHat)
            tiles.placeOnTile(googleWorker, tiles.getTileLocation(5, 12))
            playerspritereal = sprites.create(img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b d d d d b f e f . 
                e 4 f d d d d d d f 4 e . 
                e e f c c c c c c f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `, SpriteKind.Player)
            scene.cameraFollowSprite(playerspritereal)
            tiles.placeOnTile(playerspritereal, tiles.getTileLocation(0, 12))
            controller.moveSprite(playerspritereal, 70, 0)
            realplayerwalking = true
            puter = sprites.create(img`
                ................................
                ................................
                ................................
                ................................
                ................................
                .............ddddddddddddd1ffff.
                .............dfffffffffffdcfffff
                .............dffff22fffffdcfffff
                .............dfff2992ffffdcfffff
                .............dfff2222ffffdcfffff
                .............dfff2222ffffdcfffff
                .............dfff2ff2ffffdcfffff
                .............dfffffffffffdcfffff
                .............dfffffffffffdcfffff
                .............ddd45ddddddddcfffff
                ................ccccccccccbffff.
                ................fffffffffff.....
                ................ffccccccccff....
                ..............dddddddddddbcc....
                .............ddcccccddcdcdcc....
                .............ddcdddcddddddcc....
                .............d1d1d1d1d1dc1dc....
                .............ddddddddddd1ddc....
                .............bbbbbbbbbbbccc.....
                `, SpriteKind.Player)
            tiles.placeOnTile(puter, tiles.getTileLocation(12, 12))
        } else {
            game.gameOver(false)
        }
    }
    googleWorker.sayText("Press B to interact", 100, false)
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile40`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile55`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (realplayerwalking == true) {
        animation.runImageAnimation(
        playerspritereal,
        [img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            . f c c f f f c c f f c f 
            . f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e 4 4 4 . 
            . . . f d d d d e 4 4 e . 
            . . f f c c c c f e e f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            . f c c f f f c c f f c f 
            . f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 e e f f f . 
            . . . f f e e 4 4 e f . . 
            . . . f d d e 4 4 e f . . 
            . . f f c c f e e f f f . 
            . . f f f f f f f f f f . 
            . . . f f f . . . f f . . 
            `,img`
            . . . . . f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . . f f c f f f c f f f f 
            . f c c f f f c c f f c f 
            . f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . . f f e e f b f e e f f 
            . . . f 4 4 f 1 e 4 e f . 
            . . . f 4 4 4 4 e f f f . 
            . . . f f e e e e e f . . 
            . . . f d d d e 4 4 e . . 
            . . . f d d d e 4 4 e . . 
            . . . f c c c f e e f . . 
            . . . . f f f f f f . . . 
            . . . . . . f f f . . . . 
            `],
        100,
        true
        )
    }
    if (lazergunequiped == true) {
        animation.runImageAnimation(
        platfomerguy,
        [img`
            ........................................
            ...........ddddddddddddd1ffff...........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........ddd45ddddddddcfffff..........
            ..............ccccccccccbffff...........
            .............fffccccccccff..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            ............ffdddddddddddff.............
            ...........fdddddddddddddddf............
            .......ffffddfffffffffffddddffff........
            .......fdddddfda5d88d92fdddddcccf.......
            ......fddddddfffffffffffddddddddcf......
            ....ffffcddddddddddddddddddccffddcf.....
            ........fccdddddddddddddddccf..fdddf22..
            .........ffcddffffffffdddcff....fddf222.
            ..........fcddfddcdddfdddcf......ff...22
            ..........fcddfddcdddfdddcf......22....2
            ..........fcddfddccccfdddcf......22.....
            ..........fdddfccccddfdddcf.......22....
            ..........fdddfdddcddfddccf........22...
            ..........fdddfdddcddfdcccf.............
            ..........fdddffffffffdcccf.............
            ..........fdddddddddddccccf.............
            ..........fdddddddddddccccfc............
            .........cfffffffffffffffffdc...........
            ........cdddddc.......cccccccc..........
            .......cccccccc.......cddddddc..........
            .......cddddddc.......cccccccc..........
            .......cccccccc.......cddddddc..........
            .......cddddddc.......cccccccc..........
            .......cccccccc.........................
            `,img`
            ...........ddddddddddddd1ffff...........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........ddd45ddddddddcfffff..........
            ..............ccccccccccbffff...........
            ..............fffffffffff...............
            .............fffccccccccff..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            ............ffdddddddddddff.............
            ...........fdddddddddddddddfffff........
            .......ffffddfffffffffffdddddcccf.......
            .......fdddddfda5d88d92fddddddddcf......
            ......fddddddfffffffffffddddcffddcf.....
            ....ffffcddddddddddddddddddcf..fdddf22..
            ........fccdddddddddddddddcc....fddf222.
            .........ffcddffffffffdddcff.....ff...22
            ..........fcddfddcdddfdddcf......22....2
            ..........fcddfddcdddfdddcf......22.....
            ..........fcddfddccccfdddcf.......22....
            ..........fdddfccccddfdddcf........22...
            ..........fdddfdddcddfddccf.............
            ..........fdddfdddcddfdcccf.............
            ..........fdddffffffffdcccf.............
            ..........fdddddddddddccccf.............
            ..........fdddddddddddccccf.............
            .........cfffffffffffffffffc............
            ........cdddddc......cccccccc...........
            .......cccccccc......cddddddc...........
            .......cddddddc......cccccccc...........
            .......cccccccc......cddddddc...........
            .......cddddddc......cccccccc...........
            .......cccccccc.........................
            `,img`
            ........................................
            ...........ddddddddddddd1ffff...........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........ddd45ddddddddcfffff..........
            ..............ccccccccccbffff...........
            .............fffccccccccff..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            ............ffdddddddddddff.............
            ...........fdddddddddddddddf............
            .......ffffddfffffffffffddddffff........
            .......fdddddfda5d88d92fdddddcccf.......
            ......fddddddfffffffffffddddddddcf......
            ....ffffcddddddddddddddddddccffddcf.....
            ........fccdddddddddddddddccf..fdddf22..
            .........ffcddffffffffdddcff....fddf222.
            ..........fcddfddcdddfdddcf......ff...22
            ..........fcddfddcdddfdddcf......22....2
            ..........fcddfddccccfdddcf......22.....
            ..........fdddfccccddfdddcf.......22....
            ..........fdddfdddcddfddccf........22...
            ..........fdddfdddcddfdcccf.............
            ..........fdddffffffffdcccf.............
            ..........fdddddddddddccccf.............
            .........cfdddddddddddccccf.............
            ........cdfffffffffffffffff.............
            .......cccccccc......cdddddc............
            .......cddddddc......cccccccc...........
            .......cccccccc......cddddddc...........
            .......cddddddc......cccccccc...........
            .......cccccccc......cddddddc...........
            .....................cccccccc...........
            `,img`
            ...........ddddddddddddd1ffff...........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........ddd45ddddddddcfffff..........
            ..............ccccccccccbffff...........
            ..............fffffffffff...............
            .............fffccccccccff..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            ............ffdddddddddddff.............
            ...........fdddddddddddddddfffff........
            .......ffffddfffffffffffdddddcccf.......
            .......fdddddfda5d88d92fddddddddcf......
            ......fddddddfffffffffffddddcffddcf.....
            ....ffffcddddddddddddddddddcf..fdddf22..
            ........fccdddddddddddddddcc....fddf222.
            .........ffcddffffffffdddcff.....ff...22
            ..........fcddfddcdddfdddcf......22....2
            ..........fcddfddcdddfdddcf......22.....
            ..........fcddfddccccfdddcf.......22....
            ..........fdddfccccddfdddcf........22...
            ..........fdddfdddcddfddccf.............
            ..........fdddfdddcddfdcccf.............
            ..........fdddffffffffdcccf.............
            ..........fdddddddddddccccf.............
            .........cfdddddddddddccccf.............
            ........cdfffffffffffffffffc............
            .......cccccccc.......cdddddc...........
            .......cddddddc.......cccccccc..........
            .......cccccccc.......cddddddc..........
            .......cddddddc.......cccccccc..........
            .......cccccccc.......cddddddc..........
            ......................cccccccc..........
            `,img`
            ........................................
            ...........ddddddddddddd1ffff...........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........ddd45ddddddddcfffff..........
            ..............ccccccccccbffff...........
            .............fffccccccccff..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            ............ffdddddddddddff.............
            ...........fdddddddddddddddf............
            .......ffffddfffffffffffddddffff........
            .......fdddddfda5d88d92fdddddcccf.......
            ......fddddddfffffffffffddddddddcf......
            ....ffffcddddddddddddddddddccffddcf.....
            ........fccdddddddddddddddccf..fdddf22..
            .........ffcddffffffffdddcff....fddf222.
            ..........fcddfddcdddfdddcf......ff...22
            ..........fcddfddcdddfdddcf......22....2
            ..........fcddfddccccfdddcf......22.....
            ..........fdddfccccddfdddcf.......22....
            ..........fdddfdddcddfddccf........22...
            ..........fdddfdddcddfdcccf.............
            ..........fdddffffffffdcccf.............
            ..........fdddddddddddccccf.............
            ........ccfdddddddddddccccf.............
            .......cddfffffffffffffffffc............
            ......cccccccc........cdddddc...........
            ......cddddddc........cccccccc..........
            ......cccccccc........cddddddc..........
            ......cddddddc........cccccccc..........
            ......cccccccc........cddddddc..........
            ......................cccccccc..........
            `,img`
            ...........ddddddddddddd1ffff...........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........ddd45ddddddddcfffff..........
            ..............ccccccccccbffff...........
            ..............fffffffffff...............
            .............fffccccccccff..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            ............ffdddddddddddff.............
            ...........fdddddddddddddddf.fff........
            .......ffffddfffffffffffddddfcccf.......
            .......fdddddfda5d88d92fddddddddcf......
            ......fddddddfffffffffffdddddffddcf.....
            ....ffffcddddddddddddddddddcc..fdddf22..
            ........fccdddddddddddddddccf...fddf222.
            .........ffcddffffffffdddcff.....ff...22
            ..........fcddfddcdddfdddcf......22....2
            ..........fcddfddcdddfdddcf......22.....
            ..........fcddfddccccfdddcf.......22....
            ..........fdddfccccddfdddcf........22...
            ..........fdddfdddcddfddccf.............
            ..........fdddfdddcddfdcccf.............
            ..........fdddffffffffdcccf.............
            ..........fdddddddddddccccf.............
            ..........fdddddddddddccccf.............
            ........ccfffffffffffffffffc............
            .......cdddddc........cdddddc...........
            ......cccccccc........cccccccc..........
            ......cddddddc........cddddddc..........
            ......cccccccc........cccccccc..........
            ......cddddddc........cddddddc..........
            ......cccccccc........cccccccc..........
            `],
        100,
        true
        )
        Faceingright = false
    }
})
function signed_in () {
    story.printText(" loading security questions...", 70, 0, 3)
    story.printText("all hacking is illegal true or false?", 70, 0, 3)
    story.showPlayerChoices("True", "False")
    if (story.checkLastAnswer("False")) {
        story.printText("All hackers are bad", 70, 0, 3)
        story.showPlayerChoices("True", "False")
        if (story.checkLastAnswer("False")) {
            story.printText("name all types of hackers", 70, 0, 3)
            story.showPlayerChoices("Black and white hats", "Black, green, white hats", "Black, gray white hats", "there is only one type of hacker", "Black and red hats")
            if (story.checkLastAnswer("Black, gray white hats")) {
                story.printText("can you get into a computer without a password?", 70, 0, 3)
                story.showPlayerChoices("True", "False")
                if (story.checkLastAnswer("True")) {
                    story.printText("So YOU could be a hacker?", 70, 0, 3)
                    story.showPlayerChoices("Yes", "No")
                } else {
                    game.gameOver(false)
                }
                if (story.checkLastAnswer("Yes")) {
                    story.printText("Ok then what is the password to this computer?", 70, 0, 3)
                    story.showPlayerChoices(password.substr(0, 7), "" + password + "9162", password, password.substr(8, 24), "I don't remember")
                    if (story.checkLastAnswer(password)) {
                        emaillogincomplete()
                    } else {
                        game.gameOver(false)
                    }
                } else {
                    game.gameOver(false)
                }
            } else {
                game.gameOver(false)
            }
        } else {
            game.gameOver(false)
        }
    } else {
        game.gameOver(false)
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (realplayerwalking == true) {
        animation.stopAnimation(animation.AnimationTypes.All, playerspritereal)
        playerspritereal.setImage(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b d d d d b f e f . 
            e 4 f d d d d d d f 4 e . 
            e e f c c c c c c f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `)
    }
    if (lazergunequiped == true) {
        animation.stopAnimation(animation.AnimationTypes.All, platfomerguy)
        platfomerguy.setImage(img`
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcdddddddd54ddd...........
            ...........ffffbcccccccccc..............
            ...............fffffffffff..............
            ..............ffccccccccfff.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            .............ffdddddddddddff............
            ............fdddddddddddddddf...........
            ........ffffddddfffffffffffddffff.......
            .......fcccdddddf29d88d5adfdddddf.......
            ......fcddddddddfffffffffffddddddf......
            .....fcddffccddddddddddddddddddcffff....
            ..22fdddf..fccdddddddddddddddccf........
            .222fddf....ffcdddffffffffddcff.........
            22...ff......fcdddfdddcddfddcf..........
            2....22......fcdddfdddcddfddcf..........
            .....22......fcdddfccccddfddcf..........
            ....22.......fcdddfddccccfdddf..........
            ...22........fccddfddcdddfdddf..........
            .............fcccdfddcdddfdddf..........
            .............fcccdffffffffdddf..........
            .............fccccdddddddddddf..........
            .............fccccdddddddddddf..........
            ............cfffffffffffffffffc.........
            ...........cdddddc.......cdddddc........
            ..........cccccccc.......cccccccc.......
            ..........cddddddc.......cddddddc.......
            ..........cccccccc.......cccccccc.......
            ..........cddddddc.......cddddddc.......
            ..........cccccccc.......cccccccc.......
            `)
        Faceingright = true
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (realplayerwalking == true) {
        animation.stopAnimation(animation.AnimationTypes.All, playerspritereal)
        playerspritereal.setImage(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b d d d d b f e f . 
            e 4 f d d d d d d f 4 e . 
            e e f c c c c c c f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `)
    }
    if (lazergunequiped == true) {
        animation.stopAnimation(animation.AnimationTypes.All, platfomerguy)
        platfomerguy.setImage(img`
            ...........ddddddddddddd1ffff...........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........d66666666666dcfffff..........
            ...........ddd45ddddddddcfffff..........
            ..............ccccccccccbffff...........
            ..............fffffffffff...............
            .............fffccccccccff..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            .............fdddddddddddf..............
            ............ffdddddddddddff.............
            ...........fdddddddddddddddf............
            .......ffffddfffffffffffddddffff........
            .......fdddddfda5d88d92fdddddcccf.......
            ......fddddddfffffffffffddddddddcf......
            ....ffffcddddddddddddddddddccffddcf.....
            ........fccdddddddddddddddccf..fdddf22..
            .........ffcddffffffffdddcff....fddf222.
            ..........fcddfddcdddfdddcf......ff...22
            ..........fcddfddcdddfdddcf......22....2
            ..........fcddfddccccfdddcf......22.....
            ..........fdddfccccddfdddcf.......22....
            ..........fdddfdddcddfddccf........22...
            ..........fdddfdddcddfdcccf.............
            ..........fdddffffffffdcccf.............
            ..........fdddddddddddccccf.............
            ..........fdddddddddddccccf.............
            .........cfffffffffffffffffc............
            ........cdddddc.......cdddddc...........
            .......cccccccc.......cccccccc..........
            .......cddddddc.......cddddddc..........
            .......cccccccc.......cccccccc..........
            .......cddddddc.......cddddddc..........
            .......cccccccc.......cccccccc..........
            `)
        Faceingright = false
    }
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile58`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setCurrentTilemap(tilemap`level11`)
    scene.cameraFollowSprite(evilDuckBoss)
    evilDuckBoss.sayText("Now for the Ultimate Test...")
    game.splash("Now for the Ultimate Test... Click \"A\" when you are ready...")
    blockSettings.writeNumber("Part", 3)
    game.reset()
})
info.onCountdownEnd(function () {
    if (clickerMinigame == true) {
        clickerMinigame = false
        sprites.destroyAllSpritesOfKind(SpriteKind.popup)
        game.splash("How?!! How did you not click any of them!?!")
        evilDuckBoss = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f 1 1 1 f f 1 1 1 f . . . 
            . . . f 1 f 1 f f 1 f 1 f . . . 
            . . . f 1 1 1 f f 1 1 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . f f 1 1 1 1 1 1 f f . . . 
            . . . f 1 f f f f f f 1 f . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . . f f f f f f f f f f f f . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Text)
        evilDuckBoss.sayText("I give up >:(")
        sprites.destroy(evilDuckBoss, effects.ashes, 3000)
        popupSprite = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 1 1 1 1 1 1 2 2 1 1 1 1 1 1 f 
            f 1 1 1 1 1 1 2 2 1 1 1 1 1 1 f 
            f 1 1 1 1 2 1 2 2 1 2 1 1 1 1 f 
            f 1 1 1 2 1 1 2 2 1 1 2 1 1 1 f 
            f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
            f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
            f 1 1 2 1 1 1 1 1 1 1 1 2 1 1 f 
            f 1 1 1 2 1 1 1 1 1 1 2 1 1 1 f 
            f 1 1 1 1 2 2 2 2 2 2 1 1 1 1 f 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
            f 1 1 2 2 1 1 2 2 2 1 2 2 2 1 f 
            f 1 2 1 1 2 1 2 1 1 1 2 1 1 1 f 
            f 1 2 1 1 2 1 2 2 1 1 2 2 1 1 f 
            f 1 1 2 2 1 1 2 1 1 1 2 1 1 1 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.powerButton)
        popupSprite.setPosition(16, 16)
    } else {
        game.gameOver(false)
    }
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile32`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile34`)) {
        hologuy = sprites.create(img`
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 8 6 6 8 8 8 . . . . 
            . . . 8 8 8 6 6 6 6 8 8 8 . . . 
            . . 8 8 8 9 9 9 9 9 9 8 8 8 . . 
            . . 8 8 9 6 6 6 6 6 6 9 9 8 . . 
            . . 8 9 6 8 8 8 8 8 8 6 9 8 . . 
            . . 8 8 8 8 9 9 9 9 8 8 8 8 . . 
            . 8 8 9 8 9 f 9 9 f 9 8 9 8 8 . 
            . 8 9 9 9 1 f 9 9 f 1 9 9 9 8 . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . . . 8 9 9 8 8 8 8 9 9 8 . . . 
            . . 6 6 8 6 6 6 6 6 6 8 6 6 . . 
            . . 6 9 8 6 6 6 6 6 6 8 9 6 . . 
            . . 6 6 8 6 6 9 9 6 6 8 6 6 . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 . . 8 8 . . . . . 
            `, SpriteKind.hologuykind)
        tiles.placeOnTile(hologuy, value)
        hologuy.y += -10
        hologuy.sayText("This is a restricted area", 5000, true)
    }
})
function platformerguy () {
    newVarGun = false
    statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
    statusbar.setLabel("Blasterpower")
    statusbar.value = 0
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.setColor(5, 2, 2)
    platfomerguy = sprites.create(img`
        ...........ffff1ddddddddddddd...........
        ..........fffffcd66666666666d...........
        ..........fffffcd66666666666d...........
        ..........fffffcd66666666666d...........
        ..........fffffcd66666666666d...........
        ..........fffffcd66666666666d...........
        ..........fffffcd66666666666d...........
        ..........fffffcd66666666666d...........
        ..........fffffcd66666666666d...........
        ..........fffffcdddddddd54ddd...........
        ...........ffffbcccccccccc..............
        ...............fffffffffff..............
        ..............ffccccccccfff.............
        ..............fdddddddddddf.............
        ..............fdddddddddddf.............
        ..............fdddddddddddf.............
        .............ffdddddddddddff............
        ............fdddddddddddddddf...........
        ........ffffddddfffffffffffddffff.......
        .......fcccdddddf29d88d5adfdddddf.......
        ......fcddddddddfffffffffffddddddf......
        .....fcddffccddddddddddddddddddcff......
        ..22fdddf..fccdddddddddddddddccf........
        .222fddf....ffcdddffffffffddcff.........
        22...ff......fcdddfdddcddfddcf..........
        2....22......fcdddfdddcddfddcf..........
        .....22......fcdddfccccddfddcf..........
        ....22.......fcdddfddccccfdddf..........
        ...22........fccddfddcdddfdddf..........
        .............fcccdfddcdddfdddf..........
        .............fcccdffffffffdddf..........
        .............fccccdddddddddddf..........
        .............fccccdddddddddddf..........
        ............cfffffffffffffffffc.........
        ...........cdddddc.......cdddddc........
        ..........cccccccc.......cccccccc.......
        ..........cddddddc.......cddddddc.......
        ..........cccccccc.......cccccccc.......
        ..........cddddddc.......cddddddc.......
        ..........cccccccc.......cccccccc.......
        `, SpriteKind.VRPLAYER)
    blastersprite = sprites.create(img`
        1 . . . . f f f . . . . . 
        . 1 f f f 9 9 9 f f f f . 
        . f 8 5 8 8 8 8 8 8 8 8 f 
        . f 2 f 7 8 8 8 8 8 f f . 
        . f 8 a 8 8 8 8 8 f . . . 
        . f 8 8 8 8 f 8 8 f . . . 
        . f 8 8 8 f . f f . . . . 
        . f 8 8 f . . . . . . . . 
        . . f f . . . . . . . . . 
        `, SpriteKind.GUNlazer)
    scene.cameraFollowSprite(platfomerguy)
    scene.setBackgroundImage(img`
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        `)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(platfomerguy, tiles.getTileLocation(6, 22))
    info.setLife(3)
    color.startFade(color.Black, color.originalPalette)
    lazergunequiped = true
    color.pauseUntilFadeDone()
    story.spriteSayText(platfomerguy, "We are now in the web")
    controller.moveSprite(platfomerguy, 90, 0)
    Faceingright = true
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        drone = sprites.create(img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ................
            ................
            ................
            ................
            ................
            `, SpriteKind.Enemy)
        drone.setBounceOnWall(true)
        animation.runImageAnimation(
        drone,
        [img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ..737......737..
            ...7........7...
            ................
            ................
            ................
            `,img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ..737......737..
            ..737......737..
            ...7........7...
            ................
            ................
            `],
        200,
        true
        )
        drone.vx = 30
        tiles.placeOnTile(drone, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
        drone = sprites.create(img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ................
            ................
            ................
            ................
            ................
            `, SpriteKind.Enemy)
        drone.setBounceOnWall(true)
        animation.runImageAnimation(
        drone,
        [img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ..737......737..
            ...7........7...
            ................
            ................
            ................
            `,img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ..737......737..
            ..737......737..
            ...7........7...
            ................
            ................
            `],
        200,
        true
        )
        drone.vy = 30
        tiles.placeOnTile(drone, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile50`, function (sprite, location) {
    platfomerguy.sayText("press B to interact", 1000, false)
    if (controller.B.isPressed()) {
        controller.moveSprite(platfomerguy, 0, 0)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Booth)
        lazergunequiped = false
        redsolid = false
        color.startFade(color.Black, color.originalPalette)
        tiles.placeOnTile(platfomerguy, tiles.getTileLocation(2, 9))
        scene.setBackgroundImage(img`
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
            `)
        tiles.setCurrentTilemap(tilemap`level8`)
        platfomerguy.sayText("Now That I am in it is time to steal the data...", 5000, true)
        bluezone = false
        lazergunequiped = true
        controller.moveSprite(platfomerguy, 90, 0)
    }
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile34`, function (sprite, location) {
    info.changeLifeBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
        hologuy = sprites.create(img`
            . . . . . . 8 8 8 8 . . . . . . 
            . . . . 8 8 8 6 6 8 8 8 . . . . 
            . . . 8 8 8 6 6 6 6 8 8 8 . . . 
            . . 8 8 8 9 9 9 9 9 9 8 8 8 . . 
            . . 8 8 9 6 6 6 6 6 6 9 9 8 . . 
            . . 8 9 6 8 8 8 8 8 8 6 9 8 . . 
            . . 8 8 8 8 9 9 9 9 8 8 8 8 . . 
            . 8 8 9 8 9 f 9 9 f 9 8 9 8 8 . 
            . 8 9 9 9 1 f 9 9 f 1 9 9 9 8 . 
            . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
            . . . 8 9 9 8 8 8 8 9 9 8 . . . 
            . . 6 6 8 6 6 6 6 6 6 8 6 6 . . 
            . . 6 9 8 6 6 6 6 6 6 8 9 6 . . 
            . . 6 6 8 6 6 9 9 6 6 8 6 6 . . 
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 . . 8 8 . . . . . 
            `, SpriteKind.hologuykind)
        tiles.placeOnTile(hologuy, value)
        hologuy.y += -10
        hologuy.sayText("Get away from that door!", 5000, true)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (realplayerwalking == true) {
        animation.runImageAnimation(
        playerspritereal,
        [img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f . 
            f c c f f f f e f f f f . 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f f . 
            f f e 4 e 1 f 4 4 f f . . 
            . f f f e 4 4 4 4 f . . . 
            . 4 4 4 e e e e f f . . . 
            . e 4 4 e d d d d f . . . 
            . f e e f c c c c f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f . 
            f c c f f f f e f f f f . 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f f . . 
            . f f f e e 4 4 4 f . . . 
            . . f e 4 4 e e f f . . . 
            . . f e 4 4 e d d f . . . 
            . f f f e e f c c f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `,img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c f . 
            f c c f f f f e f f f f . 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f . . . 
            . f f f e 4 4 4 4 f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e d d d f . . . 
            . . e 4 4 e d d d f . . . 
            . . f e e f c c c f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `],
        100,
        true
        )
    }
    if (lazergunequiped == true) {
        animation.runImageAnimation(
        platfomerguy,
        [img`
            ........................................
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcdddddddd54ddd...........
            ...........ffffbcccccccccc..............
            ..............ffccccccccfff.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            .............ffdddddddddddff............
            ............fdddddddddddddddf...........
            ........ffffddddfffffffffffddffff.......
            .......fcccdddddf29d88d5adfdddddf.......
            ......fcddddddddfffffffffffddddddf......
            .....fcddffccddddddddddddddddddcffff....
            ..22fdddf..fccdddddddddddddddccf........
            .222fddf....ffcdddffffffffddcff.........
            22...ff......fcdddfdddcddfddcf..........
            2....22......fcdddfdddcddfddcf..........
            .....22......fcdddfccccddfddcf..........
            ....22.......fcdddfddccccfdddf..........
            ...22........fccddfddcdddfdddf..........
            .............fcccdfddcdddfdddf..........
            .............fcccdffffffffdddf..........
            .............fccccdddddddddddf..........
            ............cfccccdddddddddddf..........
            ...........cdfffffffffffffffffc.........
            ..........cccccccc.......cdddddc........
            ..........cddddddc.......cccccccc.......
            ..........cccccccc.......cddddddc.......
            ..........cddddddc.......cccccccc.......
            ..........cccccccc.......cddddddc.......
            .........................cccccccc.......
            `,img`
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcdddddddd54ddd...........
            ...........ffffbcccccccccc..............
            ...............fffffffffff..............
            ..............ffccccccccfff.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            .............ffdddddddddddff............
            ........fffffdddddddddddddddf...........
            .......fcccdddddfffffffffffddffff.......
            ......fcddddddddf29d88d5adfdddddf.......
            .....fcddffcddddfffffffffffddddddf......
            ..22fdddf..fcddddddddddddddddddcffff....
            .222fddf....ccdddddddddddddddccf........
            22...ff.....ffcdddffffffffddcff.........
            2....22......fcdddfdddcddfddcf..........
            .....22......fcdddfdddcddfddcf..........
            ....22.......fcdddfccccddfddcf..........
            ...22........fcdddfddccccfdddf..........
            .............fccddfddcdddfdddf..........
            .............fcccdfddcdddfdddf..........
            .............fcccdffffffffdddf..........
            .............fccccdddddddddddf..........
            .............fccccdddddddddddf..........
            ............cfffffffffffffffffc.........
            ...........cccccccc......cdddddc........
            ...........cddddddc......cccccccc.......
            ...........cccccccc......cddddddc.......
            ...........cddddddc......cccccccc.......
            ...........cccccccc......cddddddc.......
            .........................cccccccc.......
            `,img`
            ........................................
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcdddddddd54ddd...........
            ...........ffffbcccccccccc..............
            ..............ffccccccccfff.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            .............ffdddddddddddff............
            ............fdddddddddddddddf...........
            ........ffffddddfffffffffffddffff.......
            .......fcccdddddf29d88d5adfdddddf.......
            ......fcddddddddfffffffffffddddddf......
            .....fcddffccddddddddddddddddddcffff....
            ..22fdddf..fccdddddddddddddddccf........
            .222fddf....ffcdddffffffffddcff.........
            22...ff......fcdddfdddcddfddcf..........
            2....22......fcdddfdddcddfddcf..........
            .....22......fcdddfccccddfddcf..........
            ....22.......fcdddfddccccfdddf..........
            ...22........fccddfddcdddfdddf..........
            .............fcccdfddcdddfdddf..........
            .............fcccdffffffffdddf..........
            .............fccccdddddddddddf..........
            .............fccccdddddddddddfc.........
            .............fffffffffffffffffdc........
            ............cdddddc......cccccccc.......
            ...........cccccccc......cddddddc.......
            ...........cddddddc......cccccccc.......
            ...........cccccccc......cddddddc.......
            ...........cddddddc......cccccccc.......
            ...........cccccccc.....................
            `,img`
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcdddddddd54ddd...........
            ...........ffffbcccccccccc..............
            ...............fffffffffff..............
            ..............ffccccccccfff.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            .............ffdddddddddddff............
            ........fffffdddddddddddddddf...........
            .......fcccdddddfffffffffffddffff.......
            ......fcddddddddf29d88d5adfdddddf.......
            .....fcddffcddddfffffffffffddddddf......
            ..22fdddf..fcddddddddddddddddddcffff....
            .222fddf....ccdddddddddddddddccf........
            22...ff.....ffcdddffffffffddcff.........
            2....22......fcdddfdddcddfddcf..........
            .....22......fcdddfdddcddfddcf..........
            ....22.......fcdddfccccddfddcf..........
            ...22........fcdddfddccccfdddf..........
            .............fccddfddcdddfdddf..........
            .............fcccdfddcdddfdddf..........
            .............fcccdffffffffdddf..........
            .............fccccdddddddddddf..........
            .............fccccdddddddddddfc.........
            ............cfffffffffffffffffdc........
            ...........cdddddc.......cccccccc.......
            ..........cccccccc.......cddddddc.......
            ..........cddddddc.......cccccccc.......
            ..........cccccccc.......cddddddc.......
            ..........cddddddc.......cccccccc.......
            ..........cccccccc......................
            `,img`
            ........................................
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcdddddddd54ddd...........
            ...........ffffbcccccccccc..............
            ..............ffccccccccfff.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            .............ffdddddddddddff............
            ............fdddddddddddddddf...........
            ........ffffddddfffffffffffddffff.......
            .......fcccdddddf29d88d5adfdddddf.......
            ......fcddddddddfffffffffffddddddf......
            .....fcddffccddddddddddddddddddcffff....
            ..22fdddf..fccdddddddddddddddccf........
            .222fddf....ffcdddffffffffddcff.........
            22...ff......fcdddfdddcddfddcf..........
            2....22......fcdddfdddcddfddcf..........
            .....22......fcdddfccccddfddcf..........
            ....22.......fcdddfddccccfdddf..........
            ...22........fccddfddcdddfdddf..........
            .............fcccdfddcdddfdddf..........
            .............fcccdffffffffdddf..........
            .............fccccdddddddddddf..........
            .............fccccdddddddddddfcc........
            ............cfffffffffffffffffddc.......
            ...........cdddddc........cccccccc......
            ..........cccccccc........cddddddc......
            ..........cddddddc........cccccccc......
            ..........cccccccc........cddddddc......
            ..........cddddddc........cccccccc......
            ..........cccccccc......................
            `,img`
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcdddddddd54ddd...........
            ...........ffffbcccccccccc..............
            ...............fffffffffff..............
            ..............ffccccccccfff.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            ..............fdddddddddddf.............
            .............ffdddddddddddff............
            ........fff.fdddddddddddddddf...........
            .......fcccfddddfffffffffffddffff.......
            ......fcddddddddf29d88d5adfdddddf.......
            .....fcddffdddddfffffffffffddddddf......
            ..22fdddf..ccddddddddddddddddddcffff....
            .222fddf...fccdddddddddddddddccf........
            22...ff.....ffcdddffffffffddcff.........
            2....22......fcdddfdddcddfddcf..........
            .....22......fcdddfdddcddfddcf..........
            ....22.......fcdddfccccddfddcf..........
            ...22........fcdddfddccccfdddf..........
            .............fccddfddcdddfdddf..........
            .............fcccdfddcdddfdddf..........
            .............fcccdffffffffdddf..........
            .............fccccdddddddddddf..........
            .............fccccdddddddddddf..........
            ............cfffffffffffffffffcc........
            ...........cdddddc........cdddddc.......
            ..........cccccccc........cccccccc......
            ..........cddddddc........cddddddc......
            ..........cccccccc........cccccccc......
            ..........cddddddc........cddddddc......
            ..........cccccccc........cccccccc......
            `],
        100,
        true
        )
        Faceingright = true
    }
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile54`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    MouseSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . . f 1 f . . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 1 f . . . . . . . . . 
        . . f 1 1 1 f f . . . . . . . . 
        . . f 1 1 1 1 1 f . . . . . . . 
        . . f 1 1 1 1 1 1 f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . . f f f 1 1 1 f f f . . . . . 
        . . . . f 1 1 f . . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MouseSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    MouseSprite.follow(platfomerguy, 40)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (lazergunequiped == true && newVarGun == true) {
        if (Faceingright == true) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . 
                . . . . . 2 2 2 2 2 
                . . . . . 2 2 2 2 2 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `, blastersprite, 120, 0)
            projectile.x += 5
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . 
                2 2 2 2 2 . . . . . 
                2 2 2 2 2 . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                `, blastersprite, -120, 0)
            projectile.x += -5
        }
    }
})
sprites.onOverlap(SpriteKind.Mouse, SpriteKind.phish, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        sprites.destroyAllSpritesOfKind(SpriteKind.Email1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Email2)
        sprites.destroyAllSpritesOfKind(SpriteKind.phish)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        controller.moveSprite(MouseSprite, 0, 0)
        effects.smiles.startScreenEffect(8000)
        scene.cameraShake(6, 9000)
        evilducksprite1 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.duck)
        evilducksprite1.setPosition(50, MouseSprite.y)
        game.setDialogTextColor(2)
        evilducksprite1.sayText("I am an agent of chaos", 2000, true)
        pause(2000)
        evilducksprite1.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 2 5 d 4 2 . . 
            . . b d 5 5 b 1 2 2 5 4 4 c . . 
            b b d b 5 5 5 d 2 b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `)
        evilducksprite1.sayText("bow before me", 2000, true)
        pause(2000)
        evilducksprite1.vx = 80
        pause(2000)
        for (let index = 0; index < 5; index++) {
            scene.setBackgroundImage(img`
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                `)
            pause(50)
            scene.setBackgroundImage(img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                fffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                fffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                fffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                fffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                fffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                fffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                fffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                fffffffffffffffffffffffffffff11111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                `)
            pause(50)
            scene.setBackgroundImage(img`
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                fffffffffffffffff222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111fffffffffffffffffffff
                fffffffffffffffff222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111fffffffffffffffffffff
                fffffffffffffffff222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111fffffffffffffffffffff
                fffffffffffffffff222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111fffffffffffffffffffff
                fffffffffffffffff222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111fffffffffffffffffffff
                fffffffffffffffff222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111fffffffffffffffffffff
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111fffffffffffffffffffff
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111fffffffffffffffffffff
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777fffffffffffffffffffffffffffdddddddddddddddddddd5555555555555555555555511111111111111111111111111111111
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                f22222222222222222222222ffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999999999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc111111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cfffffffffffffffffffffffcccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
                cccccccccccccccccccccccccccc1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd
                `)
            pause(50)
            scene.setBackgroundImage(img`
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999ffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                fffffffffffffffffffffffffffffffffffffffffffffffffffffff777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaf777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaf777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaf777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaf777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaf777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaf777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaf777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaaf777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555511111111111111111111111111111111
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7777777777777777777779999999999999999999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffdddddd999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffdddddd999999999999995555555555555555555555518888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                22222222222222222222222222222222222aaaaaaaaaaaaaaaaaaa7999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa888888888888888888888888888888888
                ffffffffffffffffffffffffffff999999999999999999999999997999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999997999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999997999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999997999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999997999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999997999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999997999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999997999fffffffffffffffffffffffffffddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffddddddddddddddaaaaaaaaaaaaaaaaaaaaaa88ddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff999999999999999999999999999111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                ffffffffffffffffffffffffffff111111111111111111111111119111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111119111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                cccccccccccccccccccccccccccc111111111111111111111111119111fffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccddddddddddddddddddddddddddddddddd
                `)
            pause(50)
        }
        scene.setBackgroundImage(img`
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55b22222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bbbbbb22222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55555bb2222222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555bbbbb222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55555555b5db222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222f4d5f1d5b55b2222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222c445ff1b55db2222222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b4444bfd555bdbb22222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b4444445b55dcddb22222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555bccdddc22222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555dddddbc22222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bd55555ddddddc222222222
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bb555dddddbc2222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bbcccccccc22222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222ff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222222ff22222222222222222f222222222222222222222222222222222fff22222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222f2222222222222222222f22222222222222222222222222222222f222fffff222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222ff22222222222222222222f22222222222222222222222222222222f22222222f22222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222f222222222222222222222f2222222222222222222222222222222f222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222ff2222222222222222222222f22222222222222222222222f2222222f2222222222f2222222222222222222222222222f22222222222222222222222222222222222222222222222
            2222222222222222f22222222222222222222222222222222222222222222222f2222222f22222222222f222222222222222222222222222ff2222222222222222222222222222222222222222222222
            2222222222222222f22222222222222222222222222222222222222222222222f2222222f22222222222f22222222222222222222f22222f2ff222222222222222222222222222222222222222222222
            222222222222222f222222222222222222222222222222222222222222222222f2222222f22222222222ff2222222222222222222f22222f22f222222222222222222222222222222222222222222222
            222222222222222f222222222222222222222222222222222222222222222222f2222222f222222222222f2222222222222222222f2222f2222f22222222222222222222222222222222222222222222
            222222222222222f22222222222222222222222222222222222f22222222222f22222222f222222222222f2222222222222222222f2222f2222f222222fff222222222222ff222222222222222222222
            22222222222222f222222222222222222222222222222222222ff2222222222f22222222f22222222222ff2222222222222222222f222f22222f222222f2f22222222222fff222222222222222222222
            22222222222222f2222222222222222222222222222222222222f222222222f222222222f22222222222f22222222222222222222f222f222222f2222f22f222222222ff22f222222222222222222222
            2222222222222f22222222222222222222222222222222222222f222222222f222222222f22222222222f22222222222222222222f222f222222f222f222f22222222f2222f222222222222222222222
            2222222222222f22222222222222222222222222222222222222f222222222f222222222f2222222222f222222222222222222222f22f2222222f22f2222f2222222f2222f2222222222222222222222
            2222222222222f22222222222222222222222222222222222222f222222222f222222222f222222222ff222222222222222222222f22f2222222f22f22222f222222f2222f2222222222222222222222
            2222222222222f22222222222222222222222222f222222222222f2222222f2222222222f22222ffff22222222222222222222222f2f222222222ff222222f222222f222ff2222222222222222222222
            222222222222f222222222222222222222222222f222222222222f222222f22222222222f2222f222222222222222222222222222f2f222222222ff222222f222222f2ff222222222222222222222222
            222222222222f222222222222222222222222222f222222222222f222222f22222222222f22222222222222222222222222222222f2f22222222222222222f222222f222222222222222222222222222
            222222222222f2222222222222222222222222222f22222222222f222222f22222222222f22222222222222222222222222222222f2f22222222222222222f222222f222222222222222222222222222
            222222222222f2222222222222222222222222222f22222222222f22222f222222222222f22222222222222222222222222222222fff22222222222222222f222222ff22222222222222222222222222
            222222222222f22222222222222fffff222222222f22222222222f22222f222222222222f222222222222222222222222222222222ff22222222222222222f22222222ff222222222222222222222222
            222222222222f222222222fffff2222ff22222222f22222222222f2222f2222222222222ff22222222222222222222222222222222ff2222222222222222222222222222fffffff222222ff222222222
            222222222222f222222222f222222222ff2222222f22222222222f222f222222222222222ff2222222222222222222222222222222f222222222222222222222222222222222222ffffffff222222222
            222222222222f2222222222222222222ff2222222f222222222222f22f2222222222222222f2222222222222222222222222222222f22222222222222222222222222222222222222222222222222222
            222222222222f222222222222222222ff22222222f222222222222f22f22222222222222222ff22222222222222222222222222222f22222222222222222222222222222222222222222222222222222
            222222222222f222222222222222222f222222222f222222222222f22f2222222222222222222ff2222222fffffff2222222222222222222222222222222222222222222222222222222222222222222
            222222222222f222222222222222222f222222222f222222222222f2f2222222222222222222222fffffff22222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f22222222222222222f2222222222f222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f22222222222222222f2222222222f222222222222f222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f22222222222222222f2222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f2222222222222222f22222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f2222222222222222f22222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222f222222222222222f222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222ff22222222222222f222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222ff222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222fff222222ffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222222222222ffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            2222222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            222222222f2222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222222ffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222fff2f2222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            22222f222f2222f22222222222ffffff22222222222222222222222222222222222222222222222222fffff2222222222222222222222222222222222222222222222222222222222222222222222222
            22222f222f2222f2222222222f222222fffffff2222222222222222222222222222222222222222222f2222fff2222222222222222222222222222222222222222222222222222222222222222222222
            22222f222f22222f22222222222222222222222ffff2222222222222222222222222222222222222222f22222ffff2222222222222222222222222222222222222222222222222222222222222222222
            22222f222f22222f222222222222222222222222222ff22222222222222222222222222222222222222f222222222f222222222222222222222222222222222222222222222222222222222222222222
            22222ff22f22222f2222222222222222222222222222f2222222222222222222222222222222222222f22222222222f22222222222222222222222222222222222222222222222222222222222222222
            222222f22f22222f22222222222222222222222222222f22222222222222222222ff22222222222222f222222222222ff222222222222222222222222222222222222222222222222222222222222222
            2222222f2f22222f22222222222222222222222222222f2222222222222222222f2fff222222222222f22222222222222f22222222222222222222222222222222222222222222222222222222222222
            22222222ff22222f22222222222222222222222222222f222222222222222222ff2222f2222222222f2222222222222222ff222222222222222222222222222222222222222222222222222222222222
            222222222fff222f22222222222222222222222222222f22222222222222222f222222ff222222222f22222222222222222f222222222222222222222222222222222222222222222222222222222222
            222222222f22ff2f22222222222222222222222222222f2222222222222222f22222222f22222222f2222222222222222222f22222222222222222222222222222222222222222222222222222222222
            222222222f2222ff2222222222222222222222222222ff222222222222222f222222222f22222222f22222222222222222222f2222222222222222222222222222222222222222222222222222222222
            222222222f22222ff222222222222222222222222222f222222222222222f22222222222f222222f2222222222222222222222f222222222222222222222222222222222222222222222222222222222
            222222222f2222f2f22222222222222222222222222f2222222222222222f22222222222f22222f22222222222222222222222f222222222222222222222222222222222222222222222222222222222
            222222222f2222f2f2222222222222222222222222f2222222222222222f222222222222ff2222f222222222222222222222222f22222222222222222222222222222222222222222222222222222222
            222222222f2222f2f222222222222222222222222f22222222222222222f2222222222222f2222f2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f2222f2f22222222222222222222222f222222222222222222f2222222222222f222ff2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f2222f2f222222222222222222222ff2222222222222222222f2222222222222f222f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f2222f2f2222222222222222222222fffff222222222222222f22222222222222f22f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f22222f2222222222222222222222222222ffff22222222222f22222222222222f22f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f22222f2222222222222222222222222222222f22222222222f22222222222222f222f2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
            222222222f22222f222222222222222222222222222222ff22222222222f22222222222222f222f222222222222222222222222ff2222222222222222222222222222222222222222222222222222222
            222222222f2222ff222222222222222222222222222222f2222222222222f2222222222222f222ff2222222222222222222222ff22222222222222222222222222222222222222222222222222222222
            222222222f222fff22222222222222222222222222222ff22222222222222f222222222222f2222f22222222222222222222ff2222222222222222222222222222222222222222222222222222222222
            ffff22222fffff2f2222222222222222222222222222ff2222222222222222f22222222222f22222f222222222222222222f222222222222222222222222222222222222222222222222222222222222
            2222ffffff22222f222222222222222222222222ffff2222222222222222222f222222222ff222222f222222222222222ff2222222222222222222222222222222222222222222222222222222222222
            222222222f22222f222222222222222222222fff222222222222222222222222fffffffff222222222ff222222222222f222222222222222222222222222222222222222222222222222222222222222
            222222222f22222f22222222222222222222222222222222222222222222222222222222222222222222ff222222222f2222222222222222222222222222222222222222222222222222222222222222
            22222222222222222222222222222222222222222222222222222222222222222222222222222222222222ff22222ff22222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffff2222222222222222222222222222222222222222222222222222222222222222222
            2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
            `)
        story.printText("I am a black hat hacker", 75, 10, 2, 15, story.TextSpeed.Fast)
        story.printText("I have hacked you computer", 75, 10, 2, 15, story.TextSpeed.Fast)
        story.printText("you have three days to give me 300 dollars or say goodbye to your files", 75, 10, 2, 15, story.TextSpeed.Fast)
        pause(2000)
        reallife(1)
    }
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile23`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(46, 14), assets.tile`myTile13`)
    tiles.setWallAt(tiles.getTileLocation(46, 14), true)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile56`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    MouseSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . . f 1 f . . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 1 f . . . . . . . . . 
        . . f 1 1 1 f f . . . . . . . . 
        . . f 1 1 1 1 1 f . . . . . . . 
        . . f 1 1 1 1 1 1 f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . . f f f 1 1 1 f f f . . . . . 
        . . . . f 1 1 f . . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MouseSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    MouseSprite.follow(platfomerguy, 40)
    tiles.placeOnTile(MouseSprite, tiles.getTileLocation(3, 26))
    MouseSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . . f 1 f . . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 1 f . . . . . . . . . 
        . . f 1 1 1 f f . . . . . . . . 
        . . f 1 1 1 1 1 f . . . . . . . 
        . . f 1 1 1 1 1 1 f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . . f f f 1 1 1 f f f . . . . . 
        . . . . f 1 1 f . . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MouseSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    MouseSprite.follow(platfomerguy, 40)
    tiles.placeOnTile(MouseSprite, tiles.getTileLocation(8, 22))
    MouseSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . . f 1 f . . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 1 f . . . . . . . . . 
        . . f 1 1 1 f f . . . . . . . . 
        . . f 1 1 1 1 1 f . . . . . . . 
        . . f 1 1 1 1 1 1 f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . . f f f 1 1 1 f f f . . . . . 
        . . . . f 1 1 f . . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    MouseSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    MouseSprite.follow(platfomerguy, 40)
    tiles.placeOnTile(MouseSprite, tiles.getTileLocation(23, 21))
    tiles.setTileAt(tiles.getTileLocation(2, 11), assets.tile`myTile58`)
    tiles.setTileAt(tiles.getTileLocation(18, 25), assets.tile`myTile53`)
    tiles.setTileAt(tiles.getTileLocation(16, 14), assets.tile`myTile53`)
    tiles.setTileAt(tiles.getTileLocation(14, 8), assets.tile`myTile53`)
    tiles.setTileAt(tiles.getTileLocation(20, 22), assets.tile`myTile53`)
    tiles.setTileAt(tiles.getTileLocation(20, 17), assets.tile`myTile53`)
    tiles.setTileAt(tiles.getTileLocation(22, 11), assets.tile`myTile53`)
    tiles.setTileAt(tiles.getTileLocation(14, 28), assets.tile`myTile2`)
    tiles.setWallAt(tiles.getTileLocation(20, 22), true)
    tiles.setWallAt(tiles.getTileLocation(14, 8), true)
    tiles.setWallAt(tiles.getTileLocation(14, 28), true)
    tiles.setWallAt(tiles.getTileLocation(18, 25), true)
    tiles.setWallAt(tiles.getTileLocation(16, 14), true)
    tiles.setWallAt(tiles.getTileLocation(20, 17), true)
    tiles.setWallAt(tiles.getTileLocation(22, 11), true)
    tiles.setTileAt(tiles.getTileLocation(17, 25), assets.tile`myTile59`)
    tiles.setTileAt(tiles.getTileLocation(19, 8), assets.tile`myTile59`)
    tiles.setTileAt(tiles.getTileLocation(21, 8), assets.tile`myTile59`)
    tiles.setTileAt(tiles.getTileLocation(15, 18), assets.tile`transparency16`)
    info.setLife(info.life() + 2)
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile22`, function (sprite, location) {
    platfomerguy.sayText("press B to interact", 1000, false)
    if (controller.B.isPressed()) {
        controller.moveSprite(platfomerguy, 0, 0)
        queston(2)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.clear()
    game.reset()
})
function queston (num: number) {
    story.startCutscene(function () {
        if (num == 1) {
            lazergunequiped = false
            story.printText("What should you do if you are being hacked", platfomerguy.x, platfomerguy.y)
            story.showPlayerChoices("Turn off your computer", "disconnect from internet", "stop running all programs", "you can't do anything", "contact tech support")
            if (story.checkLastAnswer("disconnect from internet")) {
                controller.moveSprite(platfomerguy, 90, 0)
                lazergunequiped = true
                newVarGun = true
                story.cancelAllCutscenes()
                statusbar.value = 100
            } else {
                lazergunequiped = false
                Faceingright = true
                controller.moveSprite(platfomerguy, 0, 0)
                platfomerguy.vy = 50
                platfomerguy.vx = 0
                for (let index = 0; index < 8; index++) {
                    platfomerguy.setImage(img`
                        ...........cccc11111111111111...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999661...........
                        ..........ccccc99999999996991...........
                        ..........ccc99c1999999966991...........
                        ..........cc9ccc6999999699991...........
                        ..........c9cccc1699996699991...........
                        ..........c9cccc1611116154111...........
                        ...........ccccdb6bbb6bbbb..............
                        ...............9cc6ccc6ccc..............
                        .......66.....cc9bb66666ccc.............
                        .........66...c119111111666.............
                        ...........6..c11911116111c.......66....
                        ...........66.c11191116111c.......6.....
                        ............66c11119161111cc.....6......
                        ............6166666916111111c....6......
                        ........c6cc6111cc666ccc6cc11cccc6......
                        .......cb6b16111c291881561c11111c6......
                        ......cb16116611cc9ccccc6cc1111166......
                        .....cb116cbb6111911111916111166cccc....
                        ..55c111c6.c66111911119916111bbc........
                        .555c11c.6..6cb191ccc99c9c61bcc.........
                        55...cc..6...cb191cdd9cd9c61bc..........
                        5....55..6.9.cb911cdddcdd916bc..........
                        .....55....99cb16666cccddc9166..6.......
                        ....55......99b611cd666ccc191c666.......
                        ...55........69b11cddc66dc119c..........
                        ......66.....6b9b1cddcd66c119c..........
                        ........6....c6b9999cccccc1196666.......
                        .........6...c66bb11111111699c..........
                        ..........66.cb66b11111116611c..........
                        ............66cc66ccccccc6ccccc.........
                        ...........c16611666666..611111c........
                        ..........cccc6ccc.......6ccccccc.......
                        ..........c111111c.......c111111c.......
                        ..........cccccccc.......cccccccc.......
                        ..........c111111c.......c111111c.......
                        ..........cccccccc.......cccccccc.......
                        `)
                    pause(100)
                    platfomerguy.setImage(img`
                        ...........ffff1ddddddddddddd...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd69666666666d...........
                        ..........fffffcd96666666666d66.........
                        ..........fffffcd9666666666666..........
                        ..........fffffc99dddd6d54dd6...........
                        ...........ffffb9ccccccccc.66...........
                        ...............f9fffffffff.6............
                        ..............ff9cccccccff66.66.........
                        ..............fdd9ddddddd6666...........
                        ...........6..fdd9dddddd66f.............
                        ...........6..fdd9dddd66ddf....999......
                        ...........6.99dd9996699ddff..99........
                        ............6d99ddd6dddddddd99..........
                        ........9fff6dd9ff6ffffffffd9ffff.......
                        .......fc9cd6dd9f26d88d5adf99dddf.......
                        ......fcd9dd6dd9fff6ffffff99dddddf......
                        .....fcdd9fccdd9ddd6dddddd9ddddcffff....
                        ..22fdddf.9fccd96ddd6ddddddddccf........
                        .222fddf..9.ffc96dff6fffffddcff.........
                        22...ff..9...fc9d66d6dc9999999999.......
                        2....22..9...fcddd66d69ddfddcf...6......
                        .....22.9....fcdddf6c6cddfddcf.66.......
                        ....22.......9cdddf696cccfddd66.........
                        ...22........f9cddfd96dddfdd6f..........
                        .............fc9cdfd9c6dd666df..........
                        .............fcc9dffff66f6dddf..........
                        .........9...fccc9dddddddddddf.99.......
                        ..........9..fcccc9ddddddddddf.9........
                        ...........9cffffff99fffffffff9.........
                        ...........99dd9999999...cddd9dc........
                        ..........cc999ccc....999cccc9ccc.......
                        ..........cddddddc......9cddd9ddc.......
                        ..........cccccccc......9cccc9ccc.......
                        ..........cddddddc......9cddd9ddc.......
                        ..........cccccccc.......ccc99ccc.......
                        `)
                    pause(100)
                }
                controller.moveSprite(platfomerguy, 90, 0)
                info.changeLifeBy(-1)
                platfomerguy.vy = 0
                platfomerguy.vx = 0
                lazergunequiped = true
            }
        }
        if (num == 2) {
            lazergunequiped = false
            story.printText("what is a digital backdoor?", platfomerguy.x, platfomerguy.y)
            story.showPlayerChoices("A way to bypass Secuity ", "a name of an antihacking program", "a name of a mysterious hacker", "a digital black market")
            if (story.checkLastAnswer("A way to bypass Secuity ")) {
                controller.moveSprite(platfomerguy, 90, 0)
                lazergunequiped = true
                story.cancelAllCutscenes()
                tiles.setTileAt(tiles.getTileLocation(35, 7), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(35, 8), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(35, 9), assets.tile`transparency16`)
                tiles.setWallAt(tiles.getTileLocation(35, 7), false)
                tiles.setWallAt(tiles.getTileLocation(35, 8), false)
                tiles.setWallAt(tiles.getTileLocation(35, 9), false)
            } else {
                lazergunequiped = false
                Faceingright = true
                controller.moveSprite(platfomerguy, 0, 0)
                platfomerguy.vy = 50
                platfomerguy.vx = 0
                for (let index = 0; index < 16; index++) {
                    platfomerguy.setImage(img`
                        ...........cccc11111111111111...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999661...........
                        ..........ccccc99999999996991...........
                        ..........ccc99c1999999966991...........
                        ..........cc9ccc6999999699991...........
                        ..........c9cccc1699996699991...........
                        ..........c9cccc1611116154111...........
                        ...........ccccdb6bbb6bbbb..............
                        ...............9cc6ccc6ccc..............
                        .......66.....cc9bb66666ccc.............
                        .........66...c119111111666.............
                        ...........6..c11911116111c.......66....
                        ...........66.c11191116111c.......6.....
                        ............66c11119161111cc.....6......
                        ............6166666916111111c....6......
                        ........c6cc6111cc666ccc6cc11cccc6......
                        .......cb6b16111c291881561c11111c6......
                        ......cb16116611cc9ccccc6cc1111166......
                        .....cb116cbb6111911111916111166cccc....
                        ..55c111c6.c66111911119916111bbc........
                        .555c11c.6..6cb191ccc99c9c61bcc.........
                        55...cc..6...cb191cdd9cd9c61bc..........
                        5....55..6.9.cb911cdddcdd916bc..........
                        .....55....99cb16666cccddc9166..6.......
                        ....55......99b611cd666ccc191c666.......
                        ...55........69b11cddc66dc119c..........
                        ......66.....6b9b1cddcd66c119c..........
                        ........6....c6b9999cccccc1196666.......
                        .........6...c66bb11111111699c..........
                        ..........66.cb66b11111116611c..........
                        ............66cc66ccccccc6ccccc.........
                        ...........c16611666666..611111c........
                        ..........cccc6ccc.......6ccccccc.......
                        ..........c111111c.......c111111c.......
                        ..........cccccccc.......cccccccc.......
                        ..........c111111c.......c111111c.......
                        ..........cccccccc.......cccccccc.......
                        `)
                    pause(100)
                    platfomerguy.setImage(img`
                        ...........ffff1ddddddddddddd...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd69666666666d...........
                        ..........fffffcd96666666666d66.........
                        ..........fffffcd9666666666666..........
                        ..........fffffc99dddd6d54dd6...........
                        ...........ffffb9ccccccccc.66...........
                        ...............f9fffffffff.6............
                        ..............ff9cccccccff66.66.........
                        ..............fdd9ddddddd6666...........
                        ...........6..fdd9dddddd66f.............
                        ...........6..fdd9dddd66ddf....999......
                        ...........6.99dd9996699ddff..99........
                        ............6d99ddd6dddddddd99..........
                        ........9fff6dd9ff6ffffffffd9ffff.......
                        .......fc9cd6dd9f26d88d5adf99dddf.......
                        ......fcd9dd6dd9fff6ffffff99dddddf......
                        .....fcdd9fccdd9ddd6dddddd9ddddcffff....
                        ..22fdddf.9fccd96ddd6ddddddddccf........
                        .222fddf..9.ffc96dff6fffffddcff.........
                        22...ff..9...fc9d66d6dc9999999999.......
                        2....22..9...fcddd66d69ddfddcf...6......
                        .....22.9....fcdddf6c6cddfddcf.66.......
                        ....22.......9cdddf696cccfddd66.........
                        ...22........f9cddfd96dddfdd6f..........
                        .............fc9cdfd9c6dd666df..........
                        .............fcc9dffff66f6dddf..........
                        .........9...fccc9dddddddddddf.99.......
                        ..........9..fcccc9ddddddddddf.9........
                        ...........9cffffff99fffffffff9.........
                        ...........99dd9999999...cddd9dc........
                        ..........cc999ccc....999cccc9ccc.......
                        ..........cddddddc......9cddd9ddc.......
                        ..........cccccccc......9cccc9ccc.......
                        ..........cddddddc......9cddd9ddc.......
                        ..........cccccccc.......ccc99ccc.......
                        `)
                    pause(100)
                }
                controller.moveSprite(platfomerguy, 90, 0)
                info.changeLifeBy(-1)
                platfomerguy.vy = 0
                platfomerguy.vx = 0
                lazergunequiped = true
            }
        }
        if (num == 3) {
            lazergunequiped = false
            story.printText("what does the CIA triad stand for?", platfomerguy.x, platfomerguy.y)
            story.showPlayerChoices("Code Index Array", "Central intelligence Agency", "Cyber Intel Access", "Confidentiality Integrity Availability ")
            if (story.checkLastAnswer("Confidentiality Integrity Availability ")) {
                controller.moveSprite(platfomerguy, 90, 0)
                lazergunequiped = true
                tiles.setTileAt(tiles.getTileLocation(20, 20), assets.tile`transparency16`)
                tiles.setWallAt(tiles.getTileLocation(20, 20), false)
                tiles.setTileAt(tiles.getTileLocation(19, 20), assets.tile`transparency16`)
                tiles.setWallAt(tiles.getTileLocation(19, 20), false)
                tiles.setTileAt(tiles.getTileLocation(21, 20), assets.tile`transparency16`)
                tiles.setWallAt(tiles.getTileLocation(21, 20), false)
                story.cancelAllCutscenes()
            } else {
                lazergunequiped = false
                Faceingright = true
                controller.moveSprite(platfomerguy, 0, 0)
                platfomerguy.vy = 50
                platfomerguy.vx = 0
                for (let index = 0; index < 16; index++) {
                    platfomerguy.setImage(img`
                        ...........cccc11111111111111...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999661...........
                        ..........ccccc99999999996991...........
                        ..........ccc99c1999999966991...........
                        ..........cc9ccc6999999699991...........
                        ..........c9cccc1699996699991...........
                        ..........c9cccc1611116154111...........
                        ...........ccccdb6bbb6bbbb..............
                        ...............9cc6ccc6ccc..............
                        .......66.....cc9bb66666ccc.............
                        .........66...c119111111666.............
                        ...........6..c11911116111c.......66....
                        ...........66.c11191116111c.......6.....
                        ............66c11119161111cc.....6......
                        ............6166666916111111c....6......
                        ........c6cc6111cc666ccc6cc11cccc6......
                        .......cb6b16111c291881561c11111c6......
                        ......cb16116611cc9ccccc6cc1111166......
                        .....cb116cbb6111911111916111166cccc....
                        ..55c111c6.c66111911119916111bbc........
                        .555c11c.6..6cb191ccc99c9c61bcc.........
                        55...cc..6...cb191cdd9cd9c61bc..........
                        5....55..6.9.cb911cdddcdd916bc..........
                        .....55....99cb16666cccddc9166..6.......
                        ....55......99b611cd666ccc191c666.......
                        ...55........69b11cddc66dc119c..........
                        ......66.....6b9b1cddcd66c119c..........
                        ........6....c6b9999cccccc1196666.......
                        .........6...c66bb11111111699c..........
                        ..........66.cb66b11111116611c..........
                        ............66cc66ccccccc6ccccc.........
                        ...........c16611666666..611111c........
                        ..........cccc6ccc.......6ccccccc.......
                        ..........c111111c.......c111111c.......
                        ..........cccccccc.......cccccccc.......
                        ..........c111111c.......c111111c.......
                        ..........cccccccc.......cccccccc.......
                        `)
                    pause(100)
                    platfomerguy.setImage(img`
                        ...........ffff1ddddddddddddd...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd69666666666d...........
                        ..........fffffcd96666666666d66.........
                        ..........fffffcd9666666666666..........
                        ..........fffffc99dddd6d54dd6...........
                        ...........ffffb9ccccccccc.66...........
                        ...............f9fffffffff.6............
                        ..............ff9cccccccff66.66.........
                        ..............fdd9ddddddd6666...........
                        ...........6..fdd9dddddd66f.............
                        ...........6..fdd9dddd66ddf....999......
                        ...........6.99dd9996699ddff..99........
                        ............6d99ddd6dddddddd99..........
                        ........9fff6dd9ff6ffffffffd9ffff.......
                        .......fc9cd6dd9f26d88d5adf99dddf.......
                        ......fcd9dd6dd9fff6ffffff99dddddf......
                        .....fcdd9fccdd9ddd6dddddd9ddddcffff....
                        ..22fdddf.9fccd96ddd6ddddddddccf........
                        .222fddf..9.ffc96dff6fffffddcff.........
                        22...ff..9...fc9d66d6dc9999999999.......
                        2....22..9...fcddd66d69ddfddcf...6......
                        .....22.9....fcdddf6c6cddfddcf.66.......
                        ....22.......9cdddf696cccfddd66.........
                        ...22........f9cddfd96dddfdd6f..........
                        .............fc9cdfd9c6dd666df..........
                        .............fcc9dffff66f6dddf..........
                        .........9...fccc9dddddddddddf.99.......
                        ..........9..fcccc9ddddddddddf.9........
                        ...........9cffffff99fffffffff9.........
                        ...........99dd9999999...cddd9dc........
                        ..........cc999ccc....999cccc9ccc.......
                        ..........cddddddc......9cddd9ddc.......
                        ..........cccccccc......9cccc9ccc.......
                        ..........cddddddc......9cddd9ddc.......
                        ..........cccccccc.......ccc99ccc.......
                        `)
                    pause(100)
                }
                info.changeLifeBy(-1)
                controller.moveSprite(platfomerguy, 90, 0)
                platfomerguy.vy = 0
                platfomerguy.vx = 0
                lazergunequiped = true
            }
        }
        if (num == 4) {
            lazergunequiped = false
            story.printText("Always remain anonymous on the internet when gray hat hacking?", platfomerguy.x, platfomerguy.y)
            story.showPlayerChoices("True", "False")
            if (story.checkLastAnswer("True")) {
                controller.moveSprite(platfomerguy, 90, 0)
                lazergunequiped = true
                story.printText("Accepted, Transferring data...", platfomerguy.x, platfomerguy.y)
                story.cancelAllCutscenes()
                duckBoss()
            } else {
                lazergunequiped = false
                Faceingright = true
                controller.moveSprite(platfomerguy, 0, 0)
                platfomerguy.vy = 50
                platfomerguy.vx = 0
                for (let index = 0; index < 16; index++) {
                    platfomerguy.setImage(img`
                        ...........cccc11111111111111...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999991...........
                        ..........cccccc1999999999661...........
                        ..........ccccc99999999996991...........
                        ..........ccc99c1999999966991...........
                        ..........cc9ccc6999999699991...........
                        ..........c9cccc1699996699991...........
                        ..........c9cccc1611116154111...........
                        ...........ccccdb6bbb6bbbb..............
                        ...............9cc6ccc6ccc..............
                        .......66.....cc9bb66666ccc.............
                        .........66...c119111111666.............
                        ...........6..c11911116111c.......66....
                        ...........66.c11191116111c.......6.....
                        ............66c11119161111cc.....6......
                        ............6166666916111111c....6......
                        ........c6cc6111cc666ccc6cc11cccc6......
                        .......cb6b16111c291881561c11111c6......
                        ......cb16116611cc9ccccc6cc1111166......
                        .....cb116cbb6111911111916111166cccc....
                        ..55c111c6.c66111911119916111bbc........
                        .555c11c.6..6cb191ccc99c9c61bcc.........
                        55...cc..6...cb191cdd9cd9c61bc..........
                        5....55..6.9.cb911cdddcdd916bc..........
                        .....55....99cb16666cccddc9166..6.......
                        ....55......99b611cd666ccc191c666.......
                        ...55........69b11cddc66dc119c..........
                        ......66.....6b9b1cddcd66c119c..........
                        ........6....c6b9999cccccc1196666.......
                        .........6...c66bb11111111699c..........
                        ..........66.cb66b11111116611c..........
                        ............66cc66ccccccc6ccccc.........
                        ...........c16611666666..611111c........
                        ..........cccc6ccc.......6ccccccc.......
                        ..........c111111c.......c111111c.......
                        ..........cccccccc.......cccccccc.......
                        ..........c111111c.......c111111c.......
                        ..........cccccccc.......cccccccc.......
                        `)
                    pause(100)
                    platfomerguy.setImage(img`
                        ...........ffff1ddddddddddddd...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd66666666666d...........
                        ..........fffffcd69666666666d...........
                        ..........fffffcd96666666666d66.........
                        ..........fffffcd9666666666666..........
                        ..........fffffc99dddd6d54dd6...........
                        ...........ffffb9ccccccccc.66...........
                        ...............f9fffffffff.6............
                        ..............ff9cccccccff66.66.........
                        ..............fdd9ddddddd6666...........
                        ...........6..fdd9dddddd66f.............
                        ...........6..fdd9dddd66ddf....999......
                        ...........6.99dd9996699ddff..99........
                        ............6d99ddd6dddddddd99..........
                        ........9fff6dd9ff6ffffffffd9ffff.......
                        .......fc9cd6dd9f26d88d5adf99dddf.......
                        ......fcd9dd6dd9fff6ffffff99dddddf......
                        .....fcdd9fccdd9ddd6dddddd9ddddcffff....
                        ..22fdddf.9fccd96ddd6ddddddddccf........
                        .222fddf..9.ffc96dff6fffffddcff.........
                        22...ff..9...fc9d66d6dc9999999999.......
                        2....22..9...fcddd66d69ddfddcf...6......
                        .....22.9....fcdddf6c6cddfddcf.66.......
                        ....22.......9cdddf696cccfddd66.........
                        ...22........f9cddfd96dddfdd6f..........
                        .............fc9cdfd9c6dd666df..........
                        .............fcc9dffff66f6dddf..........
                        .........9...fccc9dddddddddddf.99.......
                        ..........9..fcccc9ddddddddddf.9........
                        ...........9cffffff99fffffffff9.........
                        ...........99dd9999999...cddd9dc........
                        ..........cc999ccc....999cccc9ccc.......
                        ..........cddddddc......9cddd9ddc.......
                        ..........cccccccc......9cccc9ccc.......
                        ..........cddddddc......9cddd9ddc.......
                        ..........cccccccc.......ccc99ccc.......
                        `)
                    pause(100)
                }
                info.changeLifeBy(-1)
                controller.moveSprite(platfomerguy, 90, 0)
                platfomerguy.vy = 0
                platfomerguy.vx = 0
                lazergunequiped = true
            }
        }
    })
}
function duckBoss () {
    tiles.setTileAt(tiles.getTileLocation(1, 4), assets.tile`transparency16`)
    evilDuckBoss = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . f 1 f 1 f f 1 f 1 f . . . 
        . . . f 1 1 1 f f 1 1 1 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f 1 f f f f f f 1 f . . . 
        . . . f f 1 1 1 1 1 1 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Player)
    evilDuckBoss.sayText("Thats my data!", 5000, true)
    tiles.placeOnTile(evilDuckBoss, tiles.getTileLocation(10, 13))
    scene.cameraFollowSprite(evilDuckBoss)
    for (let value of tiles.getTilesByType(assets.tile`myTile53`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.setWallAt(value, false)
    }
    platfomerguy.vy = 200
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnTile(platfomerguy, tiles.getTileLocation(2, 9))
    scene.cameraFollowSprite(platfomerguy)
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        drone = sprites.create(img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ................
            ................
            ................
            ................
            ................
            `, SpriteKind.Enemy)
        drone.setBounceOnWall(true)
        animation.runImageAnimation(
        drone,
        [img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ..737......737..
            ...7........7...
            ................
            ................
            ................
            `,img`
            ....ffffffff....
            ...f33333333f...
            .f.f33ffff33f.f.
            .fff3f7777f3fff.
            .f.f3f7777f3f.f.
            ...f33ffff33f...
            .dddf333333fddd.
            .ddddffffffdddd.
            .dfff333333fffd.
            .df3333333333fd.
            .df3333333333fd.
            .df3f333333f3fd.
            .dfff33ff33fffd.
            .ddddffddffdddd.
            ..555......555..
            ..737......737..
            ..737......737..
            ...7........7...
            ................
            ................
            `],
        200,
        true
        )
        drone.vx = 30
        tiles.placeOnTile(drone, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile17`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(4, 21), assets.tile`myTile13`)
    tiles.setWallAt(tiles.getTileLocation(4, 21), true)
    tiles.setTileAt(location, assets.tile`transparency16`)
    platfomerguy.sayText("I can break this wall with a laser shot, I just need to charge my blaster", 7000, true)
})
function CLICKER_MININIGAME () {
    MouseSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . . f 1 f . . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 1 f . . . . . . . . . 
        . . f 1 1 1 f f . . . . . . . . 
        . . f 1 1 1 1 1 f . . . . . . . 
        . . f 1 1 1 1 1 1 f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . . f f f 1 1 1 f f f . . . . . 
        . . . . f 1 1 f . . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Mouse)
    MouseSprite.z = 5
    MouseSprite.setPosition(134, 100)
    controller.moveSprite(MouseSprite, 50, 50)
    scene.setBackgroundColor(9)
    clickerMinigame = true
    info.startCountdown(20)
    popupImageList = [
    img`
        ffffffffffffffffffffffffffffff
        f1111111111111111111111111111f
        f1333133311333313333111111111f
        f1311131131311113111111111111f
        f1331133311333113331111111111f
        f1311133111311113111111111111f
        f1311131311333313333111111111f
        f1111111111111111111111111111f
        f1131113111111311131333313131f
        f1133133113311331131311113131f
        f1131313131131313131333111311f
        f1131113131131311331311111311f
        f1131113113311311131333311311f
        f1131113111111111111111111111f
        f1111111111111111111111111111f
        ffffffffffffffffffffffffffffff
        `,
    img`
        fffffffffffffffffffffffffffffffffffffff
        f2211122111221112211122111221111111111f
        f1211211212112121121211212112112112111f
        f1211211212112121121211212112122212221f
        f1211211212112121121211212112112112112f
        f2221122111221112211122111221112112112f
        f1111111111111111111111111111111111111f
        f1111111111111111111111111111111111111f
        f1111111111111111111111111111111111111f
        f1222111111222122211111121112122221222f
        f2111121121211112111221122122121111212f
        f2111121121222112112112121212122211221f
        f2111121121112112112112121112121111212f
        f2111121121222112111221121112122221212f
        f1222112211111112111111111111111111111f
        fffffffffffffffffffffffffffffffffffffff
        `,
    img`
        f f f f f f f f f f f f f f f f f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 9 9 9 1 9 1 9 1 9 9 9 1 9 1 1 1 f 
        f 9 1 1 1 9 1 1 1 9 1 1 1 9 1 9 1 f 
        f 9 1 1 1 9 1 9 1 9 1 1 1 9 9 1 1 f 
        f 9 9 9 1 9 1 9 1 9 9 9 1 9 1 9 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 9 1 1 9 1 9 9 9 1 9 9 1 1 9 9 9 f 
        f 9 1 1 9 1 9 1 1 1 9 1 9 1 9 1 1 f 
        f 9 9 9 9 1 9 9 1 1 9 9 1 1 9 9 1 f 
        f 9 1 1 9 1 9 1 1 1 9 1 9 1 9 1 1 f 
        f 9 1 1 9 1 9 9 9 1 9 1 9 1 9 9 9 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f f f f f f f f f f f f f f f f f 
        `,
    img`
        ffffffffffffffffffffffffffffffffffff
        f7117117711777717117177771777111771f
        f7117171171711117171171111711717117f
        f7777177771711117711177711711711117f
        f7117171171711117171171111711711171f
        f7117171171777717117177771777111111f
        f1111111111111111111111111111111171f
        f1111111111111111111111111111111111f
        f1111111111111111111111122212211222f
        f1222121212221211112112121112121211f
        f1211121112111212112222122112211221f
        f1211121212111221112112121112121211f
        f1222121212221212112112122212121222f
        f1111111111111111111111111111111111f
        f1111111111111111111111111111111111f
        ffffffffffffffffffffffffffffffffffff
        `,
    img`
        f f f f f f f f f f f f f f f f 
        f 1 a a a 1 1 1 1 1 1 1 1 1 1 f 
        f 1 a 1 1 a 1 a 1 1 a 1 a 1 a f 
        f 1 a a a 1 1 a 1 1 a 1 1 a 1 f 
        f 1 a 1 1 a 1 a 1 1 a 1 1 a 1 f 
        f 1 a a a 1 1 1 a a 1 1 1 a 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f a 1 1 a 1 1 1 1 1 1 1 1 1 1 f 
        f a 1 1 a 1 1 a a 1 1 a 1 a 1 a 
        f a a 1 a 1 a 1 1 a 1 a a a a a 
        f a 1 a a 1 a 1 1 a 1 1 a 1 a f 
        f a 1 1 a 1 1 a a 1 1 1 a 1 a f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f f f f f f f f f f f f f f f 
        `,
    img`
        fffffffffffffffffffffffff
        f11111111111111111111111f
        f15551151151511515111111f
        f51115155151511151111111f
        f51115151551511151111111f
        f51115151151551151111111f
        f15551111111111111111111f
        f11111111111111111111111f
        f11111111111111111111111f
        f11111111111111555155511f
        f11115511551111515151511f
        f11111511115111555155511f
        f11111511151111115111511f
        f11115551555151115111511f
        f11111111111111111111111f
        fffffffffffffffffffffffff
        `,
    img`
        ffffffffffffffffffff
        f111111111111111111f
        f111111111111111111f
        f1111ffffffffff1111f
        f111ffffffffffff111f
        f111ffffffffffff111f
        f112222222222222211f
        f1ffffffffffffffff1f
        f11124d521d5b55b111f
        f111c445221b55db111f
        f11b4444b2d555bdbb1f
        f1b4444445b55dcddb1f
        f11b5555555bccdddc1f
        f11b5555555dddddbc1f
        f11bd55555ddddddc11f
        f111bb555dddddbc111f
        f1111bbcccccccc1111f
        f111111111111111111f
        f111111111111111111f
        ffffffffffffffffffff
        `,
    img`
        f f f f f f f f f f f f f f f f f f f 
        f 2 2 2 1 4 4 1 1 5 5 5 1 7 7 7 1 1 f 
        f 2 1 1 1 4 1 4 1 5 1 1 1 7 1 1 1 1 f 
        f 2 2 1 1 4 4 1 1 5 5 1 1 7 7 1 1 1 f 
        f 2 1 1 1 4 4 1 1 5 1 1 1 7 1 1 1 1 f 
        f 2 1 1 1 4 1 4 1 5 5 5 1 7 7 7 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 9 9 9 1 8 8 1 1 a 1 1 2 2 1 1 4 1 f 
        f 1 9 1 1 8 1 8 1 1 1 2 1 1 2 1 4 1 f 
        f 1 9 1 1 8 8 1 1 a 1 2 2 2 2 1 4 1 f 
        f 1 9 1 1 8 8 1 1 a 1 2 1 1 2 1 4 1 f 
        f 1 9 1 1 8 1 8 1 a 1 2 1 1 2 1 4 4 f 
        f f f f f f f f f f f f f f f f f f f 
        `
    ]
}
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile12`, function (sprite, location) {
    platfomerguy.sayText("press B to interact", 1000, false)
    if (controller.B.isPressed()) {
        controller.moveSprite(platfomerguy, 0, 0)
        queston(1)
    }
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile20`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Mouse, SpriteKind.powerButton, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        reallife(2)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.whiteHat, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        realplayerwalking = false
        animation.stopAnimation(animation.AnimationTypes.All, playerspritereal)
        playerspritereal.setImage(img`
            . . . f f f f f . . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f . . 
            f c f f c c f f f c c . . 
            f c c f f f f e f f f . . 
            f f f f f f f e e f f . . 
            f f e e f b f e e f f . . 
            . f e b e 1 f b b f . . . 
            . f f f e b b b b f . . . 
            . . f e e e e e f f . . . 
            . . e 4 4 e b b b f . . . 
            . . e 4 4 e b b b f . . . 
            . . f e e f c c c f . . . 
            . . . f f f f f f . . . . 
            . . . . f f f . . . . . . 
            `)
        googleWorker.setImage(img`
            . 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . 9 9 9 9 9 9 9 9 9 9 9 9 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . f f e e f b e e e e f f . 
            . . f f e f 1 e e e e f . . 
            . . . f e e e e e f f f . . 
            . . . f e e e e e e f . . . 
            . . . f 1 1 1 e d d 4 . . . 
            . . . f 1 1 1 e d d e . . . 
            . . . f 6 6 6 f e e f . . . 
            . . . . f f f f f f . . . . 
            . . . . . . f f f . . . . . 
            `)
        controller.moveSprite(playerspritereal, 0, 0)
        tiles.placeOnTile(playerspritereal, tiles.getTileLocation(4, 12))
        playerspritereal.sayText("My computer was infected with ransomware.", 3000, true)
        pause(3000)
        googleWorker.sayText("What part of the CIA triad did the hacker break")
        pause(5000)
        story.showPlayerChoices("Confidentaillity", "Integrity", "Availability", "All of the above", "Integrity and Availability")
        if (story.checkLastAnswer("All of the above")) {
            googleWorker.sayText("Good thing you came to us.", 2000, true)
            pause(2000)
            googleWorker.sayText("I'll fix it for 75$", 2000, true)
            pause(2000)
            playerspritereal.sayText("I can afford that, I just got 10,000$", 3000, true)
            pause(3000)
            googleWorker.sayText("Ok, I'll fix your computer...", 5000, true)
            pause(5000)
            sprites.destroyAllSpritesOfKind(SpriteKind.Player)
            sprites.destroyAllSpritesOfKind(SpriteKind.whiteHat)
            scene.centerCameraAt(0, 0)
            tiles.setCurrentTilemap(tilemap`level13`)
            scene.setBackgroundImage(img`
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55b22222222222222222
                22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bbbbbb22222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55555bb2222222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555bbbbb222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b55555555b5db222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222f4d5f1d5b55b2222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222c445ff1b55db2222222222
                22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b4444bfd555bdbb22222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b4444445b55dcddb22222222
                22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555bccdddc22222222
                22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222b5555555dddddbc22222222
                22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bd55555ddddddc222222222
                222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bb555dddddbc2222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222bbcccccccc22222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                22222222222222222222222ff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                22222222222222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222222ff22222222222222222f222222222222222222222222222222222fff22222222222222222222222222222222222222222222222222222222222222222222222222222222222
                22222222222222222222f2222222222222222222f22222222222222222222222222222222f222fffff222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222ff22222222222222222222f22222222222222222222222222222222f22222222f22222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222f222222222222222222222f2222222222222222222222222222222f222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222ff2222222222222222222222f22222222222222222222222f2222222f2222222222f2222222222222222222222222222f22222222222222222222222222222222222222222222222
                2222222222222222f22222222222222222222222222222222222222222222222f2222222f22222222222f222222222222222222222222222ff2222222222222222222222222222222222222222222222
                2222222222222222f22222222222222222222222222222222222222222222222f2222222f22222222222f22222222222222222222f22222f2ff222222222222222222222222222222222222222222222
                222222222222222f222222222222222222222222222222222222222222222222f2222222f22222222222ff2222222222222222222f22222f22f222222222222222222222222222222222222222222222
                222222222222222f222222222222222222222222222222222222222222222222f2222222f222222222222f2222222222222222222f2222f2222f22222222222222222222222222222222222222222222
                222222222222222f22222222222222222222222222222222222f22222222222f22222222f222222222222f2222222222222222222f2222f2222f222222fff222222222222ff222222222222222222222
                22222222222222f222222222222222222222222222222222222ff2222222222f22222222f22222222222ff2222222222222222222f222f22222f222222f2f22222222222fff222222222222222222222
                22222222222222f2222222222222222222222222222222222222f222222222f222222222f22222222222f22222222222222222222f222f222222f2222f22f222222222ff22f222222222222222222222
                2222222222222f22222222222222222222222222222222222222f222222222f222222222f22222222222f22222222222222222222f222f222222f222f222f22222222f2222f222222222222222222222
                2222222222222f22222222222222222222222222222222222222f222222222f222222222f2222222222f222222222222222222222f22f2222222f22f2222f2222222f2222f2222222222222222222222
                2222222222222f22222222222222222222222222222222222222f222222222f222222222f222222222ff222222222222222222222f22f2222222f22f22222f222222f2222f2222222222222222222222
                2222222222222f22222222222222222222222222f222222222222f2222222f2222222222f22222ffff22222222222222222222222f2f222222222ff222222f222222f222ff2222222222222222222222
                222222222222f222222222222222222222222222f222222222222f222222f22222222222f2222f222222222222222222222222222f2f222222222ff222222f222222f2ff222222222222222222222222
                222222222222f222222222222222222222222222f222222222222f222222f22222222222f22222222222222222222222222222222f2f22222222222222222f222222f222222222222222222222222222
                222222222222f2222222222222222222222222222f22222222222f222222f22222222222f22222222222222222222222222222222f2f22222222222222222f222222f222222222222222222222222222
                222222222222f2222222222222222222222222222f22222222222f22222f222222222222f22222222222222222222222222222222fff22222222222222222f222222ff22222222222222222222222222
                222222222222f22222222222222fffff222222222f22222222222f22222f222222222222f222222222222222222222222222222222ff22222222222222222f22222222ff222222222222222222222222
                222222222222f222222222fffff2222ff22222222f22222222222f2222f2222222222222ff22222222222222222222222222222222ff2222222222222222222222222222fffffff222222ff222222222
                222222222222f222222222f222222222ff2222222f22222222222f222f222222222222222ff2222222222222222222222222222222f222222222222222222222222222222222222ffffffff222222222
                222222222222f2222222222222222222ff2222222f222222222222f22f2222222222222222f2222222222222222222222222222222f22222222222222222222222222222222222222222222222222222
                222222222222f222222222222222222ff22222222f222222222222f22f22222222222222222ff22222222222222222222222222222f22222222222222222222222222222222222222222222222222222
                222222222222f222222222222222222f222222222f222222222222f22f2222222222222222222ff2222222fffffff2222222222222222222222222222222222222222222222222222222222222222222
                222222222222f222222222222222222f222222222f222222222222f2f2222222222222222222222fffffff22222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222f22222222222222222f2222222222f222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222f22222222222222222f2222222222f222222222222f222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222f22222222222222222f2222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222f2222222222222222f22222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222f2222222222222222f22222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222f222222222222222f222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222ff22222222222222f222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222ff222222222222ff22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222fff222222ffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222222222222ffffff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                2222222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                222222222f2222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                22222222ffffffffffffff222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                22222fff2f2222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                22222f222f2222f22222222222ffffff22222222222222222222222222222222222222222222222222fffff2222222222222222222222222222222222222222222222222222222222222222222222222
                22222f222f2222f2222222222f222222fffffff2222222222222222222222222222222222222222222f2222fff2222222222222222222222222222222222222222222222222222222222222222222222
                22222f222f22222f22222222222222222222222ffff2222222222222222222222222222222222222222f22222ffff2222222222222222222222222222222222222222222222222222222222222222222
                22222f222f22222f222222222222222222222222222ff22222222222222222222222222222222222222f222222222f222222222222222222222222222222222222222222222222222222222222222222
                22222ff22f22222f2222222222222222222222222222f2222222222222222222222222222222222222f22222222222f22222222222222222222222222222222222222222222222222222222222222222
                222222f22f22222f22222222222222222222222222222f22222222222222222222ff22222222222222f222222222222ff222222222222222222222222222222222222222222222222222222222222222
                2222222f2f22222f22222222222222222222222222222f2222222222222222222f2fff222222222222f22222222222222f22222222222222222222222222222222222222222222222222222222222222
                22222222ff22222f22222222222222222222222222222f222222222222222222ff2222f2222222222f2222222222222222ff222222222222222222222222222222222222222222222222222222222222
                222222222fff222f22222222222222222222222222222f22222222222222222f222222ff222222222f22222222222222222f222222222222222222222222222222222222222222222222222222222222
                222222222f22ff2f22222222222222222222222222222f2222222222222222f22222222f22222222f2222222222222222222f22222222222222222222222222222222222222222222222222222222222
                222222222f2222ff2222222222222222222222222222ff222222222222222f222222222f22222222f22222222222222222222f2222222222222222222222222222222222222222222222222222222222
                222222222f22222ff222222222222222222222222222f222222222222222f22222222222f222222f2222222222222222222222f222222222222222222222222222222222222222222222222222222222
                222222222f2222f2f22222222222222222222222222f2222222222222222f22222222222f22222f22222222222222222222222f222222222222222222222222222222222222222222222222222222222
                222222222f2222f2f2222222222222222222222222f2222222222222222f222222222222ff2222f222222222222222222222222f22222222222222222222222222222222222222222222222222222222
                222222222f2222f2f222222222222222222222222f22222222222222222f2222222222222f2222f2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
                222222222f2222f2f22222222222222222222222f222222222222222222f2222222222222f222ff2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
                222222222f2222f2f222222222222222222222ff2222222222222222222f2222222222222f222f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
                222222222f2222f2f2222222222222222222222fffff222222222222222f22222222222222f22f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
                222222222f22222f2222222222222222222222222222ffff22222222222f22222222222222f22f22222222222222222222222222f2222222222222222222222222222222222222222222222222222222
                222222222f22222f2222222222222222222222222222222f22222222222f22222222222222f222f2222222222222222222222222f2222222222222222222222222222222222222222222222222222222
                222222222f22222f222222222222222222222222222222ff22222222222f22222222222222f222f222222222222222222222222ff2222222222222222222222222222222222222222222222222222222
                222222222f2222ff222222222222222222222222222222f2222222222222f2222222222222f222ff2222222222222222222222ff22222222222222222222222222222222222222222222222222222222
                222222222f222fff22222222222222222222222222222ff22222222222222f222222222222f2222f22222222222222222222ff2222222222222222222222222222222222222222222222222222222222
                ffff22222fffff2f2222222222222222222222222222ff2222222222222222f22222222222f22222f222222222222222222f222222222222222222222222222222222222222222222222222222222222
                2222ffffff22222f222222222222222222222222ffff2222222222222222222f222222222ff222222f222222222222222ff2222222222222222222222222222222222222222222222222222222222222
                222222222f22222f222222222222222222222fff222222222222222222222222fffffffff222222222ff222222222222f222222222222222222222222222222222222222222222222222222222222222
                222222222f22222f22222222222222222222222222222222222222222222222222222222222222222222ff222222222f2222222222222222222222222222222222222222222222222222222222222222
                22222222222222222222222222222222222222222222222222222222222222222222222222222222222222ff22222ff22222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffff2222222222222222222222222222222222222222222222222222222222222222222
                2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                `)
            story.printText("A few hours later...", 75, 0, 1, 15, story.TextSpeed.VerySlow)
            unhack()
        } else {
            game.gameOver(false)
        }
    }
    googleWorker.sayText("Press B to interact", 100, false)
})
function Load_In () {
    loading = 0
    loadingsprite = textsprite.create("Loading " + convertToText(loading) + "%")
    while (loading != 100) {
        pause(randint(9, 100))
        loading += 1
        loadingsprite.setText("Loading " + convertToText(loading) + "%")
    }
    loadingsprite.setOutline(1, 7)
    pause(1000)
    loadingsprite.setText("")
    pause(1000)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999992222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999992222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999992222222222999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9992222222255555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9992222222255555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2222222211111155555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2222222211111155555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2222222211111155555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2222221199999911555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2222221199999911555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2227771199999911555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2227771199999911555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        2227771199999911555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        7777777711111155555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        7777777711111155555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        7777777755555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        7777777755555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        7777777755555555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9997777755555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9997777755555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    GmailSpriteicon = sprites.create(img`
        11111111111111111111111
        11ff111111111111111ff11
        1f22ff11111111111ff22f1
        1f2222ff1111111ff2222f1
        1ff22222ff111ff22222ff1
        1f2ff22222f1f22222ff2f1
        1f22fff2222f2222fff22f1
        1f22f11ff22222ff11f22f1
        1f22f1111f222f1111f22f1
        1f22f111ddfffdd111f22f1
        1f22f11ddddddddd11f22f1
        1f22f1ddddddddddd1f22f1
        1f22fdddddddddddddf22f1
        11ffdddddddddddddddff11
        11111111111111111111111
        11111111111111111111111
        `, SpriteKind.Gmail)
    GmailSpriteicon.setPosition(10, 24)
    MouseSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . . f 1 f . . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 f . . . . . . . . . . 
        . . f 1 1 1 f . . . . . . . . . 
        . . f 1 1 1 f f . . . . . . . . 
        . . f 1 1 1 1 1 f . . . . . . . 
        . . f 1 1 1 1 1 1 f . . . . . . 
        . . f 1 1 1 1 1 1 1 f . . . . . 
        . . f f f 1 1 1 f f f . . . . . 
        . . . . f 1 1 f . . . . . . . . 
        . . . . . f 1 1 f . . . . . . . 
        . . . . . f 1 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Mouse)
    MouseSprite.z = 5
    MouseSprite.setPosition(134, 100)
    controller.moveSprite(MouseSprite, 50, 50)
    story.printText("I will look in my email now", 75, 100, 2)
}
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile28`, function (sprite, location) {
    platfomerguy.sayText("press B to interact", 1000, false)
    if (controller.B.isPressed()) {
        controller.moveSprite(platfomerguy, 0, 0)
        lazergunequiped = false
        tiles.placeOnTile(platfomerguy, tiles.getTileLocation(2, 23))
        color.startFade(color.Black, color.originalPalette)
        scene.setBackgroundImage(img`
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            `)
        tiles.setCurrentTilemap(tilemap`level7`)
        redsolid = false
        for (let value of tiles.getTilesByType(assets.tile`myTile38`)) {
            drone = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . f f . . f f . . . . . 
                . . . . f 6 6 f f 6 6 f . . . . 
                . 9 . f 6 6 6 f f 6 6 6 f . 9 . 
                . f . f 6 6 6 f f 6 6 6 f . f . 
                . f f f 6 6 f 9 9 f 6 6 f f f . 
                . . . f 6 6 f f f f 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . . f 6 6 6 6 6 6 f . . . . 
                . . . . . f f f f f f . . . . . 
                . . f f f 6 6 9 9 6 6 f f f . . 
                . . f 6 6 f f f f f f 6 6 f . . 
                . . f 6 f 6 6 6 6 6 6 f 6 f . . 
                . . f 6 f 6 6 6 6 6 6 f 6 f . . 
                . . f f f 6 6 f f 6 6 f f f . . 
                . . . . . f f . . f f . . . . . 
                `, SpriteKind.Booth)
            tiles.placeOnTile(drone, value)
        }
        bluezone = true
        lazergunequiped = true
        controller.moveSprite(platfomerguy, 90, 0)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile15`, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile18`)) {
        tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
        tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Top), false)
    }
    if (tiles.tileAtLocationEquals(location.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile18`)) {
        tiles.setTileAt(location.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(location.getNeighboringLocation(CollisionDirection.Bottom), false)
    }
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setWallAt(location, false)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.VR, function (sprite, otherSprite) {
    playerspritereal.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 7 1 1 1 1 1 1 1 7 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f f f f f f f f f f f f f f . 
        . . . f e 4 4 4 4 4 4 e f . . . 
        . f . f f f e e e e f f f . f . 
        f 1 f e f b d d d d b f e f 1 f 
        f 1 1 f f d d d d d d f f 1 1 f 
        f 1 f e f c c c c c c f e f 1 f 
        . f . . . f f f f f f . . . f . 
        . . . . . f f . . f f . . . . . 
        `)
    controller.moveSprite(playerspritereal, 0, 0)
    animation.stopAnimation(animation.AnimationTypes.All, playerspritereal)
    realplayerwalking = false
    sprites.destroy(otherSprite)
    pause(2000)
    playerspritereal.setPosition(76, 60)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    playerspritereal.setStayInScreen(false)
    for (let index = 0; index <= 40; index++) {
        playerspritereal.setScale(index, ScaleAnchor.Middle)
        pause(index + 50)
    }
    for (let index = 0; index < 10; index++) {
        pause(100)
        playerspritereal.changeScale(1, ScaleAnchor.Middle)
    }
    playerspritereal.setFlag(SpriteFlag.Invisible, true)
    realplayerwalking = false
    pause(2000)
    blockSettings.writeNumber("Part", 2)
    game.reset()
})
scene.onOverlapTile(SpriteKind.VRPLAYER, assets.tile`myTile52`, function (sprite, location) {
    platfomerguy.sayText("press B to interact", 1000, false)
    if (controller.B.isPressed()) {
        controller.moveSprite(platfomerguy, 0, 0)
        queston(4)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.VRPLAYER, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    lazergunequiped = false
    Faceingright = true
    controller.moveSprite(platfomerguy, 0, 0)
    platfomerguy.vy = 50
    platfomerguy.startEffect(effects.spray)
    platfomerguy.vx = 0
    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
    for (let index = 0; index < 10; index++) {
        platfomerguy.setImage(img`
            ...........cccc11111111111111...........
            ..........cccccc1999999999991...........
            ..........cccccc1999999999991...........
            ..........cccccc1999999999991...........
            ..........cccccc1999999999661...........
            ..........ccccc99999999996991...........
            ..........ccc99c1999999966991...........
            ..........cc9ccc6999999699991...........
            ..........c9cccc1699996699991...........
            ..........c9cccc1611116154111...........
            ...........ccccdb6bbb6bbbb..............
            ...............9cc6ccc6ccc..............
            .......66.....cc9bb66666ccc.............
            .........66...c119111111666.............
            ...........6..c11911116111c.......66....
            ...........66.c11191116111c.......6.....
            ............66c11119161111cc.....6......
            ............6166666916111111c....6......
            ........c6cc6111cc666ccc6cc11cccc6......
            .......cb6b16111c291881561c11111c6......
            ......cb16116611cc9ccccc6cc1111166......
            .....cb116cbb6111911111916111166cccc....
            ..55c111c6.c66111911119916111bbc........
            .555c11c.6..6cb191ccc99c9c61bcc.........
            55...cc..6...cb191cdd9cd9c61bc..........
            5....55..6.9.cb911cdddcdd916bc..........
            .....55....99cb16666cccddc9166..6.......
            ....55......99b611cd666ccc191c666.......
            ...55........69b11cddc66dc119c..........
            ......66.....6b9b1cddcd66c119c..........
            ........6....c6b9999cccccc1196666.......
            .........6...c66bb11111111699c..........
            ..........66.cb66b11111116611c..........
            ............66cc66ccccccc6ccccc.........
            ...........c16611666666..611111c........
            ..........cccc6ccc.......6ccccccc.......
            ..........c111111c.......c111111c.......
            ..........cccccccc.......cccccccc.......
            ..........c111111c.......c111111c.......
            ..........cccccccc.......cccccccc.......
            `)
        pause(100)
        platfomerguy.setImage(img`
            ...........ffff1ddddddddddddd...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd66666666666d...........
            ..........fffffcd69666666666d...........
            ..........fffffcd96666666666d66.........
            ..........fffffcd9666666666666..........
            ..........fffffc99dddd6d54dd6...........
            ...........ffffb9ccccccccc.66...........
            ...............f9fffffffff.6............
            ..............ff9cccccccff66.66.........
            ..............fdd9ddddddd6666...........
            ...........6..fdd9dddddd66f.............
            ...........6..fdd9dddd66ddf....999......
            ...........6.99dd9996699ddff..99........
            ............6d99ddd6dddddddd99..........
            ........9fff6dd9ff6ffffffffd9ffff.......
            .......fc9cd6dd9f26d88d5adf99dddf.......
            ......fcd9dd6dd9fff6ffffff99dddddf......
            .....fcdd9fccdd9ddd6dddddd9ddddcffff....
            ..22fdddf.9fccd96ddd6ddddddddccf........
            .222fddf..9.ffc96dff6fffffddcff.........
            22...ff..9...fc9d66d6dc9999999999.......
            2....22..9...fcddd66d69ddfddcf...6......
            .....22.9....fcdddf6c6cddfddcf.66.......
            ....22.......9cdddf696cccfddd66.........
            ...22........f9cddfd96dddfdd6f..........
            .............fc9cdfd9c6dd666df..........
            .............fcc9dffff66f6dddf..........
            .........9...fccc9dddddddddddf.99.......
            ..........9..fcccc9ddddddddddf.9........
            ...........9cffffff99fffffffff9.........
            ...........99dd9999999...cddd9dc........
            ..........cc999ccc....999cccc9ccc.......
            ..........cddddddc......9cddd9ddc.......
            ..........cccccccc......9cccc9ccc.......
            ..........cddddddc......9cddd9ddc.......
            ..........cccccccc.......ccc99ccc.......
            `)
        pause(100)
    }
    info.changeLifeBy(-1)
    effects.clearParticles(platfomerguy)
    controller.moveSprite(platfomerguy, 90, 0)
    platfomerguy.vy = 0
    platfomerguy.vx = 0
    lazergunequiped = true
})
function unhack () {
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        11ff111111111111111ff1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f22ff11111111111ff22f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f2222ff1111111ff2222f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1ff22222ff111ff22222ff199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f2ff22222f1f22222ff2f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f22fff2222f2222fff22f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f22f11ff22222ff11f22f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f22f1111f222f1111f22f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f22f111ddfffdd111f22f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f22f11ddddddddd11f22f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f22f1ddddddddddd1f22f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1f22fdddddddddddddf22f199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        11ffdddddddddddddddff1199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999222222222299999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999222222225555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999222222225555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9222222221111115555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9222222221111115555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9222222221111115555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9222222119999991155555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9222222119999991155555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9222777119999991155555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9222777119999991155555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9222777119999991155555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9777777771111115555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9777777771111115555555999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9777777775555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9777777775555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9777777775555555555599999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999777775555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999777775555559999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f99999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ff9999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f1f999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f11f99999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f11f99999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f111f9999999999999999999999
        ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f111ff999999999999999999999
        f11111122111111f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f11111f99999999999999999999
        f11111122111111f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f111111f9999999999999999999
        f11112122121111f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f1111111f999999999999999999
        f11121122112111f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fff111fff999999999999999999
        f11211111111211f99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f11f999999999999999999999
        f11211111111211f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f11f99999999999999999999
        f11211111111211f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f1f999999999999999999999
        f11121111112111f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999
        f11112222221111f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        f11111111111111f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        f11221122212221f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        f12112121112111f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        f12112122112211f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        f11221121112111f999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `)
    story.printText("You defeated a hacker, ", 75, 0, 8, 9, story.TextSpeed.Normal)
    story.printText("learned how to not fall for scams,", 75, 0, 8, 9, story.TextSpeed.Normal)
    story.printText("and made money off a bug bounty!", 75, 0, 8, 9, story.TextSpeed.Normal)
    story.printText("but do you remember your password?", 75, 0, 8, 9, story.TextSpeed.Normal)
    if (convertToText(blockSettings.readString("Password")) == game.askForString("Your Password", 24)) {
        story.printText("You won! Your total time was " + convertToText(blockSettings.readNumber("Time")) + " Seconds", 75, 0, 8, 9, story.TextSpeed.Normal)
        blockSettings.clear()
        game.gameOver(true)
    } else {
        game.gameOver(false)
    }
}
function emaillogincomplete () {
    story.printText("security questions complete", 75, 25, 7)
    sprites.destroyAllSpritesOfKind(SpriteKind.Gmail)
    controller.moveSprite(MouseSprite, 50, 50)
    scene.setBackgroundImage(img`
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    fredEmailSprite = sprites.create(img`
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        111111151111fff1fff11fff1ff11d11d1d1111ddd1ddd1d1ddd11ddd1ddd1
        199915555511f111f11f1f111f1f1d11d1111111d111d11d1d1111d111d111
        199911555111fff1fff11fff1f1f1dddd1d11111d111d1111ddd11ddd1ddd1
        199915555511f111ff111f111f1f1d11d1d11111d111d111111d11d111dd11
        111115111511f111f1f11f111f1f1d11d1d11d11d111d111111d11d111d1d1
        111111111111f111f1f11fff1ff11d11d1d1dd1ddd11d1111ddd11d111d1d1
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Email1)
    fredEmailSprite.setPosition(31, 8)
    phishingemailsprite = sprites.create(img`
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        111111151111f11f11f11fff11fff1f11f1fff11ff111ff111d111d11dd11d
        199915555511f11f1f1f11f111f111f11f1f111f11f1f11f11d111d1d11d1d
        199911555111ff1f1f1f11f111fff1f11f1fff1111f1111f11d1d1d1d11d1d
        199915555511f1ff1f1f11f11111f1f11f111f111f1111f111d1d1d1d11d1d
        111115111511f11f1f1f11f11111f1f11f111f11f1111f1111d1d1d1d11d1d
        111111111111f11f11f111f111fff1ffff1fff1ffff1ffff11ddddd11dd11d
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        11111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.Email2)
    phishingemailsprite.setPosition(31, 35)
}
sprites.onOverlap(SpriteKind.Mouse, SpriteKind.Email1, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        bugbontyreadd = true
        sprites.destroyAllSpritesOfKind(SpriteKind.phish)
        sprites.destroyAllSpritesOfKind(SpriteKind.Text)
        fredemail = textsprite.create("Hi, its Fred.", 1, 15)
        fredemail.setPosition(120, 10)
        fredemail = textsprite.create("Just wanted to", 1, 15)
        fredemail.setPosition(120, 20)
        fredemail = textsprite.create("let you know", 1, 15)
        fredemail.setPosition(120, 30)
        fredemail = textsprite.create("that google is", 1, 15)
        fredemail.setPosition(120, 40)
        fredemail = textsprite.create("doing a bug", 1, 15)
        fredemail.setPosition(120, 50)
        fredemail = textsprite.create("bounty with", 1, 15)
        fredemail.setPosition(120, 60)
        fredemail = textsprite.create("prizes up to", 1, 15)
        fredemail.setPosition(120, 70)
        fredemail = textsprite.create("10,000 dollars.", 1, 15)
        fredemail.setPosition(120, 80)
        fredemail = textsprite.create("-Fred", 1, 15)
        fredemail.setPosition(140, 100)
    }
})
let lightningball: Sprite = null
let fredemail: TextSprite = null
let phishingemailsprite: Sprite = null
let fredEmailSprite: Sprite = null
let GmailSpriteicon: Sprite = null
let loadingsprite: TextSprite = null
let loading = 0
let popupImageList: Image[] = []
let evilducksprite1: Sprite = null
let projectile: Sprite = null
let bluezone = false
let redsolid = false
let drone: Sprite = null
let blastersprite: Sprite = null
let statusbar: StatusBarSprite = null
let newVarGun = false
let popupSprite: Sprite = null
let evilDuckBoss: Sprite = null
let puter: Sprite = null
let Phisinglink: Sprite = null
let scammail: TextSprite = null
let hologuy: Sprite = null
let MouseSprite: Sprite = null
let Faceingright = false
let platfomerguy: Sprite = null
let lazergunequiped = false
let googleWorker: Sprite = null
let Vrgogglessprite: Sprite = null
let playerspritereal: Sprite = null
let passwordsstrenth = 0
let password = ""
let bugbontyreadd = false
let realplayerwalking = false
let clickerMinigame = false
clickerMinigame = false
if (blockSettings.readNumber("Part") == 1 || !(blockSettings.exists("Part"))) {
    blockSettings.writeNumber("Time", 0)
    blockSettings.writeNumber("Part", 1)
    realplayerwalking = false
    bugbontyreadd = false
    pause(1000)
    if (blockSettings.exists("Password")) {
        Load_In()
        password = blockSettings.readString("Password")
    } else {
        story.setSoundEnabled(true)
        story.printText("Create a password...", 75, 0, 7, 15, story.TextSpeed.Slow)
        password = game.askForString("password", 24)
        if (password.includes("!") || (password.includes("@") || (password.includes("#") || (password.includes("$") || (password.includes("%") || (password.includes("^") || (password.includes("&") || (password.includes("*") || (password.includes("(") || (password.includes(")") || (password.includes(",") || (password.includes(".") || password.includes("/"))))))))))))) {
            passwordsstrenth += 1
        }
        if (password.includes("1") || (password.includes("2") || (password.includes("3") || (password.includes("4") || (password.includes("5") || (password.includes("6") || (password.includes("7") || (password.includes("8") || (password.includes("9") || password.includes("0")))))))))) {
            passwordsstrenth += 1
        }
        if (7 < password.length) {
            passwordsstrenth += 1
        }
        if (passwordsstrenth == 3) {
            story.printText("Good password, logging in", 75, 0, 7, 15, story.TextSpeed.Slow)
            blockSettings.writeString("Password", password)
            Load_In()
        } else {
            story.printText("Password could be better.....ERROR", 75, 0, 7, 15, story.TextSpeed.Slow)
            game.setGameOverEffect(false, effects.dissolve)
            game.gameOver(false)
        }
        if (password.includes("1") || (password.includes("2") || (password.includes("3") || (password.includes("4") || (password.includes("5") || (password.includes("6") || (password.includes("7") || (password.includes("8") || (password.includes("9") || (password.includes("0") || password.includes("."))))))))))) {
            passwordsstrenth += 1
        }
    }
} else {
    if (blockSettings.readNumber("Part") == 2) {
        platformerguy()
    } else {
        CLICKER_MININIGAME()
    }
}
game.onUpdate(function () {
    if (lazergunequiped == true) {
        if (Faceingright == true) {
            blastersprite.setPosition(platfomerguy.x + 20, platfomerguy.y)
            blastersprite.setImage(img`
                1 . . . . f f f . . . . . 
                . 1 f f f 9 9 9 f f f f . 
                . f 8 5 8 8 8 8 8 8 8 8 f 
                . f 2 f 7 8 8 8 8 8 f f . 
                . f 8 a 8 8 8 8 8 f . . . 
                . f 8 8 8 8 f 8 8 f . . . 
                . f 8 8 8 f . f f . . . . 
                . f 8 8 f . . . . . . . . 
                . . f f . . . . . . . . . 
                `)
        } else {
            blastersprite.setPosition(platfomerguy.x - 20, platfomerguy.y)
            blastersprite.setImage(img`
                . . . . . f f f . . . . 1 
                . f f f f 9 9 9 f f f 1 . 
                f 8 8 8 8 8 8 8 8 5 8 f . 
                . f f 8 8 8 8 8 7 f 2 f . 
                . . . f 8 8 8 8 8 a 8 f . 
                . . . f 8 8 f 8 8 8 8 f . 
                . . . . f f . f 8 8 8 f . 
                . . . . . . . . f 8 8 f . 
                . . . . . . . . . f f . . 
                `)
        }
        if (platfomerguy.vy < 90) {
            platfomerguy.vy += 3
        }
    }
})
game.onUpdateInterval(6500, function () {
    if (bluezone == true) {
        for (let value of tiles.getTilesByType(assets.tile`myTile38`)) {
            lightningball = sprites.create(img`
                . . . 8 8 8 8 8 8 8 . . 
                . . 8 8 8 8 8 8 8 8 8 . 
                . 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 
                . 8 8 8 8 8 8 8 8 8 8 . 
                . . 8 8 8 8 8 8 8 8 . . 
                `, SpriteKind.Ball)
            animation.runImageAnimation(
            lightningball,
            [img`
                . . . . . . . . . . . . 9 . . . 
                . . . . 9 f f f f f f 9 9 . . . 
                . . . 9 9 f f f f f f 9 f . . . 
                . . 9 9 f f f f 9 9 f 9 f f . . 
                . 9 9 f f f 9 9 9 f f 9 9 f . . 
                . 9 f f f 9 9 f f f f f f 9 9 9 
                . 9 f f f f f f f f f f f f . . 
                . . f f f f f f f f f f f f . . 
                . . f f f f f f f f 9 f f f . . 
                . 9 9 f f f f f f f f 9 9 f . . 
                . . f 9 9 9 f f f f f f 9 9 . . 
                . . . f f f 9 f f f f f f 9 . . 
                . . . . f f f f f f f f 9 9 . . 
                . . . . . . . . . . 9 9 9 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . 6 f f f f f f f . . . . 
                . . . 6 6 f f f 6 6 f f f 6 . . 
                . 6 6 6 f f f f 6 f f f f 6 . . 
                . 6 f f f f f f 6 f f f 6 f . . 
                . . f f f f f f 6 f f f f 6 . . 
                . 6 f f f f f f f f f f f f . . 
                . . 6 6 f f f f f f f f f f . . 
                . . f f 6 6 f f f f f f f f . . 
                . . f f f f 6 f f f f f f 6 . . 
                . . f f f f 6 6 f f f 6 6 6 . . 
                . . . f f f 6 f f f 6 6 f . . . 
                . . . . f f f f f f f f . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(lightningball, value)
            lightningball.setFlag(SpriteFlag.DestroyOnWall, true)
            spriteutils.setVelocityAtAngle(lightningball, spriteutils.angleFrom(lightningball, platfomerguy), 30)
        }
    }
})
game.onUpdateInterval(1000, function () {
    blockSettings.writeNumber("Time", blockSettings.readNumber("Time") + 1)
})
game.onUpdateInterval(1000, function () {
    if (bluezone == true) {
        if (redsolid == true) {
            for (let value of tiles.getTilesByType(assets.tile`myTile44`)) {
                tiles.setTileAt(value, assets.tile`myTile46`)
                tiles.setWallAt(value, true)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile48`)) {
                tiles.setTileAt(value, assets.tile`myTile47`)
                tiles.setWallAt(value, false)
            }
            redsolid = false
        } else {
            for (let value of tiles.getTilesByType(assets.tile`myTile46`)) {
                tiles.setTileAt(value, assets.tile`myTile44`)
                tiles.setWallAt(value, false)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile47`)) {
                tiles.setTileAt(value, assets.tile`myTile48`)
                tiles.setWallAt(value, false)
            }
            redsolid = true
        }
    }
})
game.onUpdateInterval(100, function () {
    if (clickerMinigame == true) {
        popupSprite = sprites.create(popupImageList[randint(0, popupImageList.length - 1)], SpriteKind.popup)
        popupSprite.setPosition(randint(5, 155), randint(5, 115))
    }
})
