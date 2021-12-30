CREATE OR ALTER TRIGGER [dbo].[userproject]
ON [dbo].[projectDetails]
AFTER UPDATE
AS 
BEGIN 
UPDATE [dbo].[userDetails]
SET projectId = 0
WHERE projectId = (
    SELECT projectId FROM inserted i
)
END;