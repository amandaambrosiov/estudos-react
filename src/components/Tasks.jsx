import { ChevronRightIcon, TrashIcon, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className="cursor-pointer text-left w-full text-white p-2 rounded-md transition flex items-center gap-2 bg-slate-400 hover:bg-slate-500"
                    >
                        {task.isCompleted && <Check className="w-5 h-5 text-white" />}
                        {task.title}
                    </button>

                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon />
                    </Button>

                    <Button
                        onClick={() => onDeleteTaskClick(task.id)}>
                        <TrashIcon />
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;