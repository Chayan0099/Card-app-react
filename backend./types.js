const zod = require('zod'); 
const creatCard = zod.object({
    name: zod.string(), 
    description: zod.string(),
    links: zod.array(zod.string()), 
    interest: zod.string() 
})

const updateCard = zod.object({
    id: zod.string()
})

module.exports = {
    creatCard, updateCard
}