function jsonHtmlParser(blocks){

    blocksDict = {
        'header': heading(block),
        'paragraph': paragraph(block),
        'linkTool': linkTool(block),
        'quote': quote(block),
        'list': list(block),
        'checklist': checklist(block),
        'raw': raw(block),
        'image': image(block),
        'embed': embed(block)
    }

    function heading(block){
        return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
    }
    function paragraph(block){
        return `<p>${block.data.text}</p>`;

    }
    function linkTool(block){
        return null;
    }
    function quote(block){
        return `<q cite="${block.data.ccaption}">${block.data.text}</q>`;
    }
    function list(block){
        str = '';

        for(i in block.data.items) {
            str += `<li>${block.data.items[i].text}</li>\n`;
        }

        if(block.data.style == 'ordered'){
            return `<ol>${str}</ol>`;
        }else{
            return `<ul>${str}</ul>`;
        }
    }
    function checklist(block){
        str = '';

        for(i in block.data.items) {

            checked = '';
            if (block.data.items[i].checked == true) {
                checked = 'checked';
            }

            str += `<div>
                    <input type="checkbox" name="${i}" ${checked}>
                    <label for="${i}">${block.data.items[i].text}</label>
                    </div>`;
        }

        return `<fieldset>${str}</fieldset>`;
    }
    function raw(block){ 
        return `<code>${block.data.html}</code>`;
    }
    function image(block){
        return `<img src="${block.data.url}"  alt="${block.data.caption}">`;
    }
    function embed(block){ 
        return `<iframe src="${block.data.source}" frameborder="0"></iframe>`
    }

}