CREATE TABLE [dbo].[taskAssignment]
(
    taskId INT NOT NULL,
    taskLead INT NOT NULL,
    FOREIGN KEY (taskId) REFERENCES [dbo].[taskDetails] (taskId),
    FOREIGN KEY (taskLead) REFERENCES [dbo].[userDetails] (userId)
);