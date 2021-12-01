CREATE TABLE [dbo].[projectAssignment](
    projectId INT NOT NULL,
    projectLead INT NOT NULL,
    FOREIGN KEY (projectId) REFERENCES [dbo].[projectDetails] (projectId),
    FOREIGN KEY (projectLead) REFERENCES [dbo].[userDetails] (userId)
);