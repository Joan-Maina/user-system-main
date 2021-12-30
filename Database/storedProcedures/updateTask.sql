CREATE OR ALTER PROCEDURE [dbo].[updatetask]
(
    @taskid INT
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @completed BIT;

    SELECT @completed = isCompleted FROM [dbo].[taskDetails] WHERE taskId = @taskid;

    IF @completed = 0
        BEGIN
            UPDATE [dbo].[taskDetails]
            SET isCompleted = 1
            WHERE
                taskId = @taskid;
        END
END;
GO