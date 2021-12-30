CREATE OR ALTER TRIGGER [dbo].[userprojectdelete]
ON [dbo].[projectDetails]
AFTER UPDATE
AS 
BEGIN 
DELETE FROM [dbo].[userProjects]
WHERE projectId = (
    SELECT projectId FROM inserted i
)
END;
