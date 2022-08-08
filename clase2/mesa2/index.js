        var listRenderStock =[ ]; var listRenderNoStock =[ ]; var tasks = [ { 'name' : 'Manzas', 'stock' : true }, { 'name' : 'Peras', 'stock' : false }, { 'name' : 'Naranjas', 'stock' : true } ]; for (var i = 0, max = tasks.length; i
        < max; i +=1 ) {
            if(tasks[i].stock) { listRenderStock.push(<li>{tasks[i].name}</li>); } else { listRenderNoStock.push(
            <li>{tasks[i].name}</li>); } } const lista=
            <div>
                <h1>Lista de Productos en stock:</h1>

                <ul>
                    {listRenderStock}
                </ul>
                <h2>Productos en falta:</h2>
                <ul>
                    {listRenderNoStock}
                </ul>
            </div>
            ReactDOM.render(lista,document.getElementById("root"))
