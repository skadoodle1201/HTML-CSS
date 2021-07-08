let todo = prompt("What you want to do:").toLowerCase();
const todoList = [];
while(todo !== "quit")
{
    if(todo === 'new')
    {
        todoList.push(prompt("Create the task:"));
        console.log("Added to list");

    }
    else if(todo === 'list')
    {   
        console.log("************");
        for(let i= 0; i<todoList.length;i++)
        {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("************");
    }
    else if(todo === 'delete')
    {
        const index = parseInt(prompt("Enetr an index to delete"));
        if(!Number.isNaN(index))
        {
            let deleteList = todoList.splice(index , 1);
            console.log(`OK deleted ${deleteList[0]}`);
        }
        else{

            console.log("unknown index");
        }
        
    }
    todo = prompt("What you want to do:").toLowerCase();
}
if(todo === 'quit')
{
    console.log("OK YOU QUIT");
}