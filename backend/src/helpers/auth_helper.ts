export const filterBody = (body: {[index: string] : string}, ...allowedBody : string[]): {} => {
    const filterBody : {[index: string] : string} = {};
    Object.keys(body).forEach(item => {
        allowedBody.includes(item)
        filterBody[item] = body[item]
    })
    return filterBody;
}