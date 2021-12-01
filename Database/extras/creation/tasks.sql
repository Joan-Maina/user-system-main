CREATE TABLE [dbo].[taskDetails]
(
    taskId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    taskTitle VARCHAR(255) NOT NULL,
    projectId INT  NOT NULL,
    taskStartdate DATETIME NOT NULL,
    taskEnddate DATETIME NOT NULL,
    isCompleted BIT NOT NULL DEFAULT 0,
    isDeleted BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (projectId) REFERENCES [dbo].[projectDetails] (projectId)
);