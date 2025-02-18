function Tasks(props){
return (
<ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
    {props.tasks.map((task) => (
        <li key={task.id} className="flex">
        <button className="bg-slate-400 w-full text-white p-2 rounded-md ">{task.title}</button>
        <button>Ver detalhes</button>
        </li>
        ))}
    </ul>
    );
}

export default Tasks;