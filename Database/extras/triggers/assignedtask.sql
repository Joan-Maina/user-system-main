CREATE OR ALTER TRIGGER [dbo].[assignedtask]
ON [dbo].[taskAssignment]
AFTER INSERT
AS 
BEGIN
UPDATE [dbo].[taskDetails]
SET isAssigned = 1
WHERE taskId = (
    SELECT taskId FROM inserted i
)
END;