function parseHTMLtoJSON(html){

    blocks = [];

    for (let i = 0; i < html.children.length; i++) {
        const element = html.children[i];

        str = element.tagName.replace(/[0-9]/g, '') + '(element)'
        blocks.push(eval(str));
        
    }

    data = {
        "time": new Date().getTime(),
        "blocks": blocks,
    }

    return data


    function H(element){
        block = {
            "type": "header",
            "data": {
                "text": element.innerHTML,
                "level": Number(element.tagName.slice(-1))
            }
        }
        
        return block
    }

    function P(element){
        block = {
            "type": "paragraph",
            "data": {
                "text": element.innerHTML,
            }
        }
        
        return block
    }

    function A(element){
        block = {
            "type": "linkTool",
            "data": {
                "link": element.href,
            }
        }

        return block
    }

    function Q(element){
        block = {
            "type": "quote",
            "data": {
                "text": element.innerHTML,
                "caption": element.cite,
                "alignment": "left"
            }
        }

        return block
    }

    function UL(element){
        elementItems = element.children;
        items = [];
        for(i in elementItems){
            item = elementItems[i]
            items.push(item.innerHTML)
        }

        block = {
            "type": "list",
            "data": {
                "style": "unordered",
                "items": items
            }
        }

        return block
    }

    function OL(element){
        elementItems = element.children;
        items = [];
        for(i in elementItems){
            item = elementItems[i]
            items.push(item.innerHTML)
        }

        block = {
            "type": "list",
            "data": {
                "style": "ordered",
                "items": items
            }
        }

        return block;
    }

    function FIELDSET(element){
        elementItems = element.children;
        items = [];
        for(let i = 0; i < elementItems.length; i++){
            element = elementItems[i]
            
            item = {
                "text": element.childNodes[0].innerHTML,
                "checked": element.childNodes[1].checked
            }

            items.push(item)
        }

        block = {
            "type": "checklist",
            "data": {
                "items": items
            }
        }

        return block
    }

    function CODE(element){
        block = {
            "type": "raw",
            "data": {
                "html": element.innerHTML
            }
        }

        return block
    }
    function PRE(element){
        block = {
            "type": "raw",
            "data": {
                "html": element.innerHTML
            }
        }

        return block
    }

    function IMG(element){
        block = {
            "type": "image",
            "data": {
                "url": element.src,
                "caption": element.alt,
                "withBorder": false,
                "withBackground": false,
                "stretched": false
            }
        }

        return block 
    }

    function IFRAME(element){
        block = {
            "type": "embed",
            "data": {
                "embed": element.src,
                "caption": element.innerHTML
            }
        }

        return block
    }



    

}