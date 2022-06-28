function jsonHtmlParser(blocks){

    div = document.createElement('div');

    for(i in blocks){
        block = blocks[i];

        div.innerHTML += eval(block.type +'(block)');
    }
    
    return div

    function header(block){
        return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
    }
    function paragraph(block){
        return `<p>${block.data.text}</p>`;

    }
    function linkTool(block){
        return null;
    }
    function quote(block){
        return `<q cite="${block.data.caption}">${block.data.text}</q>`;
    }
    function list(block){
        str = '';

        for(i in block.data.items) {
            str += `<li>${block.data.items[i]}</li>\n`;
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
        return `<iframe src="${block.data.embed}" frameborder="0"></iframe>`
    }

}
