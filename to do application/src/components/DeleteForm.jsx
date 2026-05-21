import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteForm = () => {

    const { ID } = useParams()

    const navigate = useNavigate()

    function handleDelete() {

        const tsks =
            JSON.parse(localStorage.getItem("B81TaSK")) || []

        const updatedTasks = tsks.filter(
            (t) => t.id.toString() !== ID.toString()
        )

        localStorage.setItem(
            "B81TaSK",
            JSON.stringify(updatedTasks)
        )

        alert("Task Deleted")

        navigate('/')
    }

    return (
        <div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>

        </div>
    )
}

export default DeleteForm