import { faCheck, faClock, faComment, faMagnifyingGlass, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const featureCardDatas = [
    {
        icon: faPlus,
        title: "Task Creation",
        description:
            "Users can create tasks, assigning a title and description to each task.",
    },

    {
        icon: faPen,
        title: "Task Assignments",
        description:
            "Users can assign tasks to specific team members, distributing responsibilities.",
    },
    {
        icon: faClock,
        title: "Priority Levels",
        description:
            "Tasks can be categorized by priority levels to help users focus on the most critical tasks.",
    },
    {
        icon: faComment,
        title: "Comments",
        description:
            "Users can add comments, facilitating communication and providing additional context.",
    },
    {
        icon: faMagnifyingGlass,
        title: "Search Functionality",
        description:
            "A search feature allows users to quickly find specific tasks, projects, or keywords.",
    },
    {
        icon: faCheck,
        title: "Checklists and Subtasks",
        description:
            "Users can break tasks into subtasks, providing view of the work that needs to be done.",
    },
];

export default featureCardDatas;
