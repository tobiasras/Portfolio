import fs from "fs";

const frontpage = fs.readFileSync("./public/template/base.html").toString()
export function allPages(){
   const files = getAllFiles("./public/notes")
    return files.map(file => {
        const filename = file
            .replace('./public/notes/', '')
            .replace('.html', '')
        const text = fs.readFileSync(file).toString()
        return create(text, filename)
    })
}

function create(article, title) {
    return {
        page: frontpage
            .replace("$TITTLE", title)
            .replace("$MAIN", article),
        title: title
    }

}

const getAllFiles = (dirPath) => {
    const filePath = []
    fs.readdirSync(dirPath).forEach(file => {
        filePath.push(dirPath + "/" + file)
    })
    return filePath
}