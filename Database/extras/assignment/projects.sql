CREATE TABLE [dbo].[projectAssignment](
    projectId INT NOT NULL,
    projectLead VARCHAR(255),
    FOREIGN KEY (projectId) REFERENCES [dbo].[projectDetails] (projectId),
    FOREIGN KEY (projectLead) REFERENCES [dbo].[userDetails] (email)
);