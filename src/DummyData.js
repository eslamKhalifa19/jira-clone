import { v4 as uuidv4 } from "uuid";

function generateColumnId() {
  return `${uuidv4()}_Z1`;
}

function generateIssueId() {
  return `${uuidv4()}_Z2`;
}
export const issues = [
  {
    id: generateIssueId(),
    category: "Backlog",
    text:
      "1 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 1",
    issueIcon: "arrow",
    issueIconColor: "kanban-card__icon-arrow--red",
    issueIconDirection: "up",
    AssigneeImage: "../img/profile-pic--1.jpg",
  },
  {
    id: generateIssueId(),
    category: "Backlog",
    text:
      " 2 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 1",
    issueIcon: "arrow",
    issueIconColor: "kanban-card__icon-arrow--green",
    issueIconDirection: "down",
    AssigneeImage: "../img/profile-pic--1.jpg",
  },
  {
    id: generateIssueId(),
    category: "Backlog",

    text:
      " 3 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 1",
    issueIcon: "check",
    AssigneeImage: "../img/profile-pic--1.jpg",
  },
  {
    id: generateIssueId(),
    category: "Backlog",

    text:
      " 4 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry 1",
    issueIcon: "bookmark",

    AssigneeImage: "../img/profile-pic--1.jpg",
  },
];

export const cardColumns = [
  {
    id: generateColumnId(),
    name: "Backlog",
    issues: issues,
  },
  {
    id: generateColumnId(),
    name: "Selected For Development",
    issues: [],
  },
  {
    id: generateColumnId(),
    name: "In Progress",
    issues: [],
  },
  {
    id: generateColumnId(),
    name: "Done",
    issues: [],
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
