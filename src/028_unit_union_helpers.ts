

// Exclude<U, V> -> remove from U those members assinable to v
//Extract <U, V> -> keep from those members assaiable to V
// Nonnullable

type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup";
type EventType2 = Exclude<EventType1, "keydown">

function handleEvent1(e: EventType2){
    console.log(e)
}
// handleEvent1('keydown')

type ActionsN1 = "create" | "update" | "delete" | "read"
type ActionsN2 = Extract<ActionsN1, "create" | "update" | "delete">

function handleEvent2(e: ActionsN2){
    console.log(e)
}

// handleEvent2('read')

type MaybeNumber = number | null | undefined;
type CleanNumber = NonNullable<MaybeNumber>//number discarding null and undefined

function square(num: CleanNumber){
    return num * 2
}

square(10)
// square(null)