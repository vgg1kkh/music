const path=require('path')

const resolve = dir => path.resolve(__dirname,dir)

module.exports={
    webpack: {
        resolve: {
           "@": resolve("src"),
           "components": resolve("src/components")
        }
    }
}