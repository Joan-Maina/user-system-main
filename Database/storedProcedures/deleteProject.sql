CREATE OR ALTER PROCEDURE [dbo].[deleteproject]
(
    @projectid varchar(255)
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @deleted BIT;

    SELECT @deleted = isDeleted FROM [dbo].[projectDetails] WHERE projectId = @projectid;

    IF @deleted = 0
        BEGIN
            UPDATE [dbo].[projectDetails]
            SET isDeleted = 1
            WHERE
                projectId = @projectid;
        END
END;
GO