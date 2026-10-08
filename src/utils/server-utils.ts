import "server-only"
export const severSideFunction = () => {
    console.log(
        `use multiple libraries,
        use envoirment variables,
        interact with a database,
        process confidential information`
    );
    return "server result";
}