import { visit } from "unist-util-visit";
import readingTime from "reading-time";

/**
 * Calculates the reading time of your markdown files
 * @param {string} [options.attribute="readingTime"] - The attribute name in the file metadata to store the reading time.
 * @param {number} [options.wpm="200"] - the words per minute an average reader can read (default is 200)
 */
const plugin = (options={})=>{
    const defaultOpt = {
        attribute: "readingTime",
        wpm: 200
    }
    let config = Object.assign({},defaultOpt, options);
    return (tree: any, file :any)=>{
        let content = "";
        visit(tree, ['code','text'], (node)=>{
            content += node.value;
        })

        file.data.fm[config.attribute] = readingTime(content, {wordsPerMinute : config.wpm});
    
    }
}
 

export default plugin; 