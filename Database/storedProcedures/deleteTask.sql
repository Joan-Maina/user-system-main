CREATE OR ALTER PROCEDURE [dbo].[deletetask]
(
    @taskid varchar(255)
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @deleted BIT;

    SELECT @deleted = isDeleted FROM [dbo].[taskDetails] WHERE taskId = @taskid;

    IF @deleted = 0
        BEGIN
            UPDATE [dbo].[taskDetails]
            SET isDeleted = 1
            WHERE
                taskId = @taskid;
        END
END;
GO