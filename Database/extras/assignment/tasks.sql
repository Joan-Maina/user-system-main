
CREATE TABLE [dbo].[taskAssignment](
    taskId INT NOT NULL,
    taskLead VARCHAR(255),
isActive BIT DEFAULT 0,
    FOREIGN KEY (taskId) REFERENCES [dbo].[taskDetails] (taskId),
    FOREIGN KEY (taskLead) REFERENCES [dbo].[userDetails] (email)
);