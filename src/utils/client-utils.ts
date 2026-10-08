import "client-only"
// this can use any function which will not work on server side 
export const clientSideFunction = () => {
    console.log(
        `use window object,
        use local storage`
    );
    return "client result";
}