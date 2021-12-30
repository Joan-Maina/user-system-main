CREATE OR ALTER TRIGGER [dbo].[deleteTasks] 
ON [dbo].[projectDetails]
AFTER UPDATE
AS 
BEGIN
UPDATE [dbo].[taskDetails] SET
isDeleted = 1 WHERE projectId = (
SELECT projectId FROM deleted d
)
END;