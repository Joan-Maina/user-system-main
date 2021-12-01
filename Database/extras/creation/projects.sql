CREATE TABLE [dbo].[projectDetails]
(
    projectId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
    projectTitle VARCHAR(255) NOT NULL,
    projectClient VARCHAR(255) NOT NULL,
    projectStartdate DATETIME NOT NULL ,
    projectEnddate DATETIME NOT NULL,
    isCompleted BIT DEFAULT 0 NOT NULL,
    isDeleted BIT DEFAULT 0 NOT NULL
);