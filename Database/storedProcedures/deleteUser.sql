CREATE OR ALTER PROCEDURE [dbo].[deleteuser]
(
    @userid varchar(255)
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @deleted BIT;

    SELECT @deleted = isDeleted FROM [dbo].[userDetails] WHERE userId = @userid;

    IF @deleted = 0
        BEGIN
            UPDATE [dbo].[userDetails]
            SET isDeleted = 1
            WHERE
                userId = @userid;
        END
END;
GO