export const KanbanCardCategory = [
  {
    id: 1,
    category: "Backlog",
  },
  {
    id: 2,
    category: "Selected for Development",
  },
  {
    id: 3,
    category: "In Progress",
  },
  {
    id: 4,
    category: "Done",
  },
];

export const kanbanCards = [
  {
    id: "1",
    category: "Backlog",
    text:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 1",
    issueIcon: "arrow",
    issueIconColor: "kanban-card__icon-arrow--red",
    issueIconDirection: "up",
    AssigneeImage: "../img/profile-pic--1.jpg",
  },
  {
    id: "2",
    category: "Selected For Development",
    text:
      " 2 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 1",
    issueIcon: "arrow",
    issueIconColor: "kanban-card__icon-arrow--green",
    issueIconDirection: "down",
    AssigneeImage: "../img/profile-pic--1.jpg",
  },
  {
    id: "3",
    category: "In Progress",

    text:
      " 3 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 1",
    issueIcon: "check",
    AssigneeImage: "../img/profile-pic--1.jpg",
  },
  {
    id: "4",
    category: "Done",

    text:
      " 4 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 1",
    issueIcon: "bookmark",

    AssigneeImage: "../img/profile-pic--1.jpg",
  },
];

export const projectCategory = [
  {
    label: "Software",
    value: "software",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
  {
    label: "Business",
    value: "business",
  },
];

export const issueType = [
  {
    label: "Task",
    value: "task",
    icon: "check",
  },
  {
    label: "Bug",
    value: "bug",
    icon: "error",
    color: "red",
  },
  {
    label: "Story",
    value: "story",
    icon: "bookmark",
    color: "green",
  },
];

export const Priority = [
  {
    label: "Medium",
    value: "medium",
    icon: "arrow-up",
    color: "orange",
  },
  {
    label: "High",
    value: "high",
    icon: "arrow-up",
    color: "red",
  },
  {
    label: "Low",
    value: "low",
    icon: "arrow-down",
    color: "green",
  },
];

export const Reporter = [
  {
    label: "Ronaldo",
    value: "ronaldo",
    src: "../img/profile-pic--1.jpg",
  },
  {
    label: "Messi",
    value: "messi",
    src: "../img/profile-pic--2.jpg",
  },
];

export const Assignees = [
  {
    label: "Ronaldo",
    value: "ronaldo",
    src: "../img/profile-pic--1.jpg",
  },
  {
    label: "Messi",
    value: "messi",
    src: "../img/profile-pic--2.jpg",
  },
];
