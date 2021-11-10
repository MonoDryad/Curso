
        var ul = document.getElementById("myList");
        var li;
        var itemId;
        var item;


        adicionar = function (){
            let item;
            if(document.getElementById("tarefa").value != "");{

                item = document.getElementById("tarefa").value;
                itemId= ul.childElementCount;
                li = createItemEl(item.value, itemId)
                li.appendChild(createBtnDeRemover(itemId));
                ul.appendChild(li);
            }
            
        }
        remover = function (){

        }
        createItemEl = function (itemValue, itemId){

            let li = document.createElement("li")
            li.setAttribute("index", itemId)
            li.appendChild(document.createTextNode(itemValue))

            return li;
        }
        createBtnDeRemover = function (){
            let btn = document.createElement("button")
            btn.setAttribute("onclick", "removerTarefa("+itemId+")")
            btn.innerHTML = "X"
            return btn;
        }