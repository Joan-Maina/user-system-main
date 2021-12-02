CREATE OR ALTER PROCEDURE [dbo].[updateproject]
(
    @projectid varchar(255)
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @completed BIT;

    SELECT @completed = isCompleted FROM [dbo].[projectDetails] WHERE projectId = @projectid;

    IF @completed = 0
        BEGIN
            UPDATE [dbo].[projectDetails]
            SET isCompleted = 1
            WHERE
                projectId = @projectid;
        END
END;
GO