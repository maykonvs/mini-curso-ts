// boolean (true / false)
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string, string]
title = [1, "foo", "bar"]

// enum
enum Colors {
    white = '#fff',
    black = '#000',
}

let color: Colors
color = Colors.black

// any (qualquer coisa) NÃO É LEGAL
let coisa: any
coisa = [1]

// void (vazio)
function logger(): void {
    console.log('foo');
}

// null | undefined
type Bla = string | undefined

// never (nunca vai retornar algo) (no exemplo abaixo nunca retorna, sempre dá exceção).
function error(): never {
    throw new Error("error");
}

// object
let cart: object

cart = {
    key: "fi",
}

// Type Inference
let message2 = "Mensagem definida";
message2 = "string nova";

// O e é inferido para o tipo MouseEvent.
window.addEventListener("click", (e) => {
    console.log(e.target);
})

// Type alias
type Uid = number | string | undefined

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}

type Platform = 'Windows' | 'Linux' | 'Mac OS' | 'ios'

function renderPlatform(platform: Platform){
    return platform
}

renderPlatform("ios");

logDetails(123, 'sapato');
logDetails("123", "sapato");

logInfo(123, 'Willian');
logInfo('123', 'Willian');